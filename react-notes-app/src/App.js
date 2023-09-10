import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {
    const [notes, setNotes] = useState([
        { id: nanoid(), text: "This is my first note!", date: "11/09/2023" },
        { id: nanoid(), text: "This is my second note!", date: "12/09/2023" },
        { id: nanoid(), text: "This is my third note!", date: "13/09/2023" },
        { id: nanoid(), text: "This is my fourth note!", date: "21/09/2023" },
    ]);

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        };

        setNotes((notes) => [...notes, newNote]);
    };

    return (
        <div className="container">
            <NotesList notes={notes} handleAddNote={addNote} />
        </div>
    );
};

export default App;
