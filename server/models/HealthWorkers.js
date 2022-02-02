module.exports = (sequelize, DataTypes) => {
    const HealthWorkers = sequelize.define("HealthWorkers", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telephoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }
    )
    HealthWorkers.associate = (models) => {
        HealthWorkers.hasMany(models.Jabs, {
            onDelete: 'cascade'
        })
    }
    return HealthWorkers
}