import React, { useEffect } from "react";
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export default function Backdrop({ children, ...props }) {
    const { toggle, className } = props;

    useEffect(() => {
        toggle ? disablePageScroll() : enablePageScroll();

        return () => enablePageScroll();
    }, [toggle])

    return (
        <div
            className={`hidden data-active:flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-modal h-full inset-0 justify-center items-center bg-black/80 ${className || ""}`}
            data-active={toggle}
        >
            { children }
        </div>
    );
}
