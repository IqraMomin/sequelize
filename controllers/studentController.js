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

module.exports = {
    addStudent
}