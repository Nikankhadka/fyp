
import {Router} from "express"
import { registerUserC,LoginC,refreshTokenC,googleLoginC,forgotPasswordPatchC,facebookLoginC,logOutC, forgotPasswordC} from "../../controllers/auth/auth.controller"
import { validateInput } from "../../middlewares/inputvalidation"
import dbConnect from "../../configs/db"
import passport from "passport"

import "../../configs/strategy"
import { facebookOAuthEnabled, googleOAuthEnabled } from "../../configs/strategy"




const router=Router()

const providerUnavailable = (provider: string) => (_req: any, res: any) =>
  res.status(503).json({
    success: false,
    message: `${provider} login is not configured for this deployment`,
  })


router.post("/registerUser",validateInput,registerUserC)
router.post("/login",validateInput,LoginC)



//since we are using token instead of session false 
router.get(
  "/google-login",
  googleOAuthEnabled
    ? passport.authenticate("google",{scope:["profile","email"],session:false})
    : providerUnavailable("Google"),
)
router.get(
  "/google-callback",
  googleOAuthEnabled
    ? passport.authenticate("google",{session:false})
    : providerUnavailable("Google"),
  googleLoginC,
)

//for facebook
router.get(
  "/facebook-login",
  facebookOAuthEnabled
    ? passport.authenticate("facebook",{scope:['email'],session:false})
    : providerUnavailable("Facebook"),
)
router.get(
  "/facebook-callback",
  facebookOAuthEnabled
    ? passport.authenticate("facebook",{session:false})
    : providerUnavailable("Facebook"),
  facebookLoginC,
)


//reset password/forgot password
router.post('/forgotPassword/:email',forgotPasswordC)
router.get('/forgotPasswordPatch/:token',forgotPasswordPatchC)



//userVerification + Token rotation
router.post("/refreshToken",refreshTokenC)
router.delete("/logout",logOutC)
















export default router
