const express = require('express');
const router = express.Router();
const coursesController = require("../controllers/coursesController");

router.post("/addCourse",coursesController.addCourse);
router.post("/addStudentsToCourse",coursesController.addStudentsToCourse);

module.exports = router;