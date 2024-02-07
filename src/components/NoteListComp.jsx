import NoteListItem from "./NoteListItem";
import { AppContext } from "../App";
import { useContext, useEffect, useState } from "react";
function NoteListComp() {
  const { notesList, setIsSelected } = useContext(AppContext);
  const [searchInput, setSearchInput] = useState("");
  const [searchedList, setSearchedList] = useState(notesList);

  useEffect(() => {
    const handleSearch = () => {
      setSearchedList(
        notesList.filter((value) => {
          if (
            searchInput === "" ||
            value?.noteTitle.toLowerCase().includes(searchInput.toLowerCase())
          ) {
            return value;
          }
        })
      );
    };
    handleSearch();
  }, [notesList, searchInput]);

  return (
    <div className="note-list left">
      <div className="left__input-wrapper">
        <input
          type="text"
          className="left__search"
          placeholder="Search notes"
          onChange={() => {
            setSearchInput(event.target.value);
          }}
        />
      </div>
      {notesList.length !== 0 ? (
        <ul className="left__list">
          {searchedList.length !== 0 ? (
            searchedList.map((value, key) => {
              return (
                <NoteListItem
                  key={key}
                  noteTitle={value?.noteTitle}
                  noteDate={value?.noteDate}
                  onClickHandler={() => {
                    setIsSelected(key);
                  }}
                />
              );
            })
          ) : (
            <div className="no-notes">
              <p className="no-notes__text">No notes were found</p>
            </div>
          )}
        </ul>
      ) : (
        <div className="no-notes">
          <p className="no-notes__text">No notes</p>
        </div>
      )}
    </div>
  );
}

export default NoteListComp;
