// eslint-disable-next-line react/prop-types
export function NoteEditingFunctional({handleCancel, handleSave}) {
  return (
    <div className="right__editing-buttons">
      <button className="right__button" onClick={handleCancel}>
        <img src="" alt="Cancel button" />
      </button>
      <button className="right__button" onClick={handleSave}>
        <img src="" alt="Save button" />
      </button>
    </div>
  );
}
