import { useState } from "react";
import { FaTrash } from "react-icons/fa";

function Note(props) {
  // Defining the state
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll ? notes : notes.filter((note) => note.important === true);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    // Create a new note object
    const note = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };
    if (newNote !== "") {
      setNotes(notes.concat(note));
    }
    setNewNote("");
  };

  const handleDelete = (id) => {
    if (window.confirm(`Do you want to delete note of ${id} ID?`)) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  return (
    <>
      <div className="bg-gray-900  text-white h-full flex flex-wrap">
        <div className="order-1 p-8 h-full ">
          <h2 className="text-3xl uppercase py-4 font-extrabold">Notes</h2>
          <button
            className="inline-block  rounded text-white uppercase p-2  transition duration-150 ease-in-out bg-blue-500  hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Important" : "Show All"}
          </button>
          <ul>
            {notesToShow.map((note) => (
              <li key={note.id} className="block   bg-white rounded-lg hover:shadow-2xl text-gray-700 my-3">
                <p className="p-2 ">
                  {note.content}

                  <button
                    className="rounded text-white mx-2 p-2 active:shadow-lg transition duration-150 ease-in-ou bg-red-500"
                    onClick={() => handleDelete(note.id)}
                  >
                    <FaTrash size="0.7rem" />
                  </button>
                </p>
                <p className="p-2 text-sm opacity-60">{note.date} </p>
              </li>
            ))}
          </ul>
        </div>
        <div class="block p-6 rounded-lg shadow-lg bg-gray-800 max-w-sm">
          <form className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <p className="text-white text-xl">Add New Notes</p>
            <input
              className="shadow appearance  border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-slate-700 focus:shadow-outline"
              placeholder="Go to walk..."
              value={newNote}
              onChange={handleInputChange}
            ></input>
            <button
              onClick={handleAdd}
              className="inline-block rounded text-white font-bold p-2 uppercase active:shadow-lg transition duration-150 ease-in-out bg-teal-700"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Note;
