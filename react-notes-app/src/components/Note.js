import { MdDeleteForever } from "react-icons/md";

const Note = () => {
    return (
        <div className="note">
            <span>Hello! This is our first note! Hurry!</span>
            <div className="note-footer">
                <small>11/09/2023</small>
                <MdDeleteForever className="delete-icon" size="1.3em" />
            </div>
        </div>
    );
};

export default Note;
