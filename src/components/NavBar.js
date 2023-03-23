import React, { useState, useEffect } from 'react';

function Navbar() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-colors rounded rounded-b-2xl shadow shadow-teal-500 duration-700 ease-in-out ${
                scroll ? 'bg-teal-600 text-white' : 'bg-transparent'
            }`}
        >
            <div className=" flex flex-wrap items-center justify-between mx-auto">
                <a className="flex items-center">
                    <span
                        className=" ml-10 self-center text-white text-2xl font-extrabold whitespace-nowrap v-font fonteer dark:text-white">Vincent Vasili</span>
                </a>
                <div className="flex bg-transparent md:order-2">
                    <button data-collapse-toggle="navbar-cta" type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div className="items-center bg-transparent justify-between hidden w-full md:flex md:w-auto md:order-1"
                     id="navbar-cta">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#"
                               className="block py-2 pl-3 pr-4 text-white v-font fonteer  rounded md:bg-transparent md:text-white md:p-0 hover:font-sans  hover:text-green-500 dark:text-white"
                               aria-current="page">Home</a>
                        </li>




                        <li>
                            <a href="#"
                               className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 v-font fonteer hover:font-sans md:hover:bg-transparent
                                hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700
                                 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 pl-3 pr-4 text-white font-serif v-font fonteer hover:font-sans rounded hover:bg-gray-100 md:hover:bg-transparent
                               hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700
                                dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">What I do</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block font-serif hover:font-sans py-2 pl-3 pr-4 v-font text-white rounded hover:bg-gray-100 md:hover:bg-transparent
                               hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700
                                dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Resume</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block font-serif hover:font-sans v-font py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent
                               hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700
                                dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Portfolio</a>
                        </li>
                        <li>
                            <a href="#"
                               className="font-serif hover:font-sans block v-font py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent
                               hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700
                                dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Testimonials</a>
                        </li>
                        <li>
                            <a href="#"
                               className=" font-serif hover:font-sans v-font block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent
                               hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700
                                dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
