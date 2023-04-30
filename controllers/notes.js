import Note from "../models/Notes.js"


export const getNotes = async (req, res) => {
    try {
        const note = await Note.find();

        res.status(200).json(note)
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
}
export const createNote = async (req, res) => {
    try {
        const {
            userId,
            subject,
            notes,
        } = req.body;

        const newToDo = new Note({
            userId,
            subject,
            notes,
        })
        await newToDo.save();

        const note = await Note.find()

        res.status(201).json(note)
    } catch (err) {
        res.status(409).json({
            message: err.message
        });
    }
}

export const getUserNotes = async (req, res) => {
    try {
        const {
            userId
        } = req.params;
        const note = await Note.find({
            userId
        })

        res.status(200).json(note)
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
}

export const deleteNote = async (req, res) => {
    try {
        const {
            id
        } = req.params;

        const note = await Note.findByIdAndDelete({
            _id: id
        })

        const notes = await Note.find();
        res.status(200).json(notes)
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
}