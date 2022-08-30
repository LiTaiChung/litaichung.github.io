import React, { useState } from "react";
import Modal, { ModalBody, ModalHeader } from "components/Modal/ModalDefault";
import ModalForm, {
    FormInputGroup,
    FormInputLabel,
    FormInputInput,
} from "components/Modal/ModalForm";
import { FacebookButton, FacebookLoginProvider } from "components/Social";
import CloseButton from "components/Button/CloseButton";

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

     
                <Modal toggle={toggle} setToggle={setToggle} size="md">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <CloseButton
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            onClick={() => setToggle(false)}
                        />
                        <ModalBody>
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                Sign in to our platform
                            </h3>
                            <ModalForm>
                                <FormInputGroup>
                                    <FormInputLabel>Your email</FormInputLabel>
                                    <FormInputInput type="email" required />
                                </FormInputGroup>
                                <FormInputGroup>
                                    <FormInputLabel>
                                        Your password
                                    </FormInputLabel>
                                    <FormInputInput type="password" required />
                                </FormInputGroup>
                                <div className="flex justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                type="checkbox"
                                                value=""
                                                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                                required
                                            />
                                        </div>
                                        <label
                                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                                    >
                                        Lost Password?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Login to your account
                                </button>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Not registered?{" "}
                                    <a
                                        href="#"
                                        className="text-blue-700 hover:underline dark:text-blue-500"
                                    >
                                        Create account
                                    </a>
                                </div>
                            </ModalForm>
                            <div className="flex flex-col">
                                <FacebookLoginProvider>
                                    <FacebookButton className="mb-5 py-3 justify-center" />
                                </FacebookLoginProvider>
                            </div>
                        </ModalBody>
                    </div>
                </Modal>
        </>
    );
};

export default LoginButton;
