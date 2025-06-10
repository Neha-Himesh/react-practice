import React, {useState, useEffect} from "react";

function ActiveTab(){
    const [activeTab, setActiveTab] = useState('')
   
    function returnActiveText(){
        switch(activeTab){
            case 'Home':
                return  <p>Welcome to Home tab</p>
            case 'About' :
                return  <p>Welcome to About tab</p>
            case 'Contact Us':
                return  <p>Welcome to Contact Us tab</p>
            default :
                return  <p>Unable to find the active tab</p>
        }
    }
    useEffect(()=>{
        document.title = ActiveTab;
    }, [ActiveTab])
    return (
      
        <div>
            {returnActiveText()} <br /> <br />
            <button onClick={()=>{setActiveTab('Home') }}>Set Home Active Tab</button>
            <button onClick={()=>{setActiveTab('About')}}>Set About Active Tab</button>
            <button onClick={()=>{setActiveTab('Contact Us')}}>Set Contact Us Active Tab</button>
        </div>
    )
}

export default ActiveTab