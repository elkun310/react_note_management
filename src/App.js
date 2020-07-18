import React from 'react';
import './App.css';
import {firebaseConnect} from './firebaseConnect';

function App() {
    console.log(firebaseConnect);
    return (
        <div className="App">
            Note list
        </div>
    );
}

export default App;
