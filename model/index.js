const { Sequelize, DataTypes, } = require('sequelize')
const config = require('../config/db')

const sequelize = new Sequelize(
    config.DB, 
    config.User, 
    config.Password, {
        host: config.Host,
        dialect: config.dialect,
        port: config.port,
        pool: config.pool
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Univercities = require('./univercities.model')(sequelize, DataTypes)
db.Student = require('./student.model')(sequelize, DataTypes)
db.Student_Univercities = require('./student_univercities.model')(sequelize, DataTypes)

db.Student.belongsToMany(db.Univercities, {
    through: 'Student_Univercities',
    foreignKey: 'student_id'
});

db.Univercities.belongsToMany(db.Student, {
    through: 'Student_Univercities',
    foreignKey: 'univercities_id'
});

module.exports = db;