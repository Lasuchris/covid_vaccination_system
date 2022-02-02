module.exports = (sequelize, DataTypes) => {
    const Jabs = sequelize.define("Jabs", {
        jabName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    )
    Jabs.associate = (models) => {
        Jabs.belongsTo(models.HealthWorkers, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Jabs
}