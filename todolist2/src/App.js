import React,{useState} from 'react';


function App(){
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    const increment = ()=>{
        
        setCount(count + 1); //No re-renderring yet
        setCount2(count2 + 1);
        
    }
    return(
        <div>
            <p>Counters : {count} {count2}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );


};

export default App;
