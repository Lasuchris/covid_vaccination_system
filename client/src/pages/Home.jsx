import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { useDispatch} from 'react-redux'
import { getClients } from '../features/reducers/client'
import { getVaccines } from '../features/reducers/vaccine'
import { getDistricts } from '../features/reducers/district'
import { getHealthWorkers } from '../features/reducers/healthWorker'
import { getJabs } from '../features/reducers/jab'
import { getVaccinationCenters } from '../features/reducers/vaccinationCenter'
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router';

const Home = () => {
    const [ cookies ] = useCookies('')
    let history = useHistory()
    
    const dispatch = useDispatch()
    
    useEffect(() => {
       
        dispatch(getClients())
        dispatch(getHealthWorkers())
        dispatch(getDistricts())
        dispatch(getVaccines())
        dispatch(getJabs())
        dispatch(getVaccinationCenters())
        
    }, [dispatch, history, cookies.token])
    return (
        <div>
        <Layout/> 
        </div>
    )
}

export default Home
