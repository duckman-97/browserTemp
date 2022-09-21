import React from 'react';


function MyComponent(){
    const buttonPressed =() =>{
        alert('Button pressed');

    }

    return (
        <div>
            <button onClick={buttonPressed}>Press Me</button>
        </div>
    );
};

export default MyComponent;