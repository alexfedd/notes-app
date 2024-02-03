import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotesList } from "./pages/NotesList";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
function App() {
  const [isEditable, setIsEditable] = useState(false);
  return (
    <Router>
      <Navbar setIsEditable={setIsEditable} isEditable={isEditable}/>
      <Routes>
        <Route path="/" element={<NotesList isEditable={isEditable}/>} />
        <Route path="/test" element={<h1>Test page</h1>} />
      </Routes>
    </Router>
  )
}

export default App
