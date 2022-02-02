const {VaccinationCenters} = require('../models')


const registerVaccinationCenter = async(req,res)=>{

    const center = req.body;

        await VaccinationCenters.create(center).then((Center)=>{
            res.status(200).json(Center)
        }).catch((error)=>{
            console.log(error)
        })
}

const getVaccinationCenters = async(req,res)=>{

    await VaccinationCenters.findAll({ 
         attributes: { exclude: ['updatedAt', 'createdAt'] }
          }
         ).then((Centers)=>{
            res.status(200).json(Centers)
        }).catch((error)=>{
            console.log(error)
        })
}



module.exports = {
    getVaccinationCenters,
    registerVaccinationCenter
}

