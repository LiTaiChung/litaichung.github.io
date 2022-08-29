import React from 'react';
import GoogleIcon from 'components/Icons/GoogleIcon';

export default function GoogleButton({ icon, text, className, children, ...props }) {
    return (
        <button className={`bg-white focus:outline-none shadow px-4 py-2 font-semibold text-gray-800 inline-flex items-center space-x-2 rounded ${className || ''}`} {...props}>
            { icon !== false && <GoogleIcon /> }
            { children || (text !== false && <span>Google Login</span>)}
        </button>
    )
}
