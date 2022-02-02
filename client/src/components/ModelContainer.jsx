import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { Grid } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch, useSelector } from 'react-redux'
import {  setHealthWorkerId, setVaccineId } from '../features/reducers/jab'
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 250,
    }

}))
const ModelContainer = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [vaccine, setVaccine] = useState('');
    const [selectedCentre, setSelectedCentre] = useState('');
    const [selectedHealthWorker, setSelectedHealthWorker] = useState('');

    const districts = useSelector((state) => state.district.districts)
    const Vaccines = useSelector((state) => state.vaccine.vaccines)
    const VaccinationCentres = useSelector((state) => state.vaccinationCenter.vaccinationCenters)
    const healthWorkers = useSelector((state) => state.healthWorker.HealthWorkers)


    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value)
    }
    const handleVaccineChange = (event) => {       
        setVaccine(event.target.value)
        dispatch(setVaccineId(event.target.value))
    }
    const handleCentreChange = (event) => {
        setSelectedCentre(event.target.value)
    }
    const handleHealthWorkerChange = (event) => {
        setSelectedHealthWorker(event.target.value);
        dispatch(setHealthWorkerId(event.target.value))
    }


    return (
        <div>
            <Grid container>
                <Grid item>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="district-label">District</InputLabel>
                        <Select
                            labelId="district-label"
                            id="district-label"
                            value={selectedDistrict}
                            onChange={handleDistrictChange}
                        >
                            {districts.map((district) => {
                                return (<MenuItem
                                    key={district.id}
                                    value={district.id}>{district.districtName}</MenuItem>)
                            })}
                        </Select>
                    </FormControl>
                </Grid >
                <Grid item>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="vaccine-label">Vaccine</InputLabel>
                        <Select
                            labelId="vaccine-label"
                            id="vaccine-label"
                            value={vaccine}
                            onChange={handleVaccineChange}>
                            {Vaccines.map((vaccine) => {
                                return (<MenuItem
                                    key={vaccine.id}
                                    value={vaccine.id} >{vaccine.vaccineName}</MenuItem>)
                            })}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="vaccination-centre-label">Vaccination Centre</InputLabel>
                        <Select
                            labelId="vaccination-centre-label"
                            id="vaccination-centre-label"
                            value={selectedCentre}
                            onChange={handleCentreChange}>
                            {VaccinationCentres.map((centre) => {
                                return (<MenuItem
                                    key={centre.id}
                                    value={centre.id} >{centre.centerName}</MenuItem>)
                            })}

                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="health-worker-label">Health Worker</InputLabel>
                        <Select
                            labelId="health-worker-label"
                            id="health-worker-label"
                            value={selectedHealthWorker}
                            onChange={handleHealthWorkerChange}

                        >
                            {healthWorkers.map((worker) => {
                                return (<MenuItem
                                    key={worker.id}
                                    value={worker.id} >{worker.firstName}</MenuItem>)
                            })}

                        </Select>
                    </FormControl>
                </Grid>
            </Grid>


        </div>
    )
}

export default ModelContainer
