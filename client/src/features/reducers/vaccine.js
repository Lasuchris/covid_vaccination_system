import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { api } from '../../utils/APi'

const initialState = {
    loading: false,
    error: null,
    vaccines: []
}

export const getVaccines = createAsyncThunk('vaccine/getVaccines', async () => {
    try {
        const rseponse = await axios.get(`${api}/vaccines/getVaccines`)
        return rseponse.data
    } catch (error) {

    }

})
export const registerVaccine = createAsyncThunk('vaccine/registerVaccine', async (data) => {
    try {
        const response = await axios.post(`${api}/vaccines/registerVaccine`, data)
        return response.data
    } catch (error) {

    }

})
export const vaccineSlice = createSlice({
    name: 'vaccine',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [getVaccines.pending]: (state) => {
            state.loading = false

        },
        [getVaccines.fulfilled]: (state, action) => {
            state.loading = true
            state.vaccines = action.payload
        },
        [getVaccines.rejected]: (state, action) => {
            state.loading = true
            state.error = action.error.message
        },
        [registerVaccine.pending]: (state) => {
            state.loading = false

        },
        [registerVaccine.fulfilled]: (state, action) => {
            state.loading = true
            state.vaccines = action.payload
        },
        [registerVaccine.rejected]: (state, action) => {
            state.loading = true
            state.error = action.error.message
        }

    }
})


export default vaccineSlice.reducer