import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    isOpen:false,
}

export const navigationSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        handleDrawerOpen : (state) => {
            state.isOpen = true
        },
        handleDrawerClose : (state) => {
            state.isOpen = false
        },
    },
    
})

export const {handleDrawerClose,handleDrawerOpen} = navigationSlice.actions
export default navigationSlice.reducer
