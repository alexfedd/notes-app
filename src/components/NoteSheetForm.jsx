import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { NoteEditingFunctional } from "./NoteEditingFunctional";
import deleteBtn from "./../assets/images/delete.svg";
import backBtn from "./../assets/images/backBtn.svg";
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
  const [isEmpty, setIsEmpty] = useState(false)
  
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
    if (tempTitle !== "") {
      const newNotesList = [...notesList];
      newNotesList[isSelected] = {
        ...notesList[isSelected],
        noteTitle: tempTitle,
        noteText: tempText,
      };
      setNotesList(newNotesList);
      setIsEditable(false);
    }
  };

  return (
    <>
      <button className="right__back-btn" onClick={() => {
        setIsSelected(-1);
      }}>
        <img src={backBtn} alt="" />
      </button>
      <div className="right__title-wrapper" style={{borderColor: isEmpty && "red"}}>
        <input
          type="text"
          value={tempTitle}
          className="right__title-input"
          placeholder="New note"
          onChange={() => {
            setTempTitle(event.target.value);
            setIsEditable(true);
            if(event.target.value ==='') {
              setIsEmpty(true)
            }
            else {
              setIsEmpty(false)
            }
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
