import express from "express";
import { createEntry, getAllEntries, getEntryById } from "../controllers/guestbook.controller.js";

const router = express.Router()

router.get("/", getAllEntries);

router.get("/:id", getEntryById);

router.post("/", createEntry);

router.delete("/:id", (req, res)=>{
    //방명록 삭제
})

router.patch("/:id", (req, res)=>{
    //방명록 수정
})

export default router