import React from 'react';
import '@/styles/styles.css';
import MiniWindow from "@/app/components/MiniWindow";

export default function Stats() {
    return (
        <div className="stats p-3 box-border flex flex-wrap justify-center select-none">
            <MiniWindow title = "1"/>
            <MiniWindow title = "2"/>
            <MiniWindow title = "3"/>
            <MiniWindow title = "4"/>
        </div>
    );
};
