import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import Note from "./components/Note";
import Phonebook from "./components/Phonebook";
import reportWebVitals from "./reportWebVitals";

// const notes = [
//   {
//     id: 1,
//     content: "React Garna ta lastai majja aune yarr",
//     date: "2022-1-17T17:30:31.098Z",
//     important: true,
//   },
//   {
//     id: 2,
//     content: "Jailey jhyau lagxa vanya",
//     date: "2022-1-17T18:39:34.091Z",
//     important: false,
//   },
//   {
//     id: 3,
//     content: "Voli xai bihanai uthne hai ",
//     date: "2022-1-17T19:20:14.298Z",
//     important: false,
//   },
//   {
//     id: 4,
//     content: "Aja xai running ma jane ho",
//     date: "2022-1-18T19:30:14.278Z",
//     important: true,
//   },
//   {
//     id: 5,
//     content: "K xa kta ho",
//     date: "2022-1-18T19:30:14.278Z",
//     important: true,
//   },
//   {
//     id: 6,
//     content: "Voli ta API ko class ",
//     date: "2022-1-18T19:30:14.278Z",
//     important: true,
//   },
//   {
//     id: 7,
//     content: "20 din ma kam saknu xa yar",
//     date: "2022-1-18T19:30:14.278Z",
//     important: true,
//   },
// ];

const phonebook = [
  {
    id: 1,
    name: "Dipesh Siwakoti",
    number: "9816034112",

    date: "2022-1-17T17:30:31.098Z",
  },
  {
    id: 2,
    name: "John Doe",
    number: "+1 342 44879",
    date: "2022-1-17T18:39:34.091Z",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Phonebook phonebook={phonebook} />
    {/* <Note notes={notes} /> */}
  </React.StrictMode>
);

reportWebVitals();
