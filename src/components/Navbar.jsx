import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";
export function Navbar() {
  const {setIsEditable, notesList, setNotesList, setIsSelected} = useContext(AppContext);
  const createNewNote = () => {
    const date = new Date();
    const todayDate = `${date.getDate()}.${date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1}.${date.getFullYear()}`
    setNotesList([{noteTitle: "New Note", noteText: "", noteDate: todayDate}, ...notesList]);
    console.log([{noteTitle: "New Note", noteText: "", noteDate: todayDate}, ...notesList]);
    setIsEditable(true);
    setIsSelected(0);
  }
  return (
    <ul className="navbar">
      <li className="navbar__item" onClick={createNewNote}>
        <Link to={"/"}>
          <img src="" className="navbar__image" alt="New Note" />
        </Link>
      </li>
      <li className="navbar__item">
        <Link to={"/test"}>
          <img src="" className="navbar__image" alt="Test button" />
        </Link>
      </li>
    </ul>
  );
}
