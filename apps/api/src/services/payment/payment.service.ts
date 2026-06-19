const paypalClientId = process.env.PAYPAL_CLIENT_ID || ''
const paypalClientSecret = process.env.PAYPAL_CLIENT_SECRET || ''
const paypalApiUrl = process.env.PAYPAL_API_URL || 'https://api-m.sandbox.paypal.com'

const hasPayPalCredentials = Boolean(
  paypalClientId &&
  paypalClientSecret &&
  paypalClientId !== 'replace-me' &&
  paypalClientSecret !== 'replace-me'
)

async function getPayPalAccessToken(): Promise<string | null> {
  if (!hasPayPalCredentials) {
    return null
  }

  const auth = Buffer.from(`${paypalClientId}:${paypalClientSecret}`).toString('base64')

  try {
    const response = await fetch(`${paypalApiUrl}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${auth}`,
      },
      body: 'grant_type=client_credentials',
    })

    if (!response.ok) {
      console.error('PayPal token request failed:', response.status)
      return null
    }

    const data = await response.json()
    return data.access_token
  } catch (error) {
    console.error('Failed to get PayPal access token:', error)
    return null
  }
}

export async function verifyPayPalPayment(
  orderId: string,
  expectedTotalAmount: number
): Promise<{
  success: boolean
  verified: boolean
  payerId?: string
  amount?: number
  message: string
}> {
  if (!hasPayPalCredentials) {
    return {
      success: false,
      verified: false,
      message: 'PayPal credentials not configured. Use demo mode.',
    }
  }

  try {
    const accessToken = await getPayPalAccessToken()

    if (!accessToken) {
      return {
        success: false,
        verified: false,
        message: 'Failed to authenticate with PayPal',
      }
    }

    const response = await fetch(`${paypalApiUrl}/v2/checkout/orders/${orderId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      return {
        success: false,
        verified: false,
        message: 'PayPal order not found or request failed',
      }
    }

    const order = await response.json()

    if (order.status !== 'COMPLETED') {
      return {
        success: true,
        verified: false,
        message: `Payment status is ${order.status}, not COMPLETED`,
      }
    }

    const purchaseUnit = order.purchase_units?.[0]
    const paidAmount = parseFloat(purchaseUnit?.payments?.captures?.[0]?.amount?.value || '0')
    const payerId = order.payer?.payer_id

    if (Math.abs(paidAmount - expectedTotalAmount) > 0.01) {
      return {
        success: true,
        verified: false,
        message: `Payment amount mismatch: expected ${expectedTotalAmount}, got ${paidAmount}`,
      }
    }

    return {
      success: true,
      verified: true,
      payerId,
      amount: paidAmount,
      message: 'Payment verified successfully',
    }
  } catch (error: any) {
    return {
      success: false,
      verified: false,
      message: error.message || 'Payment verification failed',
    }
  }
}

export { hasPayPalCredentials }
