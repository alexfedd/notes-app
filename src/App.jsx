import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotesList } from "./pages/NotesList";
import { Navbar } from "./components/Navbar";
import { useState, createContext } from "react";
import "./assets/scss/reset.css";
import './assets/scss/style.scss'

export const AppContext = createContext();

function App() {
  const [isEditable, setIsEditable] = useState(false);
  const [notesList, setNotesList] = useState([]);
  const [isSelected, setIsSelected] = useState(-1);
  return (
    <AppContext.Provider
      value={{
        isEditable,
        setIsEditable,
        notesList,
        setNotesList,
        isSelected,
        setIsSelected,
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<NotesList />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
