import { Router } from "express";
import { 
    sendServiceEmail,
    getServices,
    updateServiceRequest,
    getServicesAdmin,
    getServicesUser,
    Checkout,
    SendApiKey
} from "../controllers/serivces.controller.js";


const router = Router()

router.route("").get(getServices)
router.route("/checkout").post(Checkout)
router.route("/api_key_service").get(SendApiKey)
router.route("/request-service").post(sendServiceEmail)
router.route("/get-requests").get(getServicesAdmin)
router.route("/update-request").post(updateServiceRequest)
router.route("/user-services").post(getServicesUser)

export default router