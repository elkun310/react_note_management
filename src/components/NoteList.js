import React, {Component} from 'react';

class NoteList extends Component {
    render() {
        return (
            <div id="note-list" role="tablist" aria-multiselectable="true">
                <div className="card">
                    <div className="card-header" role="tab" id="note1">
                        <h5 className="mb-0">
                            <a data-toggle="collapse" data-parent="#note-list" href="#note1Content" aria-expanded="true" aria-controls="note1Content">
                                Note : 31/10/2019
                            </a>
                        </h5>
                    </div>
                    <div id="note1Content" className="collapse in" role="tabpanel" aria-labelledby="note1">
                        <div className="card-body">
                            Girl of a proud metamorphosis, fight the resistance!
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" role="tab" id="note2">
                        <h5 className="mb-0">
                            <a data-toggle="collapse" data-parent="#note-list" href="#note2Content" aria-expanded="true" aria-controls="note2Content">
                                Note : 18/7/2020
                            </a>
                        </h5>
                    </div>
                    <div id="note2Content" className="collapse in" role="tabpanel" aria-labelledby="note2">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam debitis ex fuga incidunt molestias porro, quod suscipit! Ab aperiam assumenda commodi cumque, ex, harum in laborum libero maiores odit sit!
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteList;
