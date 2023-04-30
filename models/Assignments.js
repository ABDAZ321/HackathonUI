import mongoose from "mongoose";

const AssignmentSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    grade: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const Assignment = mongoose.model("Assignment", AssignmentSchema);

export default Assignment;