import { useDispatch, useSelector } from 'react-redux'
import { upVote } from '../reducers/anecdoteReducer'
import { setMessage, removeMessage } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div>
            <div>{anecdote.content}</div>
            <div>
                has {anecdote.votes}
                <button onClick={() => handleClick(anecdote)}>vote</button>
            </div>
        </div>
    )
}

const AnecdoteList = () => {
    const anecdotes = [...useSelector(state => state.anecdotes)]
    const filterValue = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(upVote(anecdote.id))
        dispatch(setMessage(`you voted '${anecdote.content}'`))
        setTimeout(() => {
            dispatch(dispatch(removeMessage()))
        }, 5000);
    }

    const renderList = filterValue !== '' 
        ? anecdotes.filter(anecdote => anecdote.content.includes(filterValue))
        : anecdotes

    return (
        <>
            {renderList.sort((a, b) => b.votes - a.votes).map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} handleClick={vote} />)}
        </>
    )
}

export default AnecdoteList