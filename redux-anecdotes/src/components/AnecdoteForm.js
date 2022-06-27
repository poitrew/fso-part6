import { connect } from "react-redux"
import { createAnec } from "../reducers/anecdoteReducer"

const AnecdoteForm = (props) => {
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.content.value 
        event.target.content.value = ''
        props.createAnec(content)
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

export default connect(null, { createAnec })(AnecdoteForm)