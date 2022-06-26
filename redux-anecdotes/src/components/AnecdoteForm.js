import { useDispatch } from "react-redux"
import { appendAnec, createAnec } from "../reducers/anecdoteReducer"
import anecService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.content.value 
        event.target.content.value = ''
        dispatch(createAnec(content))
    }
    
    return (
        <>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name='content' /></div>
                <button>create</button>
            </form>
        </>
    )
}

export default AnecdoteForm