import { Router } from "express";
import { 
    sendOTP,
    validateOTP,
    reSendOTP,
    updateUser,
    getUserData,
    getUserDataStart
} from "../controllers/otp-varify.controller.js";


const router = Router()

router.route("/send-otp-phone").post(sendOTP)
router.route("/verify-otp-phone").post(validateOTP)
router.route("/resend-otp-phone").post(reSendOTP)
router.route("/update-user").post(updateUser)
router.route("/user-data").post(getUserData)
router.route("/user-data-start").get(getUserDataStart)

export default router