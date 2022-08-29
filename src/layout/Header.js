import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateDarkMode } from "store/actions/theme";
import { GlobalContext } from "contexts/GlobalContext";
import DarkModeButton from "components/Button/DarkModeButton";
import LoginButton from "components/Button/LoginButton";
import MenuButton from "components/Button/MenuButton";

export default function Header() {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const dispatch = useDispatch();
    const context = useContext(GlobalContext);
    const { menuToggle, setMenuToggle } = context;

    return (
        <header className="fixed w-full top-[0] z-[50]">
            <nav className="bg-white border-b border-gray-200 px-4 py-2.5 md:px-0 dark:bg-gray-900 dark:border-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            Ice
                        </span>
                    </Link>

                    <div className="flex flex-row items-center justify-center space-x-6">
                        <NavMenu />
                        <DarkModeButton darkMode={darkMode} setDarkMode={() => dispatch(updateDarkMode(!darkMode)) } />
                        <LoginButton />
                        <MenuButton toggle={menuToggle} setToggle={setMenuToggle} />
                    </div>
                </div>
            </nav>
        </header>
    );
}

const NavMenu = () => {
    const context = useContext(GlobalContext);
    const { menuToggle, setMenuToggle } = context;

    const MenuList = [
        {
            label: "Home",
            to: "/",
        },
        {
            label: "Project",
            to: "project",
        },
        {
            label: "Contact",
            to: "contact",
        },
    ];

    return (
        <div
            className={`fixed z-[-1] top-[59px] bottom-0 left-0 right-0 transition-[visibility] duration-500 invisible data-active:visible md:relative md:z-[0] md:top-[0] md:data-active:top-[0] md:visible md:text-sm md:font-medium md:border-0 md:space-x-6 md:transition-none`}
            data-active={menuToggle}
        >
            <div
                className="absolute top-[-100%] left-0 h-full w-full transition-[top] duration-500 bg-white dark:bg-gray-900 data-active:top-[0px] md:relative md:data-active:top-0 md:transition-none"
                data-active={menuToggle}
            >
                <ul className=" flex flex-col text-white p-4 md:pr-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    {MenuList.map((menu, key) => (
                        <li key={key}>
                            <NavLink
                                to={menu.to}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 font-bold text-center text-gray-500 dark:text-gray-400 ${
                                        isActive &&
                                        "text-gray-900 dark:text-gray-100"
                                    } rounded md:bg-transparent md:p-0`
                                }
                                onClick={() => setMenuToggle(false)}
                            >
                                {menu.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
