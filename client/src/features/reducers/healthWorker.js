import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { api } from '../../utils/APi'

const initialState = {
    loading: false,
    error: null,
    healthWorkers: []
}

export const getHealthWorkers = createAsyncThunk('healthWorker/getHealthWorkers', async () => {
    try {
        const rseponse = await axios.get(`${api}/healthWorkers/getHealthWorkers`)
        return rseponse.data
    } catch (error) {

    }

})
export const registerHealthWorker = createAsyncThunk('healthWorker/registerHealthWorker', async (data) => {
    try {
        const response = await axios.post(`${api}/healthWorkers/registerHealthWorker`, data)
        return response.data
    } catch (error) {

    }

})

export const healthWorkerSlice = createSlice({
    name: 'healthWorker',
    initialState,
    reducers: {},
    extraReducers: {
        [getHealthWorkers.pending]: (state) => {
            state.loading = false

        },
        [getHealthWorkers.fulfilled]: (state, action) => {
            state.loading = true
            state.HealthWorkers = action.payload
        },
        [getHealthWorkers.rejected]: (state, action) => {
            state.loading = true
            state.error = action.error.message
        },
        [registerHealthWorker.pending]: (state) => {
            state.loading = false

        },
        [registerHealthWorker.fulfilled]: (state, action) => {
            state.loading = true
            state.HealthWorkers = action.payload
        },
        [registerHealthWorker.rejected]: (state, action) => {
            state.loading = true
            state.error = action.error.message
        }

    }
})


export default healthWorkerSlice.reducer