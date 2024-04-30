import { Router } from "express";
import { 
    sendServiceEmail,
    getServices
} from "../controllers/serivces.controller.js";


const router = Router()

router.route("").get(getServices)
router.route("/request-service").post(sendServiceEmail)
// router.route("/verify-otp-phone").post(validateOTP)
// router.route("/resend-otp-phone").post(refreshAccessToken)
// router.route("/change-password").post(verifyJWT, changeCurrentPassword)
// router.route("/current-user").get(verifyJWT, getCurrentUser)
// router.route("/update-account").patch(verifyJWT, updateAccountDetails)

// router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar)
// router.route("/cover-image").patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage)

// router.route("/c/:username").get(verifyJWT, getUserChannelProfile)
// router.route("/history").get(verifyJWT, getWatchHistory)

export default router