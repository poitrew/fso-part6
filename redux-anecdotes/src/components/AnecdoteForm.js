import { useDispatch } from "react-redux"
import { createAnec } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
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