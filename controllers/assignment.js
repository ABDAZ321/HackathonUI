import Assignment from "../models/Assignments.js";

export const getSubject = async (req, res) => {
    try {
        const subject = await Assignment.find();

        res.status(200).json(subject)
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
}
export const createSubject = async (req, res) => {
    try {
        const {
            userId,
            subject,
            grade
        } = req.body;

        const newSubject = new Assignment({
            userId,
            subject,
            grade
        })

        await newSubject.save();

        const subjects = await Assignment.find()

        res.status(201).json(subjects)
    } catch (err) {
        res.status(409).json({
            message: err.message
        });
    }
}

export const getUserSubject = async (req, res) => {
    try {
        const {
            userId
        } = req.params;
        const assignments = await Assignment.find({
            userId
        })

        res.status(200).json(assignments)
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
}

export const deleteSubject = async (req, res) => {
    try {
        const {
            id
        } = req.params;

        const subject = await Assignment.findByIdAndDelete({
            _id: id
        })

        const subjects = await Assignment.find();
        res.status(200).json(subjects)
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
}