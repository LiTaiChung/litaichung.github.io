import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateDarkMode } from "store/actions/theme";

const DarkModeButton = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const dispatch = useDispatch();

    return (
        <label className={`toggleDarkBtn${darkMode ? " darkMode" : ""}`}>
            <input type="checkbox" onClick={() => dispatch(updateDarkMode(!darkMode))} />
            <span className="slideBtnTg round"></span>
        </label>
    )
}

export default DarkModeButton;