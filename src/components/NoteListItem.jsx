/* eslint-disable react/prop-types */
function NoteListItem({noteTitle, noteDate, onClickHandler}) {

  return (
    <li className="left__item list-item" onClick={onClickHandler}>
      <h2 className="list-item__title">{noteTitle}</h2>
      <p className="list-item__date">{noteDate}</p>
    </li>
  );
}

export default NoteListItem;
