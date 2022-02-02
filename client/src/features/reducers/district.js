import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { api } from '../../utils/APi'


const initialState = {
    loading: false,
    error: null,
    districts: []
}

export const getDistricts = createAsyncThunk('district/getDistricts', async () => {
    try {
    const {data} = await axios.get(`${api}/districts/getDistricts`)
    
        return data
    } catch (error) {

    }

})
export const registerDistrict = createAsyncThunk('district/registerDistrict', async (data) => {
    try {
        const response = await axios.post(`${api}/districts/registerDistrict`, data)
        return response.data
    } catch (error) {

    }

})

export const districtSlice = createSlice({
    name: 'district',
    initialState,
    reducers: {},
    extraReducers: {
        [getDistricts.pending]: (state) => {
            state.loading = false

        },
        [getDistricts.fulfilled]: (state, action) => {
            state.loading = true
            state.districts = action.payload
        },
        [getDistricts.rejected]: (state, action) => {
            state.loading = true
            state.error = action.error.message
        }, 
        [registerDistrict.pending]: (state) => {
            state.loading = false

        },
        [registerDistrict.fulfilled]: (state, action) => {
            state.loading = true
            state.districts = action.payload
        },
        [registerDistrict.rejected]: (state, action) => {
            state.loading = true
            state.error = action.error.message
        }

    }
})


export default districtSlice.reducer