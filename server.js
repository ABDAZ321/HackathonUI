import express from "express";
import mongoose from "mongoose";

import authRoutes from './routes/Auth.js';
import todoRoutes from './routes/ToDo.js';
import noteRoutes from "./routes/Note.js";
import assignmentRoutes from "./routes/Assignments.js"
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors(({
  origin: "http://localhost:3000"
})))


app.use("/assignments", assignmentRoutes)
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);
app.use("/note", noteRoutes)


mongoose
  .connect("mongodb+srv://powdee:12345@cluster0.tavkfws.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3001, () => {
      console.log('started on port 3000')
    })
  })
  .catch((error) => console.log(`${error} did not connect`));