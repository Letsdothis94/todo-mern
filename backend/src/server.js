// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();

// connectDB();

app.use(express.json());
app.use(rateLimiter);
app.use(cors({
    origin:"http://localhost:5173"
}));

// app.use((req, res, next) => {
//     console.log(`Req method is: ${req.method} & Req url is: ${req.url}`);
//     next();
// })

app.use("/api/notes", notesRoutes);

const port = process.env.PORT || 5001;

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Listening on port: ${port}`);
    })
});