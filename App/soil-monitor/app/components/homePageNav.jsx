import React from 'react';
import "@/styles/styles.css"
import Link from "next/link";


export default function HomePageNav() {
    return (
        <div>
            <header className="flex bg-emerald-800 w-full h-40 items-center justify-center">
                <h1 className="title_text select-none">The Soil Watch</h1>
            </header>
            <nav className="bg-emerald-800 max-w-full h-full flex items-center justify-center border-2 border-gray-950 select-none">
                <ul className="body flex justify-center space-x-11 bg-emerald-800 min-w-full h-full">
                    <li>
                        <Link href="../soilStats">
                            <button
                                className="px-1 py-1 hover:bg-gray-600 rounded-2xl">
                                Soil Statistics
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href="../Contact">
                            <button
                                className="px-1 py-1 hover:bg-gray-600 rounded-2xl">Contact
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href="../About">
                            <button
                                className="px-1 py-1 hover:bg-gray-600 rounded-2xl">About
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                        <button
                            className="px-1 py-1 hover:bg-gray-600 rounded-2xl">Home
                        </button>
                    </Link>
                    </li>

                </ul>
            </nav>
        </div>


    );
};


