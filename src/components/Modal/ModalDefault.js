import React from "react";
import ModalPortal from "components/ModalPortal";
import CloseButton from "components/Button/CloseButton";
import Backdrop from "components/Backdrop";

export default function ModalDefault({
    className,
    position,
    size,
    children,
    ...props
}) {
    const { toggle } = props;

    const modalSize = () => {
        switch (size) {
            case "sm":
                return "max-w-sm";
            case "md":
                return "max-w-md";
            case "lg":
                return "max-w-lg";
            case "2xl":
                return "max-w-2xl";
            default:
                return "max-w-2xl";
        }
    };

    const modalPosition = () => {
        switch (position) {
            case "center":
                return "h-auto";
            case "full":
                return "h-full";
            default:
                return "h-auto";
        }
    };

    return (
        <ModalPortal>
            <Backdrop toggle={toggle}>
                <div className={`relative p-4 w-full ${modalSize()} ${modalPosition()}`}>
                    <div className={`relative bg-white rounded-lg shadow dark:bg-gray-700 ${className || ""}`}>
                        { children }
                    </div>
                </div>
            </Backdrop>
        </ModalPortal>
    );
}

export const ModalContent = ({ children, ...props }) => {
    return (
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            { children }
        </div>
    );
};

export const ModalHeader = ({ children, ...props }) => {
    const { setToggle } = props;
    
    return (
        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                { children }
            </h3>
            <CloseButton onClick={() => setToggle(false)} />
        </div>
    );
};

export const ModalBody = ({ children, ...props }) => {
    return (
        <div className="p-6 space-y-6 dark:text-white">
            { children }
        </div>
    );
};

export const ModalFooter = ({ children, ...props }) => {
    return (
        <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            { children }
        </div>
    );
};
