import React from 'react';
import {cookies} from "next/headers";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";

const MiniWindow = async ({title}) => {
    const userCookies = cookies();
    const sensorNum = title;
    const supabase = createServerComponentClient({cookies: () => userCookies})

    const {data: plants, error} = await supabase.from("sensor_data").select('*').eq('sensor', sensorNum)

    if(error){
        console.log(error, 'Error fetching the soil moisture')
    }
console.log({plants})

    return (
        <div
            className="bg-[#708075] box-content rounded-lg shadow-lg flex-auto flex-col p-6 m-6 min-w-72 min-h-96 max-h-144 content-start overflow-auto grow-0">
            <h2 className="box-border flex flex-auto text-[#f2f1f1] text-2xl justify-center mb-4 font-amiri">{title}</h2>
            <p className="flex-none overflow-auto text-white font-frank">
                Content from API goes here.
            </p>
        </div>
    );
};

export default MiniWindow;