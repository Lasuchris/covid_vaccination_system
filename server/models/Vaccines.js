module.exports = (sequelize, DataTypes) => {
    const Vaccines = sequelize.define("Vaccines", {
        vaccineName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    )
    Vaccines.associate = (models) => {
        Vaccines.hasMany(models.Jabs, {
            onDelete: 'cascade'
        })

    }
    return Vaccines
}