function NoteSheet() {
    return ( <div className="note-list__right right">
        <div className="right__title-wrapper">
            <input type="text" className="right__title-input" placeholder="New note" />
        </div>
        <textarea className="right__note" placeholder="Write your note here..."></textarea>
        <div className="right__options">
            <button className="right__delete-button">
                <img src="" alt="Delete button" />
            </button>
        </div>
    </div> );
}

export default NoteSheet;