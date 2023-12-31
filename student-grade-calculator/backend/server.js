const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());


const ATLAS_URI = process.env.ATLAS_URI;
mongoose.connect(ATLAS_URI);

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established");
});

const studentRouter = require("./routes/students");
app.use("/students", studentRouter);



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});