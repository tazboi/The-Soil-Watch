import React from 'react';

const About = () => {
    return (
        <div
            className="bg-[#708075] box-border p-6 rounded-2xl text-black flex flex-wrap overflow-auto w-full min-h-full font-frank text-xl">
            <h1 className = "text-3xl">About The Soil Watch</h1>
            <p>Welcome to The Soil Watch, a project inspired by the legendary Night's Watch from Game of Thrones. As a
            Software Engineering student at the University of Arizona with a passion for technology and embedded
            systems, I've embarked on a mission to blend these interests into a practical solution for everyday life.</p>

            <p>At the heart of The Soil Watch is an innovative system that leverages the power of an ESP32 microcontroller.
            This smart device connects to Wi-Fi and meticulously collects soil moisture data at regular intervals. The
            data is then uploaded to a database, where it’s processed and made accessible through our website.</p>

            <p>The primary goal of this project is to support my parents in keeping their plants vibrant and healthy. By
            providing real-time soil moisture information and historical data trends, The Soil Watch empowers them to
            make informed decisions about plant care. The website serves as a user-friendly interface to view and
            monitor soil conditions, ensuring that their plants receive the perfect amount of attention they need to
            thrive.</p>

            <p>Through this endeavor, I aim to demonstrate how embedded systems and modern technology can create meaningful
            solutions for practical problems, drawing inspiration from both classic literature and cutting-edge
                technology.</p>
        </div>
    );
};

export default About;