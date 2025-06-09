import React, {useState} from 'react'

function FormUseState() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [details, setDetails] = useState({name:'', email: ''} )
    const changeName = (e) =>{
        setName(e.target.value)
    }
    const changeEmail = (e) =>{
        setEmail(e.target.value)
    }
    const submitForm = (e) =>{
        e.preventDefault()
        setDetails({name: name, email: email})
        setName('')
        setEmail('')
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <label for="name">Enter Name:</label>
                <input type="text" id="name" value={name} onChange={changeName}/> <br/>
                <label for="email">Enter Email:</label>
                <input type="text" id="email" value={email} onChange={changeEmail}/> <br/>
                {name} <br />
                {email} <br />
                <button type="submit">Submit</button>
                {details.name} {details.email}
            </form>
        </div>
    )
}

export default FormUseState