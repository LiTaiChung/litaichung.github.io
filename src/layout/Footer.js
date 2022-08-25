import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div className="container mx-auto">
                <span className="block text-sm text-gray-500 sm:text-center dark:text-white">© 2022 <Link to="/" className="hover:underline">Ice</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
