import { Router } from "express";
import { 
    sendOTP,
    validateOTP,
    reSendOTP,
    updateUser,
    getUserData
} from "../controllers/otp-varify.controller.js";


const router = Router()

router.route("/send-otp-phone").post(sendOTP)
router.route("/verify-otp-phone").post(validateOTP)
router.route("/resend-otp-phone").post(reSendOTP)
router.route("/update-user").post(updateUser)
router.route("/user-data").post(getUserData)


export default router