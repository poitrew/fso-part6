const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)

  const incrementStatus = (status) => {
    return ({
      ...state,
      [status]: state[status] + 1
    })
  }

  switch (action.type) {
    case 'GOOD':
      return incrementStatus('good')
    case 'OK':
      return incrementStatus('ok')
    case 'BAD':
      return incrementStatus('bad')
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

export default counterReducer