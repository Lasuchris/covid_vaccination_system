import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { api } from '../../utils/APi'


const initialState = {
    loading: false,
    error: null,
    vaccinationCenters: []
}

export const getVaccinationCenters = createAsyncThunk('vaccinationCenter/getVaccinationCenters', async () => {
    try {
        const rseponse = await axios.get(`${api}/vaccinationCenters/getVaccinationCenters`)
        return rseponse.data
    } catch (error) {
 
    }

})
export const registerVaccinationCenter = createAsyncThunk('vaccinationCenter/ registerVaccinationCenter', async (data) => {
    try {
        const response = await axios.post(`${api}/vaccinationCenters/registerVaccinationCenter`, data)
        return response.data
    } catch (error) {

    }

})

export const vaccinationCenterSlice = createSlice({
    name: 'vaccinationCenter',
    initialState,
    reducers: {},
    extraReducers: {
        [getVaccinationCenters.pending]: (state) => {
            state.loading = false

        },
        [getVaccinationCenters.fulfilled]: (state, action) => {
            state.loading = true
            state.vaccinationCenters = action.payload
        },
        [getVaccinationCenters.rejected]: (state, action) => {
            state.loading = true
            state.error = action.error.message
        },
        [registerVaccinationCenter.pending]: (state) => {
            state.loading = false

        },
        [registerVaccinationCenter.fulfilled]: (state, action) => {
            state.loading = true
            state.vaccinationCenters = action.payload
        },
        [registerVaccinationCenter.rejected]: (state, action) => {
            state.loading = true
            state.error = action.error.message
        }

    }
})


export default vaccinationCenterSlice.reducer