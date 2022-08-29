import React from "react";

const MenuButton = ({ toggle, ...props }) => {
    return (
        <button
            type="button"
            className="text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400"
            {...props}
        >
            <span className={`relative block w-[17px] h-[2px] bg-gray-900 dark:bg-white my-1 ${toggle ? 'rotate-[-45deg] top-[3px]' : ''}`}></span>
            <span className={`block w-[17px] h-[2px] bg-gray-900 dark:bg-white my-1 ${toggle ? 'hidden' : ''}`}></span>
            <span className={`relative block w-[17px] h-[2px] bg-gray-900 dark:bg-white my-1 ${toggle ? 'rotate-45 bottom-[3px]' : ''}`}></span>
        </button>
    );
};

export default MenuButton;
