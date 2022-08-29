import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import DarkModeButton from "components/Button/DarkModeButton";
import LoginButton from "components/Button/LoginButton";
import MenuButton from "components/Button/MenuButton";
import { GlobalContext } from "contexts/GlobalContext";

export default function Header() {
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
                        <div
                            className={`fixed z-[-1] left-0 top-[-100%] data-active:top-[59px] transition-[top] duration-500 w-full h-full bg-white dark:bg-gray-900 md:relative md:z-[0] md:top-[0] md:data-active:top-[0] md:transition-none md:text-sm md:font-medium md:border-0 md:space-x-6`}
                            data-active={menuToggle}
                        >
                            <NavMenu />
                        </div>
                        <DarkModeButton />
                        <LoginButton />
                        <MenuButton toggle={menuToggle} onClick={() => setMenuToggle(!menuToggle)} />
                    </div>

                </div>
            </nav>
        </header>
    );
}

const NavMenu = () => {
    const context = useContext(GlobalContext);
    const { setMenuToggle } = context;

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
        <ul className="flex flex-col text-white p-4 md:pr-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {MenuList.map((menu, key) => (
                <li key={key}>
                    <NavLink
                        to={menu.to}
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 font-bold text-center text-gray-500 dark:text-gray-400 ${isActive && "text-gray-900 dark:text-gray-100"} rounded md:bg-transparent md:p-0`
                        }
                        onClick={() => setMenuToggle(false)}
                    >
                        {menu.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}