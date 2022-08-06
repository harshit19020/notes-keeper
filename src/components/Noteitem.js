import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { note, updateNote } = props;
    const { deleteNote } = context;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fas fa-trash mx-2" onClick={()=>{
                            deleteNote(note._id);
                            props.showAlert("Deleted Successfully", "success");
                        }}></i>
                        <i className="fas fa-edit mx-2" onClick={()=>{
                            updateNote(note);
                            // props.showAlert("Updated Successfully", "success");
                        }}></i>
                    </div>
                        <p className="card-text">{note.description}</p>
                        <p className="card-text">Tag - {note.tag}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
