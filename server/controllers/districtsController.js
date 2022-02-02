const { Districts, VaccinationCenters} = require('../models')


const registerDistrict = async (req, res) => {

    const district = req.body;

    await Districts.create(district).then((district) => {
        res.status(200).json(district)
    }).catch((error) => {
        console.log(error)
    })
}
const getDistricts = async (req, res) => {

    await Districts.findAll({ attributes: { exclude: ['updatedAt', 'createdAt'] }, include: [VaccinationCenters] }).then((districts) => {
        res.status(200).json(districts)
    }).catch((error) => {
        console.log(error)
    })
}



module.exports = {
    getDistricts,
    registerDistrict
}

