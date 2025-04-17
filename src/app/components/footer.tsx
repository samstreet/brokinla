import Link from "next/link";
import React from "react";
export default function Footer() {
    return (
        <div className="flex items-end w-full border-t">

            <footer className="w-full text-gray-700 bg-purple-300 body-font">
                <div
                    className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                    <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                        <Link href="/" className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                            <img src="/images/brokinla.png" className="w-24"/>
                        </Link>
                    </div>
                    <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Selsig</h2>
                            <nav className="mb-10 list-none">
                            <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">About</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Shows</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Elska</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">About</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-900">Shows</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-300">
                    <div className="container px-5 py-4 mx-auto">
                        <p className="text-sm text-gray-700 capitalize xl:text-center">© {(new Date).getFullYear()} All rights reserved </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}