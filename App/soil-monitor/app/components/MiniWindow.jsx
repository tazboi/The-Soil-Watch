import React from 'react';

const MiniWindow = ({ title }) => {
    return (
        <div
            className="bg-[#708075] box-content rounded-lg shadow-lg flex-auto flex-col p-6 m-6 w-72 min-h-96 max-h-144 content-start overflow-auto">
            <h2 className="box-border flex flex-auto text-[#f2f1f1] text-2xl justify-center mb-4 font-amiri">{ title }</h2>
            <p className="flex-none overflow-auto text-white font-frank">
                Content from API goes here.
            </p>
        </div>
    );
};

export default MiniWindow;