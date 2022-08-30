import React from "react";

export default function ModalForm({ children, ...props }) {
    const { className } = props;

    return (
        <form className={`space-y-6 ${className || ""}`} {...props}>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, { ...props });
            })}
        </form>
    );
}

export const FormInputGroup = ({ children }) => {
    return (
        <div>{ children }</div>
    )
}

export const FormInputLabel = ({ children, className, ...props }) => {
    return (
        <label className={`block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${className || ''}`} {...props}>{ children }</label>
    )
}

export const FormInputInput = ({ className, ...props }) => {
    return (
        <input className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ${className || ""}`} {...props} />
    )
}