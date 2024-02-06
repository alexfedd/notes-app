import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotesList } from "./pages/NotesList";
import { Navbar } from "./components/Navbar";
import { useState, createContext } from "react";

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
          <Route path="/test" element={<h1>Test page</h1>} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
