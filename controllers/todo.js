import Todo from "../models/ToDo.js"


export const getTodos = async (req, res) => {
    try {
        const todo = await Todo.find();

        res.status(200).json(todo)
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
}
export const createTodo = async (req, res) => {
    try {
        const {
            userId,
            title,
            description,
            grade,
            dueDate
        } = req.body;

        const newToDo = new Todo({
            userId,
            title,
            description,
            grade,
            dueDate
        })
        await newToDo.save();

        const todo = await Todo.find()

        res.status(201).json(todo)
    } catch (err) {
        res.status(409).json({
            message: err.message
        });
    }
}

export const getUserTodos = async (req, res) => {
    try {
        const {
            userId
        } = req.params;
        const todo = await Todo.find({
            userId
        })

        res.status(200).json(todo)
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const {
            id
        } = req.params;

        const todo = await Todo.findByIdAndDelete({
            _id: id
        })

        const todos = await Todo.find();
        res.status(200).json(todos)
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
}

export const checkTodo = async (req, res) => {
    try {
        const {
            id
        } = req.params;

        const todo = await Todo.findById(id)
        const isChecked = todo.isFinished;

        if (isChecked) {
            todo.isFinished = false;
        } else {
            todo.isFinished = true;
        }

        const updatedTodo = await Todo.findByIdAndUpdate(
            id, {
                isFinished: todo.isFinished
            }
        )
        res.status(200).json(updatedTodo)
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
}