import React from 'react';

const DarkModeButton = ({ darkMode, setDarkMode }) => {
    return (
        <label className={`toggleDarkBtn${darkMode ? " darkMode" : ""}`}>
            <input type="checkbox" onClick={setDarkMode} />
            <span className="slideBtnTg round"></span>
        </label>
    )
}

export default DarkModeButton;