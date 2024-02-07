/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import saveImage from "../assets/images/save.svg";
import cancelImage from "../assets/images/cancel.svg";
export function NoteEditingFunctional({handleCancel, handleSave}) {
  return (
    <div className="right__editing-buttons">
      <button className="right__button" onClick={handleCancel}>
        <img src={cancelImage} alt="Cancel button" />
      </button>
      <button className="right__button" onClick={handleSave}>
        <img src={saveImage} alt="Save button" />
      </button>
    </div>
  );
}
