import React from 'react';
import HomePageNav from "@/components/homePageNav.jsx";
import "/styles/styles.css"
import RootLayout from "@/app/layout";


const Page = () => {
return (
    <div className = "bg-[#505050] min-h-screen">
        <header className="bg-emerald-800 w-screen h-40 flex items-center justify-center">
            <h1 className="title_text">Soil Monitoring</h1>
        </header>

        <HomePageNav/>
    </div>


)
};

export default Page;