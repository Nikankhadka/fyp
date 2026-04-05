export const httpOnlyCookie = true

export const cookieSecure =
  process.env.NODE_ENV === "production"

export const cookieSameSite =
  process.env.NODE_ENV === "production" ? "none" : "lax"

export const webAppUrl =
  process.env.WEB_APP_URL || "http://localhost:3000"

export const apiBaseUrl =
  process.env.API_BASE_URL || "http://localhost:2900"

export const corsOrigins = (
  process.env.CORS_ORIGINS ||
  [
    webAppUrl,
    "http://localhost:3000",
    "http://127.0.0.1:3000",
  ].join(",")
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean)
