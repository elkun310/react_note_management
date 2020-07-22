import React, {Component} from 'react';
import { connect } from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: "",
            noteContent: "",
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        });
    }
    addData = (event, title, content) => {
        event.preventDefault();
        var item = {};
        item.noteTitle = title;
        item.noteContent = content;
        this.props.addDataStore(item); //su dung reducer trong store

    }
    render() {
        return (
            <form id="note-form">
                <h3>Edit note</h3>
                <div className="form-group">
                    <label htmlFor="note-title">Note title</label>
                    <input type="text" className="form-control" value={this.state.noteTitle} id="note-title" name="noteTitle" aria-describedby="helpId" onChange={(event) => this.isChange(event)}/>
                    <small id="helpId" className="form-text text-muted">Insert note title</small>
                </div>
                <div className="form-group">
                    <label htmlFor="note-content">Note content</label>
                    <textarea id="note-content" cols={40} rows={3} value={this.state.noteContent} className="form-control" name="noteContent" onChange={(event) => this.isChange(event)}/>
                    <small id="helpId" className="form-text text-muted">Insert note content</small>
                </div>
                <button type="submit" onClick={(event) => this.addData(event, this.state.noteTitle, this.state.noteContent)} className="btn btn-primary">Submit</button>
            </form>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        testThoi : state.testConnect
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({
                type : "ADD_DATA",
                getItem
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)