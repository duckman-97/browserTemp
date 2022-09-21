import React from 'react';
import AuthContext from './AuthContext';
import MyCompoenent from './MyComponent';


function App3(){
    const userName = 'john';
    return (
        <AuthContext.Provider value = {userName}>
            <MyCompoenent />
            </AuthContext.Provider>
    );
}

export default App3