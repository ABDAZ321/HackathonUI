import express from "express";
import {
    createNote,
    deleteNote,
    getNotes,
    getUserNotes
} from "../controllers/notes.js";


const router = express.Router();


router.get("/", getNotes)
router.post("/create", createNote);
router.get("/get/:userId", getUserNotes);
router.delete("/delete/:id", deleteNote);

export default router;