const { Nationals, Jabs } = require('../models')


const registerPerson = async (req, res) => {

    const person = req.body;
    await Nationals.create(person).then((person) => {
        res.status(200).json(person)
    }).catch((error) => {
        console.log(error)
    })
}

const getPeople = async (req, res) => {

    await Nationals.findAll({ attributes: { exclude: ['updatedAt', 'createdAt'] }, include: [Jabs] }).then((clients) => {
        res.status(200).json(clients)
    }).catch((error) => {
        console.log(error)
    })
}

const getPerson = async (req, res) => {

    const id = req.params.id
    await Nationals.findByPk(id).then((client) => {
        res.status(200).json(client)
    }).catch((error) => {
        console.log(error)
    })
}

module.exports = {
    getPerson,
    getPeople,
    registerPerson
}

