import React from "react";

export default function Contact() {
    return (
        <div>
            <div className="container mx-auto py-10">
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 overflow-hidden sm:rounded-lg">

                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                            Applicant Information
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-white">
                            Personal details and application.
                        </p>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-600">
                        <dl>
                            <div className="bg-gray-50 dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500 dark:text-white">
                                    Full name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                    Li Tai Chung
                                </dd>
                            </div>
                            <div className="bg-white dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500 dark:text-white">
                                    Application for
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                    Backend Developer
                                </dd>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500 dark:text-white">
                                    Email address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                    litaichungs@gmail.com
                                </dd>
                            </div>
                            <div className="bg-white dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500 dark:text-white">
                                    Salary expectation
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                    $120,000
                                </dd>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500 dark:text-white">
                                    About
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                    Fugiat ipsum ipsum deserunt culpa aute sint
                                    do nostrud anim incididunt cillum culpa
                                    consequat. Excepteur qui ipsum aliquip
                                    consequat sint. Sit id mollit nulla mollit
                                    nostrud in ea officia proident. Irure
                                    nostrud pariatur mollit ad adipisicing
                                    reprehenderit deserunt qui eu.
                                </dd>
                            </div>
                            <div className="bg-white dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500 dark:text-white">
                                    Attachments
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                                    <ul
                                        role="list"
                                        className="border border-gray-200 rounded-md divide-y divide-gray-200"
                                    >
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 flex-1 flex items-center">
                                                {/* <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                                                <span className="ml-2 flex-1 w-0 truncate">
                                                    resume_back_end_developer.pdf
                                                </span>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a
                                                    href="#"
                                                    className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-white"
                                                >
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 flex-1 flex items-center">
                                                {/* <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                                                <span className="ml-2 flex-1 w-0 truncate">
                                                    coverletter_back_end_developer.pdf
                                                </span>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a
                                                    href="#"
                                                    className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-white"
                                                >
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}
