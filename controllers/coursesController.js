const { Students } = require("../models");
const Courses = require("../models/courses");

const addCourse = async (req,res)=>{
    try{
        const {name} = req.body;
        const course = await Courses.create({name});
        res.status(201).json(course);
    }
    catch(err){
        res.status(500).send("Failed to add Course");
    }
}

const addStudentsToCourse = async(req,res)=>{
    try{
        const {studentId,courseId} = req.body;
        const student = await Students.findByPk(studentId);
        const course = await Courses.findAll({
            where:{
                id:courseId
            }
        })
        await student.addCourse(course);
        const updatedStudent = await Students.findByPk(studentId,{include:course});
        res.status(200).json(updatedStudent);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}

module.exports = {addCourse,addStudentsToCourse}