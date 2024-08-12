'use client';
import React, {useEffect, useState} from 'react';
import {createClientSupabase} from '/utils/server'


const MiniWindow =  ({title, sensor_id}) => {
    const [sensorData, setSensorData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const supabase = createClientSupabase();
            const { data, error } = await supabase
                .from('sensor_data')
                .select('*')
                .eq('id',sensor_id);
            if (error) {
                console.error("Error fetching data:", error.message); // Log the error message
                setError(error.message);
            } else {
                console.log(data) // this statement
                setSensorData(data);
            }
            setLoading(false);
        };
        fetchData();
    }, [sensor_id])

    return (
        <div
            className="bg-[#708075] box-content rounded-lg shadow-lg flex-auto flex-col p-6 m-6 min-w-72 min-h-96 max-h-144 content-start overflow-auto grow-0">
            <h2 className="box-border flex flex-auto text-[#f2f1f1] text-2xl justify-center mb-4 font-amiri">{title}</h2>
            <ul>
                {sensorData.map((sensor) => (
                        <li key={sensor.id}>
                            <strong>Soil Moisture:</strong> {sensor.moisture}
                        </li>
                    )
                )}
            </ul>

        </div>
    );
};

export default MiniWindow;