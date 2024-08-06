import React from 'react';
import Link from 'next/link';

const Contact = () => {
    return (
        <div className="bg-[#708075] box-border p-5 flex flex-col jutsify-center rounded-3xl w-full">
            <h1 className="text-3xl text-center font-amiri text-[#f2f1f1] underline">
                Contact Me
            </h1>
            <div
                className=" bg-green-700 text-[#f2f1f1] font-frank m-1 flex flex-col text-2xl">
                <div className="bg-pink-300 flex mb-2 items-center w-full text-center">
                    <strong>Github: </strong>
                    <Link href="https://github.com/Roenan-b">
                        <h1 className="hover:underline hover:text-[#152514]">Roenan-b</h1>
                    </Link>
                </div>
                <div className="bg-pink-300 flex mb-2 items-center w-full">
                    <strong>LinkedIn: </strong>
                    <Link href="https://github.com/Roenan-b">
                        <h1 className="hover:underline hover:text-[#152514] ml-2">Roenan</h1>
                    </Link>
                </div>
                <div className="bg-pink-300 flex mb-2 items-center w-full">
                    <strong>Email: </strong>
                    <Link href="mailto:roenanbingle@gmail.com">
                        <h1 className="hover:underline hover:text-[#152514] ml-2">roenanbingle@gmail.com</h1>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Contact;