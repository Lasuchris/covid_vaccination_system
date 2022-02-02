import { configureStore } from '@reduxjs/toolkit'
import clientReducer from '../reducers/client'
import districtReducer from '../reducers/district'
import divisionReducer from '../reducers/division'
import healthWorkerReducer from '../reducers/healthWorker'
import vaccineReducer from '../reducers/vaccine'
import vaccinationCenterReducer from '../reducers/vaccinationCenter'
import  navigationReducer from '../reducers/navigation'
import popUpReducer from '../reducers/PopUp'
import jabReducer from '../reducers/jab'
import authReducer from '../reducers/auth'


export const store = configureStore({
  reducer: {
    client : clientReducer,
    division : divisionReducer,
    district:districtReducer,
    healthWorker:healthWorkerReducer,
    vaccine: vaccineReducer,
    vaccinationCenter:vaccinationCenterReducer,
    navigation:navigationReducer,
    popUp:popUpReducer,
    jab:jabReducer,
    auth:authReducer

  },
})