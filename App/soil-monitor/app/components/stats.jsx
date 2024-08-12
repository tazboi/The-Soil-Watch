import React from 'react';
import '@/styles/styles.css';
import MiniWindow from "@/app/components/MiniWindow";

export default function Stats() {
    return (
        <div className="font-frank text-[#f2f1f1] p-3 box-border flex flex-wrap select-none justify-center">
            <MiniWindow title="1" sensor_id = "369da8e0-332d-4a9f-a9b9-91f9ad901a9b"/>
            <MiniWindow title="2" sensor_id = "850de865-2ad4-42da-aa85-d986d8787fa8"/>
            <MiniWindow title="3" sensor_id = "ed01ad0c-0c41-4334-b69e-c86627749962"/>

        </div>
    );
};
