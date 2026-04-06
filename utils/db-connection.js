const {Sequelize}  =require('sequelize');

const sequelize = new Sequelize('testDB','root','Cutesel79*',{host:"localhost",dialect:"mysql"});

(async ()=>{
    try{
        await sequelize.authenticate();
        console.log("Connection Created");   
    }
    catch(err){
        console.log(err);
    }
})();

module.exports = sequelize;
