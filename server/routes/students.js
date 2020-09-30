const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

router.post("/student", async (req, res) => {
  try {
    const s = req.body;
    const NewStudent = new Student(s);
    const student = await NewStudent.save();
    res.json(student);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.post("/init", async (req, res) => {
  try {
    const initStudents = req.body;
    const students = await Student.collection.insertMany(initStudents);
    res.json(students.ops);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.get("/nationalities", async (req, res) => {
  try {
    const nationalities = await Student.find({}).select("nationality");
    res.json(nationalities);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.post("/:nationality", async (req, res) => {
  try {
    const n = req.params.nationality;
    const students = await Student.find({ nationality: n });
    res.json(students);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
