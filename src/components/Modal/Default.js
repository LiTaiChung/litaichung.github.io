import React, { useEffect } from "react";
import ModalPortal from "components/ModalPortal";
import CloseButton from "components/Button/CloseButton";
import Backdrop from "components/Backdrop";

export default function DefaultModal({ children, ...props }) {
    const { toggle, className, position } = props;

    return (
        <ModalPortal>
            <Backdrop toggle={toggle}>
                <div
                    className={`relative p-4 w-full max-w-2xl${
                        position === "center" || !position ? " h-auto" : ""
                    }${position === "full" ? " h-full" : ""}`}
                >
                    <div
                        className={`relative bg-white rounded-lg shadow dark:bg-gray-700 ${
                            className || ""
                        }`}
                    >
                        {React.Children.map(children, (child) => {
                            return React.cloneElement(child, { ...props });
                        })}
                    </div>
                </div>
            </Backdrop>
        </ModalPortal>
    );
}

export const ModalHeader = ({ children, ...props }) => {
    const { setToggle } = props;

    return (
        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {children}
            </h3>
            <CloseButton onClick={() => setToggle(false)} />
        </div>
    );
};

export const ModalBody = ({ children, ...props }) => {
    return <div className="p-6 space-y-6 dark:text-white">{children}</div>;
};

export const ModalFooter = ({ children, ...props }) => {
    return (
        <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            {children}
        </div>
    );
};
