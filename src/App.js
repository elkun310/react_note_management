import React from 'react';
import {noteData} from './firebaseConnect';
import firebase from 'firebase/app';
import Nav from "./components/Nav";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";

function App() {
    noteData.once('value').then(function (snapshot) {
        console.log(snapshot);
    });
    return (
        <div className="App">
            {/*<h4>Note list</h4>*/}
            {/*<button onClick={pushData}>Click to add by push function</button>*/}
            {/*<hr/>*/}
            {/*<button onClick={() => deleteData('MClxD3seGE9lJ2Baeni')}>Delete Data</button>*/}
            <Nav/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <NoteList/>
                    </div>
                    <div className="col-4">
                        <NoteForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
