'use client'

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

interface PayPalCheckoutProps {
  clientId: string
  totalCost: number
  onSuccess: (payerId: string, paymentId: string) => void
}

export default function PayPalCheckout({
  clientId,
  totalCost,
  onSuccess,
}: PayPalCheckoutProps) {
  return (
    <PayPalScriptProvider options={{ 'client-id': clientId }}>
      <PayPalButtons
        style={{ layout: 'horizontal', color: 'blue', height: 40, tagline: false }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totalCost.toString(),
                },
              },
            ],
          })
        }}
        onApprove={(data, actions: any) => {
          return actions.order.capture().then((details: any) => {
            onSuccess(details.payer.payer_id, details.id)
          })
        }}
      />
    </PayPalScriptProvider>
  )
}
