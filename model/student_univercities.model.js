module.exports = (sequelize, DataTypes) => {
    const Student_Univercities = sequelize.define('Student_Univercities', {
        student_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Students',
                key: 'id'
            }
        },
        univercities_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Univercities',
                key: 'id'
            }
        },
        education: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Student_Univercities;
};