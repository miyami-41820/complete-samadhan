import { Router } from "express";
import { 
    sendServiceEmail,
    getServices,
    updateServiceRequest,
    getServicesAdmin,
    getServicesUser
} from "../controllers/serivces.controller.js";


const router = Router()

router.route("").get(getServices)
router.route("/request-service").post(sendServiceEmail)
router.route("/get-requests").get(getServicesAdmin)
router.route("/update-request").post(updateServiceRequest)
router.route("/user-services").post(getServicesUser)

export default router