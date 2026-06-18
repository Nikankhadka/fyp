//setup passport js login strategy
import passport from "passport";
import { Strategy as googleStrategy } from "passport-google-oauth20";
import { Strategy as facebookStrategy } from "passport-facebook";
import { apiBaseUrl } from "./constant";

import * as dotenv from "dotenv";
dotenv.config();

export const googleOAuthEnabled = Boolean(
  process.env.googleClientId && process.env.googleClientSecret,
);

export const facebookOAuthEnabled = Boolean(
  process.env.facebookClientId && process.env.facebookClientSecret,
);

if (googleOAuthEnabled) {
  passport.use(
    new googleStrategy(
      {
        clientID: process.env.googleClientId!,
        clientSecret: process.env.googleClientSecret!,
        callbackURL: `${apiBaseUrl}/auth/v1/google-callback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const {
            _json: { name, email, picture },
          } = profile;
          done(null, { userName: name, email, profile_Img: picture });
        } catch (e) {
          done(e as Error);
        }
      },
    ),
  );
} else {
  console.warn("Google OAuth disabled: googleClientId/googleClientSecret are not configured.");
}

if (facebookOAuthEnabled) {
  passport.use(
    new facebookStrategy(
      {
        clientID: process.env.facebookClientId!,
        clientSecret: process.env.facebookClientSecret!,
        callbackURL: `${apiBaseUrl}/auth/v1/facebook-callback`,
        profileFields: ["id", "displayName", "photos", "email"],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const profile_Img = profile.photos?.[0]?.value || "";
          const {
            _json: { name, id },
          } = profile;

          done(null, { userName: name, email: id, profile_Img });
        } catch (e) {
          done(e as Error);
        }
      },
    ),
  );
} else {
  console.warn("Facebook OAuth disabled: facebookClientId/facebookClientSecret are not configured.");
}
