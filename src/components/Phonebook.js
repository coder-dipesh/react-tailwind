import { useState } from "react";
import { FaTrash } from "react-icons/fa";

function Phonebook(props) {
  // Defining the state
  const [phonebooks, setPhonebooks] = useState(props.phonebook);
  const [addName, setName] = useState("");
  const [addNumber, setNumber] = useState("");

  const handleAddNameChange = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  };
  const handleAddNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    // Create a new phonebook object
    const phonebookData = {
      id: phonebooks.length + 1,
      name: addName,
      number: addNumber,
      date: new Date().toISOString(),
    };
    if (addName !== "" && addNumber !== "") {
      setPhonebooks(phonebooks.concat(phonebookData));
      console.log(phonebooks);
    }
    setName("");
    setNumber("");
  };

  const handleDelete = (id) => {
    if (window.confirm(`Do you want to delete phonebook of ${id} ID?`)) {
      setPhonebooks(phonebooks.filter((phonebook) => phonebook.id !== id));
    }
  };

  return (
    <>
      <div className="bg-gray-900  text-white h-full flex flex-wrap">
        <div className="order-1 p-8 h-full ">
          <h2 className="text-3xl uppercase py-4 font-extrabold">Phonebook</h2>
          {/* <button
            className="inline-block  rounded text-white uppercase p-2  transition duration-150 ease-in-out bg-blue-500  hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Important" : "Show All"}
          </button> */}

          <ul>
            {phonebooks.map((phonebook) => (
              <li key={phonebook.id} className="block   bg-white rounded-lg hover:shadow-2xl text-gray-700 my-3">
                <p className="p-2 ">
                  {phonebook.name}
                  <button
                    className="rounded text-white mx-2 p-2 active:shadow-lg transition duration-150 ease-in-ou bg-red-500"
                    onClick={() => handleDelete(phonebook.id)}
                  >
                    <FaTrash size="0.7rem" />
                  </button>
                </p>
                <p className="p-2 ">{phonebook.number}</p>
                <p className="p-2 text-sm opacity-60">{phonebook.date} </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div class="block p-6 rounded-sm shadow-lg bg-gray-800 max-w-sm">
            <form className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <p className="text-white text-xl">Add to Phonebook</p>
              <input
                className="shadow appearance  border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-slate-700 focus:shadow-outline"
                placeholder="Louis Tomlision"
                value={addName}
                onChange={handleAddNameChange}
                required
              ></input>
              <input
                className="shadow appearance  border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-slate-700 focus:shadow-outline"
                placeholder="+1 345 32489"
                value={addNumber}
                onChange={handleAddNumberChange}
              ></input>
              <button
                onClick={handleAdd}
                className="inline-block rounded text-white font-bold p-2 uppercase active:shadow-lg transition duration-150 ease-in-out bg-teal-700"
              >
                Add Contact
              </button>
            </form>
          </div>
          <div class="block p-6 rounded-sm shadow-lg bg-gray-800 max-w-sm">
            <form className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <p className="text-white text-xl">Filter from Phonebook</p>
              <input
                className="shadow appearance  border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-slate-700 focus:shadow-outline"
                placeholder="user, Number"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Phonebook;
