import React from 'react';
import "/styles/styles.css"

export default function HomePageNav() {
    return (

            <div className= "bg-emerald-800 w-screen h-full flex items-center justify-center border-2 border-gray-950">
                <ul className="body flex justify-center space-x-11 bg-emerald-800 w-full h-full">
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
            </div>


    );
};


