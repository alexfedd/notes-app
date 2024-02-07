import { useContext } from "react";
import { AppContext } from "../App";
import { NoteSheetForm } from "./NoteSheetForm";
import noNoteImage from "../assets/images/note.svg";
function NoteSheet() {
  const { isSelected } = useContext(AppContext);
  return (
    <div className="note-list__right right">
      {isSelected === -1 ? (
        <div className="right__no-notes no-notes">
            <img src={noNoteImage} alt="None notes image" className="no-notes__image" />
            <p className="no-notes__text">None note is selected</p>
        </div>
      ) : (
        <NoteSheetForm />
      )}
    </div>
  );
}

export default NoteSheet;
