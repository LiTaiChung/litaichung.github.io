import React from 'react';
import FacebookIcon from 'components/Icons/FacebookIcon'

export default function FacebookButton({ icon, text, className, children, ...props }) {
    return (
        <button className={`bg-[#3b5998] hover:bg-[#3b5998]/90 focus:outline-none shadow px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded ${className || ''}`} {...props}>
            { icon !== false && <FacebookIcon /> }
            { children || (text !== false && <span>Facebook Login</span>)}
        </button>
    )
}
