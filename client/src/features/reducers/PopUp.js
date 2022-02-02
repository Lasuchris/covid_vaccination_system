import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    openPopUp: false,
}

export const popUpSlice = createSlice({
    name: 'popUp',
    initialState,
    reducers: {
        handlePopUpOpen: (state) => {
            state.openPopUp = true
        },
        handlePopUpClose: (state) => {
            state.openPopUp = false
        },
    },

})

export const { handlePopUpClose, handlePopUpOpen } = popUpSlice.actions
export default popUpSlice.reducer
