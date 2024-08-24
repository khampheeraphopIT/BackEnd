module.exports = (sequelize, DataTypes) => {
    const Univercities = sequelize.define('Univercities', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Univercities;
};
