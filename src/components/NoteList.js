import React, {Component} from 'react';
import NoteItem from './NoteItem';
import { noteData } from './../firebaseConnect';

class NoteList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataFirebase : []
        }
    }
    
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        noteData.on('value', (notes) => {
            var arrNote = [];
            notes.forEach(item=>{
                const key = item.key;
                const noteTitle = item.val().noteTitle;
                const noteContent = item.val().noteContent;
                arrNote.push({
                    key : key,
                    noteTitle : noteTitle,
                    noteContent : noteContent,
                });
            })
            this.setState({
                dataFirebase : arrNote
            })
            
            // arrNote.map((value, key) => {
            //     return (
            //         <NoteItem key = {key} noteTitle = {value.noteTitle} noteContent = {value.noteContent}/>
            //     )
            // })
        })
    }

    getData = () => {
        const listNote = this.state.dataFirebase;
        console.log(listNote.length);
        if(listNote){
            return listNote.map((value,key) => {
            return (
                    <NoteItem key={key} id={key+1} noteTitle={value.noteTitle} noteContent={value.noteContent}/>
                )
            })
        }
    }
    render() {
        return (
            <div id="note-list" role="tablist" aria-multiselectable="true">
                {
                    this.getData()
                }
            </div>
        );
    }
}

export default NoteList;
