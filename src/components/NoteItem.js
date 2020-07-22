import React, { Component } from 'react'

class NoteItem extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id={`node${this.props.id}`}>
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#note-list" href={`#note${this.props.id}Content`} aria-expanded="true" aria-controls={`note${this.props.id}Content`}>
                            {this.props.noteTitle}
                        </a>
                        <div className="btn-group float-right">
                            <button className="btn btn-outline-info">Edit</button>
                            <button className="btn btn-outline-secondary">Delete</button>
                        </div>
                    </h5>
                </div>
                <div id={`note${this.props.id}Content`} className="collapse in" role="tabpanel" aria-labelledby="note2">
                    <div className="card-body">
                        {this.props.noteContent}
                    </div>
                </div>
            </div>
        )
    }
}
export default NoteItem;