import express from "express";
import AboutServiceController from "./about-service-controller.js";

const router = express.Router()
const controller = new AboutServiceController()

router.get("/about", (req, res) => {

})

export default router