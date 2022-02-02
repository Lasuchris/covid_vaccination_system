import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { api } from '../../utils/APi'

const initialState = {
    loading: false,
    error: null,
    divisions: []
}


export const getDivisions = createAsyncThunk('division/getDivisions', async () => {
    try {
        const rseponse = await axios.get(`${api}/divisions/getDivisions`)
        return rseponse.data
    } catch (error) {

    }

})
export const registerDivision = createAsyncThunk('division/registerDivision', async (data) => {
    try {
        const response = await axios.post(`${api}/divisions/registerDivision`, data)
        return response.data
    } catch (error) {

    }

})
export const divisionSlice = createSlice({
    name: 'division',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [getDivisions.pending]: (state) => {
            state.loading = false

        },
        [getDivisions.fulfilled]: (state, action) => {
            state.loading = true
            state.divisions = action.payload
        },
        [getDivisions.rejected]: (state, action) => {
            state.loading = true
            state.error = action.error.message
        },
        [registerDivision.pending]: (state) => {
            state.loading = false

        },
        [registerDivision.fulfilled]: (state, action) => {
            state.loading = true
            state.divisions = action.payload
        },
        [registerDivision.rejected]: (state, action) => {
            state.loading = true
            state.error = action.error.message
        }

    }
})


export default divisionSlice.reducer