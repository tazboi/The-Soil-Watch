import React from 'react';
import '@/styles/styles.css';
import MiniWindow from "@/app/components/MiniWindow";

export default function Stats() {
    return (
        <div className="font-frank text-[#f2f1f1] bg-fuchsia-500 md:p-3 box-border flex flex-wrap select-none md:flex-row justify-center sm:p-1.5">
            <MiniWindow title = "1"/>
            <MiniWindow title = "2"/>
            <MiniWindow title = "3"/>
            <MiniWindow title = "4"/>
        </div>
    );
};
