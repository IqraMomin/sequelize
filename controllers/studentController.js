const Students = require('../models/Students');

const addStudent =async (req,res)=>{
    try{
        const {name,email} = req.body;
        const student = await Students.create({
           name,email
        })
        res.status(200).send("User added Successfully")
    }
    catch(err){
        console.log(err);
    }
}

const updateStudent = async (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const student = await Students.findByPk(id);
    if(!student){
        res.status(404).send("Student not found");
    }
    student.name = name;
    await student.save();
    res.status(200).send("User updated successfully");
}

module.exports = {
    addStudent,updateStudent
}