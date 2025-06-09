import React, {useState} from 'react'
import '../styles.css'

function TogglePassword(){
    const [viewPassword, setViewPassword] = useState(false)
    const [lightTheme, setLightTheme] = useState(false)

    const togglePassword = () =>{
        setViewPassword(prev => !prev)
        console.log("Password view toggled")
    }
    return (
        <div className={lightTheme? "light" : "dark"}>
            <input type={viewPassword? "text" : "password"} placeholder="Enter password" />
            <button type="button" onClick = {togglePassword}>View Password</button>
            <button type="button" onClick = {() =>setLightTheme(prev => !prev)}>Toggle Theme</button>
        </div>
    )
}

export default TogglePassword;