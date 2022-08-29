import React from "react";

const MenuButton = ({ toggle, setToggle, ...props }) => {
    return (
        <button
            type="button"
            className="text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400"
            onClick={() => setToggle(!toggle)}
            {...props}
        >
            <span data-active={toggle} className={`relative block w-[17px] h-[2px] transition-all duration-300 bg-gray-900 dark:bg-white my-1 rotate-[0deg] top-[0px] data-active:rotate-[-45deg] data-active:top-[3px] `}></span>
            <span data-active={toggle} className={`block w-[17px] h-[2px] transition-all duration-300 bg-gray-900 dark:bg-white my-1 data-active:hidden`}></span>
            <span data-active={toggle} className={`relative block w-[17px] h-[2px] transition-all duration-300 bg-gray-900 dark:bg-white my-1 rotate-[0deg] bottom-[0px] data-active:rotate-45 data-active:bottom-[3px]`}></span>
        </button>
    );
};

export default MenuButton;
