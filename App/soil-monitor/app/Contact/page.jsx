import React from 'react';
import Contact from "../components/Contact";

export default  function Page() {
    return (
        <div className = "box-border lg:translate-y-1/4 lg:px-64 bg-white sm:p-14 md:p-20 sm:items-center h-fit">
            <h1 className = "flex justify-center item-center bg-fuchsia-500 overflow-auto">
            <Contact/>
            </h1>
        </div>
    );
};