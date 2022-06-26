import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setMessage(state, action) {
            return action.payload
        },
        removeMessage() {
            return null
        }
    }
})

export const { setMessage, removeMessage } = notificationSlice.actions

export const setNotification = (message, delay) => {
    return async dispatch => {
        dispatch(setMessage(message))
        setTimeout(() => dispatch(removeMessage()), delay * 1000)
    }
}
export default notificationSlice.reducer