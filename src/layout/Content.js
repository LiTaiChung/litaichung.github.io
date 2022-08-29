import React from 'react'

export default function Content({ children }) {
    return (
        <main className="bg-white mt-[59px] dark:bg-gray-900 dark:text-white md:mt-[73px]">
            { children }
        </main>
    )
}
