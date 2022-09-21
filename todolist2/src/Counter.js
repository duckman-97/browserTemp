import React,{useState} from 'react';

function Counter(){
    //count state with initial value 0
    const [count, setCount ] = useState(0);

    return(
        <div id = "box">
            <p>Counter = {count}</p>
            <button onClick={()=>setCount(count+1)}>
                Increment
            </button>
            <button onClick={() => setCount(0)}>
                remove
            </button>
        </div>
    );

    
}

export default Counter;
