import type { CookieOptions } from "express"

const parseBoolean = (value: string | undefined, fallback: boolean) => {
  if (value === undefined) return fallback
  return value === "true"
}

const parseSameSite = (value: string | undefined) => {
  if (value === "lax" || value === "strict" || value === "none") {
    return value
  }

  return process.env.NODE_ENV === "production" ? "none" : "lax"
}

const parseTrustProxy = (value: string | undefined) => {
  if (value === undefined) {
    return process.env.NODE_ENV === "production" ? 1 : false
  }

  if (value === "false") return false
  if (value === "true") return 1

  const numericValue = Number(value)
  return Number.isNaN(numericValue) ? value : numericValue
}

export const httpOnlyCookie = true

export const cookieSecure = parseBoolean(
  process.env.COOKIE_SECURE,
  process.env.NODE_ENV === "production"
)

export const cookieSameSite = parseSameSite(process.env.COOKIE_SAME_SITE)

export const trustProxy = parseTrustProxy(process.env.TRUST_PROXY)

export const internalApiBaseUrl =
  process.env.API_BASE_URL || "http://localhost:2900"

export const publicApiBaseUrl =
  process.env.PUBLIC_API_BASE_URL || internalApiBaseUrl

export const publicWebAppUrl =
  process.env.PUBLIC_WEB_APP_URL ||
  process.env.WEB_APP_URL ||
  "http://localhost:3000"

// Backward-compatible aliases for older imports during the migration window.
export const webAppUrl = publicWebAppUrl
export const apiBaseUrl = publicApiBaseUrl

export const corsOrigins = (
  process.env.CORS_ORIGINS ||
  [
    publicWebAppUrl,
    "http://localhost:3000",
    "http://127.0.0.1:3000",
  ].join(",")
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean)

export const authCookieBaseOptions: Pick<
  CookieOptions,
  "httpOnly" | "sameSite" | "secure"
> = {
  httpOnly: httpOnlyCookie,
  sameSite: cookieSameSite,
  secure: cookieSecure,
}

export const createCookieOptions = (maxAge: number): CookieOptions => ({
  ...authCookieBaseOptions,
  maxAge,
})
