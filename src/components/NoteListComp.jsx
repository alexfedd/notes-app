import NoteListItem from "./NoteListItem";
function NoteListComp() {
  return (
    <div className="note-list__left left">
      <div className="left__input-wrapper">
        <input type="text" className="left__search" placeholder="Search notes" />
      </div>
      <ul className="left__list">
        <NoteListItem />
        <NoteListItem />
        <NoteListItem />
        <NoteListItem />
      </ul>
    </div>
  );
}

export default NoteListComp;
