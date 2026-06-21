export const httpOnlyCookie = true

export const cookieSecure =
  process.env.NODE_ENV === "production"

export const cookieSameSite =
  process.env.NODE_ENV === "production" ? "none" : "lax"

const defaultWebAppUrl =
  process.env.NODE_ENV === "production"
    ? "https://fyp-web-inky.vercel.app"
    : "http://localhost:3000"

const defaultApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://fyp-yfyb.onrender.com"
    : "http://localhost:2900"

export const webAppUrl =
  process.env.WEB_APP_URL || defaultWebAppUrl

export const apiBaseUrl =
  process.env.API_BASE_URL || defaultApiBaseUrl

const configuredCorsOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(",")
  : []

export const corsOrigins = Array.from(
  new Set(
    [
      ...configuredCorsOrigins,
      webAppUrl,
      "https://fyp-web-inky.vercel.app",
      "http://localhost:3000",
      "http://127.0.0.1:3000",
    ]
      .map((origin) => origin.trim())
      .filter(Boolean),
  ),
)

export const cloudinaryCloudName =
  process.env.CLOUDINARY_CLOUD_NAME || ""

export const cloudinaryApiKey =
  process.env.CLOUDINARY_API_KEY || ""

export const paypalClientId =
  process.env.PAYPAL_CLIENT_ID || ""

export const paypalApiUrl =
  process.env.PAYPAL_API_URL || "https://api-m.sandbox.paypal.com"
