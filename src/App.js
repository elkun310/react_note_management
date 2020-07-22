import React from 'react';
import {noteData} from './firebaseConnect';
import firebase from 'firebase/app';
import Nav from "./components/Nav";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";

// var pushData = () => {
//     var connectData = firebase.database().ref('dataForNote');
//     connectData.push({
//         title: "Ghi chu so 5",
//         content: "Noi dung ghi chu so 5"
//     })
//     console.log("Vua them du lieu vao firebase");
// }
// var deleteData = (dataId) => {
//     var connectData = firebase.database().ref('dataForNote');
//     connectData.child(dataId).remove();
//     console.log("Xoa thanh cong phan tu co id la : " + dataId);
// }

function addDataNote(item) {
    noteData.push(item);
    alert('Them du lieu : ' + JSON.stringify(item) + "thanh cong");
}

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
                        <NoteForm getDataNote={(item) => addDataNote(item)}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
