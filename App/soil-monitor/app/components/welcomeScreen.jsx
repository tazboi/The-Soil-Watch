import React from 'react';

const WelcomeScreen = () => {
    return (
        <div className="h-full min-w-full flex flex-col items-center text-center leading-4">
            <h1 className="mb-4 font-semibold text-lg translate-y-44">
                Welcome to the Soil Watch
            </h1>
            <p className="my-4 max-w-md translate-y-44 leading-7 text-left">
                This website was made so my parents can keep a plant alive for longer than a couple weeks. There are a
                couple different tabs you can explore. The statistics tab will show real time data about the soil where
                the sensors have been placed.
            </p>

        </div>
    );
};

export default WelcomeScreen;