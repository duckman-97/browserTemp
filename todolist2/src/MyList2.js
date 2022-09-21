import React,{useState} from 'react';

function MyList2 (){
    const [text,setText] =useState("");
    //const inputChanged = (event) =>{
      //  setText(event.target.value);
    //}
    const handleSubmit = (event)=>{
        alert(`You typed: ${text}`);
        event.preventDefault();
        
    }
    
    return (
        <form onSubmit = {handleSubmit}>
            <input type = "text" onChange = {event => setText(event.target.value)}
            value = {text}/>
            <input type = "submit" value = "Press me"/>
        </form>
    );
};

export default MyList2;
