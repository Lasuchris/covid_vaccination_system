const {Vaccines} = require('../models')


const registerVaccine = async(req,res)=>{

    const vaccine = req.body;

        await Vaccines.create(vaccine).then((vaccines)=>{
            res.status(200).json(vaccines)
        }).catch((error)=>{
            console.log(error)
        })
}

const getVaccines = async(req,res)=>{

    await Vaccines.findAll({ attributes: { exclude: ['updatedAt', 'createdAt'] } }).then((vaccines)=>{
            res.status(200).json(vaccines)
        }).catch((error)=>{
            console.log(error)
        })
}



module.exports = {
    getVaccines,
    registerVaccine
}

