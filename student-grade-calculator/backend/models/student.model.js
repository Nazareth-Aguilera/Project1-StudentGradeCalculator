const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: { type: String, required: true, unique: true, trim: true, minlength: 3 },
    score1: { type: Number, required: true},
    score2: { type: Number, required: true},
    score3: { type: Number, required: true }
    }, 
    {
        timestamps: true
    }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;