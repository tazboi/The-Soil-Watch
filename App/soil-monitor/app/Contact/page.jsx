import React from 'react';
import Contact from "../components/Contact";

export default  function Page() {
    return (
        <div className = "flex bg-fuchsia-500 box-border justify-start m-20 p-8">
            <h1 className = "bg-green-700 flex min-w-96 max-w-[450px] max-h-[500px] min-h-[400px]">
            <Contact/>
            </h1>
        </div>
    );
};