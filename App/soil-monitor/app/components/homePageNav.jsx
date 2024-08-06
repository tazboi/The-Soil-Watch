import React from 'react';
import "@/styles/styles.css"
import Link from "next/link";


export default function HomePageNav() {
    return (
        <div>
            <header className="flex bg-[#00c95a] w-full h-40 items-center justify-center">
                <h1 className="title_text select-none">The Soil Watch</h1>
            </header>
            <nav className="bg-[#00c95a] max-w-full h-10 flex items-center justify-center select-none">
                <ul className="body flex justify-center space-x-11 min-w-full h-full">
                    <li>
                        <Link href="../soilStats">
                            <button
                                className="px-1 py-0.5 hover:bg-gray-500 rounded-xl text-black">
                                Soil Statistics
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href="../Contact">
                            <button
                                className="px-1 py-0.5 hover:bg-gray-500 rounded-xl text-black">Contact
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href="../About">
                            <button
                                className="px-1 py-0.5 hover:bg-gray-500 rounded-xl text-black">About
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                        <button
                            className="px-1 py-0.5 hover:bg-gray-500 rounded-xl text-black">Home
                        </button>
                    </Link>
                    </li>

                </ul>
            </nav>
        </div>


    );
};


