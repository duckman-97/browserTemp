import React,{useState} from 'react';

function MyList2 (){
    
    //const inputChanged = (event) =>{
      //  setText(event.target.value);
    //}

    const [user, setUser] = userState({
        firstName:'',
        lastName:'',
        email:''
    });

    const inputChanged = (event) =>{
        setUser({...user,[event.target.name]: event.target.value});

    }
    const handleSubmit = (event)=>{
        alert(`You typed: ${text}`);

        event.preventDefault();
        
    }
    
    return (
        <form onSubmit = {handleSubmit}>
            <label>FirstName</label>
            <input type = "text" name = 'firstName' onChange ={inputChanged}></input>
           <label>lastName</label>

            <input type = 'text' name = 'lastName' onChange = {inputChanged} value = {user.lastname}></input>
            <input type = "submit" value = "Press me"/>
            <label>Email</label>
            <input type = 'text' name = 'email' onChange={inputChanged} value = {user.email}/>
            <input type = 'submit' value = 'Press me'/>

        </form>
    );
};

export default MyList2;
