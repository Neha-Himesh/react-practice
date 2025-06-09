import React, {useReducer} from 'react'

const initialState = {
    name: '',
    email: '',
    details: {name: '', email: ''}
}
const reducer = (state, action) =>{
    switch(action.type){
        case 'SET_NAME':
            return {...state, name: action.payload}
        case 'SET_EMAIL':
            return {...state, email: action.payload}
        case 'SUBMIT':
            return {...state,
                details: {name: state.name, email: state.email},
                name: '',
                email: '',
            }
        default: 
            return state
    }
}
function FormUseReducer (){
    const [FormState, dispatch] = useReducer(reducer, initialState)
    return (
       
        <div>
             <form onSubmit={(e) =>{ e.preventDefault(); dispatch({type:'SUBMIT'})}}>
                <label htmlFor="name">Enter Name:</label>
                <input type="text" id="name" value={FormState.name} onChange={(e) =>dispatch({type: 'SET_NAME', payload: e.target.value})}/> <br/>
                <label htmlFor="email">Enter Email:</label>
                <input type="text" id="email" value={FormState.email} onChange={ (e) => dispatch({type:'SET_EMAIL', payload: e.target.value})}/> <br/>
                <p> Live Name: {FormState.name} </p>
                <p> Live Email: {FormState.email} </p> 
                <button type="submit">Submit</button>
                {FormState.details.name && FormState.details.email && (
                    <div>
                        <p> Submitted Name: {FormState.details.name} </p>
                        <p> Submitted Email: {FormState.details.email} </p> 
                    </div>
                )}
               
            </form>
        </div>
    )
}

export default FormUseReducer