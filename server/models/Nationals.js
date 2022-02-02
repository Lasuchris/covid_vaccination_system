module.exports = (sequelize, DataTypes) => {
    const Nationals = sequelize.define("Nationals", {
        nin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        personName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sex: {
            type: DataTypes.STRING,
            allowNull: false
        },
        occupation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nationality: {
            type: DataTypes.STRING,
            allowNull: false
        },
        district: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subCounty: {
            type: DataTypes.STRING,
            allowNull: false
        },
        parish: {
            type: DataTypes.STRING,
            allowNull: false
        },
        village: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    )
    Nationals.associate = (models) => {
        Nationals.hasMany(models.Jabs, {
            onDelete: 'cascade'
        })
    }
    
    return Nationals
}