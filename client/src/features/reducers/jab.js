import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { api } from '../../utils/APi'

const initialState = {
    loading: false,
    error: null,
    jabs: [],
    jabName: '',
    HealthWorkerId: 0,
    NationalId: 0,
    VaccineId: 0,
    
  
}

export const getJabs = createAsyncThunk('jab/getJabs', async () => {
    try {
        const rseponse = await axios.get(`${api}/jabs/getJabs`)
        return rseponse.data
    } catch (error) {

    }

})
export const registerJab = createAsyncThunk('jab/registerJab', async (data) => {
    try {
        const response = await axios.post(`${api}/jabs/registerJab`, data)
        return response.data
    } catch (error) {

    }

})

export const jabSlice = createSlice({
    name: 'jab',
    initialState: initialState,
    reducers: {
        setHealthWorkerId: (state, action) => {
            state.HealthWorkerId = action.payload
        },
        setVaccineId: (state, action) => {
            state.VaccineId = action.payload
        },
        setNationalId: (state, action) => {
            state.NationalId = action.payload
        },
        setJabName: (state, action) => {
            state.jabName = action.payload
        }
     
    },
    extraReducers: {
        [getJabs.pending]: (state) => {
            state.loading = false

        },
        [getJabs.fulfilled]: (state, action) => {
            state.loading = true
            state.jabs = action.payload
        },
        [getJabs.rejected]: (state, action) => {
            state.loading = true
            state.error = action.error.message
        },
        [registerJab.pending]: (state) => {
            state.loading = false

        },
        [registerJab.fulfilled]: (state, action) => {
            
            state.jabs.push(action.payload)
        },
        [registerJab.rejected]: (state, action) => {
            state.loading = true
            state.error = action.error.message
        }
    }
})

export const { regtisterJab, setNationalId, setJabName,
    setHealthWorkerId, setVaccineId } = jabSlice.actions

export default jabSlice.reducer