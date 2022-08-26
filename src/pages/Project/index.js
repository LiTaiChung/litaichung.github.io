import React from "react";

export default function Project() {

    const fakeData = [
        {
            title: "Noteworthy technology acquisitions 2021",
            text: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        },
        {
            title: "Noteworthy technology acquisitions 2021",
            text: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        },
        {
            title: "Noteworthy technology acquisitions 2021",
            text: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        },
        {
            title: "Noteworthy technology acquisitions 2021",
            text: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        },
        {
            title: "Noteworthy technology acquisitions 2021",
            text: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        },
    ];

    return (
        <div>
            <div className="container mx-auto p-6">
                <section>
                    <div className="space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
                        <div className="flex items-center justify-between">
                            <h2 className="font-semibold text-slate-900 dark:text-white">
                                Projects
                            </h2>
                        </div>
                        <form className="group relative">
                            <svg
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                />
                            </svg>
                            <input
                                className="focus:ring-2 focus:ring-blue-500 focus:outline-none dark:focus:ring-white appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                                type="text"
                                aria-label="Filter projects"
                                placeholder="Filter projects..."
                            />
                        </form>
                    </div>

                    <ul className="bg-slate-50 dark:bg-gray-900 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-sm leading-6">
                        {
                            fakeData.map((item, key) => <CardItem key={key} {...item} />)
                        }
                    </ul>
                </section>
            </div>
        </div>
    );
}

const CardItem = (props) => {
    const { title, text } = props;

    return (
        <li className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mb-10">
            <a href="#">
                <img
                    className="rounded-t-lg"
                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                    alt=""
                />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        { title }
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    { text }
                </p>
                <a
                    href="#"
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Read more
                    <svg
                        aria-hidden="true"
                        className="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </a>
            </div>
        </li>
    );
};
