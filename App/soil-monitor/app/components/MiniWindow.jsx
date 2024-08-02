import React from 'react';

const MiniWindow = ({ title }) => {
    return (
        <div
            className="bg-gray-600 box-content rounded-lg shadow-lg flex-auto flex-col p-6 m-6 w-72 min-h-96 max-h-144 content-start overflow-auto">
            <h2 className="box-border flex flex-auto text-blue-400 text-2xl bg-emerald-800 justify-center mb-4">Testing title { title }</h2>
            <p className="flex-none overflow-auto text-white bg-fuchsia-500">
                Content goes here.
            </p>
        </div>
    );
};

export default MiniWindow;