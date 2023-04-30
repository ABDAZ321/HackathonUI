import express from "express";

import {
    checkTodo,
    createTodo,
    deleteTodo,
    getTodos,
    getUserTodos
} from "../controllers/todo.js";

const router = express.Router();


router.get("/", getTodos)
router.post("/create", createTodo);
router.get("/get/:userId", getUserTodos);
router.delete("/delete/:id", deleteTodo);
router.patch("/:id", checkTodo)

export default router;