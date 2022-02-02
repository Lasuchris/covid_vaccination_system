import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { api } from '../../utils/APi'


const initialState = {
    loading: false,
    error: null,
    clients: [],
    id:1
}

export const getClients = createAsyncThunk('client/getClients', async () => {
    try {
        const rseponse = await axios.get(`${api}/nationals/getNationals`)
        return rseponse.data
    } catch (error) {

    }

})
export const registerClient = createAsyncThunk('client/registerClient', async (data) => {
    try {
        const response = await axios.post(`${api}/clients/registerClient`,data)
        return response.data
    } catch (error) {

    }

})



export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setId: (state,action) => {
            state.id = action.payload
        },
        addJab: (state,acton) => {
            
        }
    },
    extraReducers: {
        [getClients.pending]: (state) => {
            state.loading = false

        },
        [getClients.fulfilled]: (state, action) => {
            state.loading = true
            state.clients = action.payload
        },
        [getClients.rejected]: (state, action) => {
            state.loading = true
            state.error = action.error.message
        }, [registerClient.pending]: (state) => {
            state.loading = false

        },
        [registerClient.fulfilled]: (state, action) => {
            state.loading = true
            state.clients = action.payload
        },
        [registerClient.rejected]: (state, action) => {
            state.loading = true
            state.error = action.error.message
        }

    }
})

export const {setId} = clientSlice.actions
export default clientSlice.reducer


