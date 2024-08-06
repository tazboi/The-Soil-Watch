import React from 'react';
import About from '../components/About'

export default  function Page() {
    return (
        <div className = "box-border lg:px-64 sm:p-14 md:p-20 sm:items-center h-full">
            <h1 className = "flex justify-center item-center lg:max-h-[500px] lg:min-h-[400px]">
            <About/>
            </h1>
        </div>
    );
};