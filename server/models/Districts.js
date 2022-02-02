module.exports = (sequelize,DataTypes)=>{
    const Districts = sequelize.define("Districts",{
        districtName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        }        
    )
    Districts.associate = (models)=>{
        Districts.hasMany(models.VaccinationCenters,{
             onDelete:'cascade'
         })
     }
    return Districts
}