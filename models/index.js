const Students = require('./Students');
const IdentityCard = require('./identityCard');
const Department = require('./department');

Students.hasOne(IdentityCard);
IdentityCard.belongsTo(Students);


Department.hasMany(Students);
Students.belongsTo(Department);

module.exports = {Students,IdentityCard,Department}