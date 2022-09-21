import React, {useRef} from 'react';

function App2(){
    const inputRef = useRef(null);

    return(
        <div>
            <input ref = {inputRef}/>

            <button onClick={()=> inputRef.current.focus()}>
                Focus input
            </button>
        </div>

        
    );
    
}

export default App2;
