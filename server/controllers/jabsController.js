const { Jabs } = require('../models')

const registerJab = async (req, res) => {

    const jab = req.body;
    await Jabs.create(jab).then((jab) => {
        res.status(200).json(jab)
    }).catch((error) => {
        console.log(error)
    })
}

const getJabs = async (req, res) => {

    await Jabs.findAll({ attributes: { exclude: ['updatedAt', 'createdAt'] } }).then((Jabs) => {
        res.status(200).json(Jabs)
    }).catch((error) => {
        console.log(error)
    })
}



module.exports = {
    getJabs,
    registerJab
}



