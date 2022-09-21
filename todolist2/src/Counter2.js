import React,{useState,useEffect} from 'react';

function Counter2(){
    const [count,setCount] = useState(0);


    useEffect(() =>{
        console.log('Hello from useEffect')
    });
    return (
        <div>
            <p>{count}</p>
            <button onClick = {()=>setCount(count+1)}>Increment
            </button> 
                    </div>
    );
};


export default Counter2;
