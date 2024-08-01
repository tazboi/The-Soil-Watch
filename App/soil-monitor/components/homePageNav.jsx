import React from 'react';
import "/styles/styles.css"

export default function HomePageNav() {
    return (
<div>
    <header className="flex bg-emerald-800 w-full h-40 items-center justify-center">
        <h1 className="title_text">The Soil Watch</h1>
    </header>
            <nav className= "bg-emerald-800 max-w-full h-full flex items-center justify-center border-2 border-gray-950 ">
                <ul className="body flex justify-center space-x-11 bg-emerald-800 min-w-full h-full">
                    <li>
                        <button className = "px-1 py-1 hover:bg-gray-600 rounded-2xl focus:outline-black focus:ring-2 focus:ring-gray-500 ">Soil Statistics</button>
                    </li>
                    <li>
                        <button className = "px-1 py-1 hover:bg-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-500">Contact</button>
                    </li>
                    <li>
                        <button className = "px-1 py-1 hover:bg-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-500">Testing 3</button>
                    </li>
                    <li>
                        <button className = "px-1 py-1 hover:bg-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-500">Testing 4</button>
                    </li>

                </ul>
            </nav>
</div>


    );
};


