import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="relative h-screen">
            <Banner />
        </div>
    );
}

const Banner = () => {
    return (
        <div className="container mx-auto py-4 bg-gray relative z-10 overflow-hidden lg:flex items-center">
            <div className="flex-1">
                <div className="text-center lg:text-left px-5 lg:px-0 pt-150 lg:pt-0">
                    <h2 className="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">
                        Welcome!
                    </h2>
                    <div className="mt-8 lg:mr-8">
                        歡迎來到Ice的網頁.
                        此網頁以React製作
                        <div>Welcome To Ice Website.
                        This Website create by React</div>
                    </div>

                    <div className="mt-10 mb-8 lg:mb-0">
                        <Link to="/contact" className="bg-gray-800 text-white dark:bg-white dark:text-gray-800 px-4 py-2">
                            More
                        </Link>
                    </div>

                </div>
            </div>

            <div className="flex items-center">
                <div className="image 2xl:pl-25">
                    <img
                        src="https://preview.tailwindtemplates.co/plain/assets/images/header-image.svg"
                        alt="Header Image"
                    />
                </div>
            </div>
        </div>
    )
}
