import React, {useReducer} from 'react'

const initialState = 0
const reducer = (state, action) =>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state

    }
}
function CounterUseReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        Count - {count}
        <button type="button" onClick={()=>dispatch('increment')}>Increment</button>
        <button type="button" onClick={()=>dispatch('decrement')}>Decrement</button>
        <button type="button" onClick={()=>{dispatch('reset')}}>Reset</button>
    </div>
  )
}

export default CounterUseReducer