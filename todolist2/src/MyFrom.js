import React from 'react';

function MyFrom(){
    const handleSubmit = (event)=>{
        event.preventDefault();
        alert('Form submit');

    }
    return (
        <form onSubmit = {handleSubmit}>
            <input type = 'submit' value = 'Submit'/>

        </form>
    );
}

export default MyFrom;
