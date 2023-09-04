const router = require("express").Router();
let Student = require("../models/student.model");


// Get all students
router.route("/").get((req, res) => {
    Student.find()
    .then(students => res.json(students))
    .catch(err => res.status(400).json("Error: " + err))
});


// Get one student
router.route("/:id").get((req, res) => {
    Student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(err => res.status(400).json("Error: " + err));
});


// Add new student
router.route("/").post((req, res) => {
    const name = req.body.name;
    const score1 = Number(req.body.score1);
    const score2 = Number(req.body.score2);
    const score3 = Number(req.body.score3);

    const newStudent = new Student({ name, score1, score2, score3 });

    newStudent.save()
    .then(() => res.json("Student Added"))
    .catch(err => res.status(400).json("Error: " + err));
});


// Edit student
router.route("/:id").put((req, res) => {
    Student.findById(req.params.id)
    .then(student => {
        student.name = req.body.name;
        student.score1 = Number(req.body.score1);
        student.score2 = Number(req.body.score2);
        student.score3 = Number(req.body.score3);

        student.save()
        .then(() => res.json("Student Updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});


// Delete student
router.route("/:id").delete((req, res) => {
    Student.findByIdAndDelete(req.params.id)
    .then(() => res.json("Student deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});



module.exports = router;