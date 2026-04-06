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

const deleteStudent = async(req,res)=>{
    try{
        const {id} = req.params;
        const student = await Students.destroy({
            where:{
                id:id
            }
        })
        if(!student){
            res.status(404).send("Student not Found!");
        }
        res.status(200).send("Student deleted successfully");
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    addStudent,updateStudent,deleteStudent
}