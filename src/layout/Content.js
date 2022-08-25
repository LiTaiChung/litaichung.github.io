import React from 'react'

export default function Content({ children }) {
    return (
        <div className="main bg-white dark:bg-gray-900 dark:text-white">
            { children }
        </div>
    )
}
