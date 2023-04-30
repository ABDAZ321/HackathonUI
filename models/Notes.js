import mongoose from "mongoose";

const NotesSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const Notes = mongoose.model("Notes", NotesSchema);

export default Notes;