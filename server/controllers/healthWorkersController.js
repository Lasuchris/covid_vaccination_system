const {HealthWorkers} = require('../models')


const registerHealthWorker = async(req,res)=>{

    const healthWorker = req.body;

        await HealthWorkers.create(healthWorker).then((healthWorker)=>{
            res.status(200).json(healthWorker)
        }).catch((error)=>{
            console.log(error)
        })
}

const getHealthWorkers = async(req,res)=>{

    await HealthWorkers.findAll({ attributes: { exclude: ['updatedAt', 'createdAt'] } }).then((healthWorkers)=>{
            res.status(200).json(healthWorkers)
        }).catch((error)=>{
            console.log(error)
        })
}



module.exports = {
    getHealthWorkers,
    registerHealthWorker
}

