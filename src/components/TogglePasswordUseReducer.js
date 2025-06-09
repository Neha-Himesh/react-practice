import React, {useReducer} from 'react'
import '../styles.css'

const initialState = {
    viewPassword: false,
    viewDarkMode: false
}
const reducer = (state, action) =>{
    switch(action ){
        case 'TOGGLE_PASSWORD' :
            return {...state, viewPassword: !state.viewPassword}
        case 'TOGGLE_THEME' :
            return {...state, viewDarkMode: !state.viewDarkMode}
        default:
            return state
    }
}
function TogglePasswordUseReducer() {
    const [toggleOptions, dispatch] = useReducer(reducer, initialState)
    return (
        <div className={toggleOptions.viewDarkMode? "light" : "dark"}>
            <input type={toggleOptions.viewPassword? "text" : "password"} placeholder="Enter password" />
            <button type="button" onClick = {() => dispatch('TOGGLE_PASSWORD')}>View Password</button>
            <button type="button" onClick = {() =>dispatch('TOGGLE_THEME')}>Toggle Theme</button>
        </div>
    )
}

export default TogglePasswordUseReducer