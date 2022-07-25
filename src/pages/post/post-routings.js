import express from "express";
import PostController from "./post-controller.js";

const router = express.Router()
const controller = new PostController()

router.get("/post/:postId", (req, res) => {
    const postId = req.params["postId"]
})

router.post("/post/:postId/react", (req, res) => {
    const postId = req.params["postId"]
})

router.post("/post/:postId/comment", (req, res) => {
    const postId = req.params["postId"]
})

export default router