import React, { useState } from "react";
import Modal, { ModalHeader, ModalBody } from "components/Modal/Default";
import {
    FacebookButton,
    FacebookLoginProvider,
    GoogleButton,
    GoogleLoginProvider,
} from "components/Social";

const LoginButton = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <button
                className="flex items-center justify-center py-2 px-4 text-sm text-center text-gray-600 transition-colors duration-300 transform border rounded-lg dark:text-gray-300 dark:border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                onClick={() => setToggle(!toggle)}
            >
                Login
            </button>

            {toggle && (
                <Modal toggle={toggle} setToggle={setToggle}>
                    <ModalHeader>Login</ModalHeader>
                    <ModalBody>
                        <div className="flex justify-center">
                            <FacebookLoginProvider>
                                <FacebookButton />
                            </FacebookLoginProvider>
                            <GoogleLoginProvider>
                                <GoogleButton />
                            </GoogleLoginProvider>
                        </div>
                    </ModalBody>
                </Modal>
            )}
        </>
    );
};

export default LoginButton;
