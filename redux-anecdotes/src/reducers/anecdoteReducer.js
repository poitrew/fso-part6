import { createSlice } from '@reduxjs/toolkit'
import anecService from '../services/anecdotes'

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    setAnecs(state, action) {
      return action.payload
    },
    updateAnec(state, action) {
      const changedAnec = action.payload
      return state.map(obj => obj.id === changedAnec.id ? changedAnec : obj)
    },
    appendAnec(state, action) {
      state.push(action.payload)
    }
  }
})

export const { appendAnec, updateAnec, setAnecs } = anecdoteSlice.actions

export const createAnec = (content) => {
  return async dispatch => {
    const newAnec = await anecService.createNew(content)
    dispatch(appendAnec(newAnec))
  }
}

export const upVote = (anecdote) => {
  return async dispatch => {
    const newAnec = await anecService.update(anecdote.id, { ...anecdote, votes: anecdote.votes + 1 })
    dispatch(updateAnec(newAnec))
  }
}

export const initialize = () => {
  return async dispatch => {
    const anecdotes = await anecService.getAll()
    dispatch(setAnecs(anecdotes))
  }
}
export default anecdoteSlice.reducer