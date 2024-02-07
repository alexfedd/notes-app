import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { NoteEditingFunctional } from "./NoteEditingFunctional";
import deleteBtn from "./../assets/images/delete.svg";
export function NoteSheetForm() {
  const {
    isSelected,
    setIsSelected,
    notesList,
    setNotesList,
    isEditable,
    setIsEditable,
  } = useContext(AppContext);
  const [tempTitle, setTempTitle] = useState(notesList[isSelected].noteTitle);
  const [tempText, setTempText] = useState(notesList[isSelected].noteText);

  useEffect(() => {
    setTempTitle(notesList[isSelected].noteTitle);
    setTempText(notesList[isSelected].noteText);
  }, [isSelected, notesList]);

  const handleDelete = () => {
    setNotesList(notesList.toSpliced(isSelected, 1));
    setIsSelected(-1);
  };

  const handleCancel = () => {
    setTempTitle(notesList[isSelected].noteTitle);
    setTempText(notesList[isSelected].noteText);
    setIsEditable(false);
  };

  const handleSave = () => {
    const newNotesList = [...notesList];
    newNotesList[isSelected] = {
      ...notesList[isSelected],
      noteTitle: tempTitle,
      noteText: tempText,
    };
    setNotesList(newNotesList);
    setIsEditable(false);
  };

  return (
    <>
      <div className="right__title-wrapper">
        <input
          type="text"
          value={tempTitle}
          className="right__title-input"
          placeholder="New note"
          onChange={() => {
            setTempTitle(event.target.value);
            setIsEditable(true);
          }}
        />
      </div>
      <textarea
        className="right__note"
        value={tempText}
        placeholder="Write your note here..."
        onChange={() => {
          setTempText(event.target.value);
          setIsEditable(true);
        }}
      ></textarea>
      <div className="right__options">
        <button className="right__button" onClick={handleDelete}>
          <img src={deleteBtn} alt="Delete button" />
        </button>
        {isEditable && (
          <NoteEditingFunctional
            handleCancel={handleCancel}
            handleSave={handleSave}
          />
        )}
      </div>
    </>
  );
}
