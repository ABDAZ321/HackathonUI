import express from "express";

import {
    createSubject,
    deleteSubject,
    getSubject,
    getUserSubject
} from "../controllers/assignment.js";


const router = express.Router();


router.get("/", getSubject)
router.post("/create", createSubject);
router.get("/get/:userId", getUserSubject);
router.delete("/delete/:id", deleteSubject);


export default router;