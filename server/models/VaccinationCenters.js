module.exports = (sequelize, DataTypes) => {
    const VaccinationCenters = sequelize.define("VaccinationCenters", {
        centerName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    )
    VaccinationCenters.associate = (models) => {
        VaccinationCenters.hasOne(models.Jabs, {
            onDelete: 'cascade'
        })
    },
        VaccinationCenters.associate = (models) => {
            VaccinationCenters.belongsTo(models.Districts, {
                foreignKey: {
                    allowNull: false
                }
            })
        }
    VaccinationCenters.associate = (models) => {
        VaccinationCenters.hasMany(models.HealthWorkers, {
            onDelete: 'cascade'
        })
    }

    return VaccinationCenters
}