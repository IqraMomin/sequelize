const express = require('express');
const router = express.Router();
const studentController = require("../controllers/studentController");

router.post("",studentController.addStudent);
router.put("/update/:id",studentController.updateStudent);

module.exports = router