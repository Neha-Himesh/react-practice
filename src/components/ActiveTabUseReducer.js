import React, {useReducer, useEffect} from 'react'

const initialState ={
    activeTab: '',
    activeTabText: ''
}

const reducer= (state, action)=>{
    let newState;
    switch(action.type){
        case 'Home':
            newState = {activeTab: 'home', activeTabText: 'Welcome to Home Tab'}
            return newState
        case 'About':
            newState = {activeTab: 'about', activeTabText: 'Welcome to About Tab'}
            return newState
        case 'Contact':
            newState = {activeTab: 'contact', activeTabText: 'Welcome to Contact Us Tab'}
            return newState
        default:
            return state
    }
}
function ActiveTabUseReducer(){
    const [activeTab, dispatch] = useReducer(reducer, initialState)
    useEffect(() =>{
        if (activeTab.activeTab){
            document.title = activeTab.activeTab
        }
    }, [activeTab.activeTab])
    return (
        <div>
            <p>{activeTab.activeTabText}</p>
            <button onClick={()=>{dispatch({type: 'Home'}) }}>Set Home Active Tab</button>
            <button onClick={()=>{dispatch({type:'About'})}}>Set About Active Tab</button>
            <button onClick={()=>{dispatch({type: 'Contact'})}}>Set Contact Us Active Tab</button>
        </div>
    )
}
export default ActiveTabUseReducer