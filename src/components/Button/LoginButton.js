import React, { useState } from 'react';
import Modal, { ModalHeader, ModalBody, ModalFooter } from 'components/Modal/Default';

const LoginButton = () => {
    const [ toggle, setToggle ] = useState(false);
    return (<>
        <button
            className="flex items-center justify-center py-2 px-4 text-sm text-center text-gray-600 transition-colors duration-300 transform border rounded-lg dark:text-gray-300 dark:border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            onClick={() => setToggle(!toggle)}
        >
            Login
        </button>

        <Modal toggle={toggle} setToggle={setToggle}>
            <ModalHeader>Login</ModalHeader>
            <ModalBody>123</ModalBody>
        </Modal>
    </>)
}

export default LoginButton;
