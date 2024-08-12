import React from 'react';
import Link from 'next/link';

const Contact = () => {
    return (
        <div className="bg-[#708075] box-border p-5 flex flex-col rounded-3xl w-full min-h-96">
            <h1 className="text-3xl text-center font-amiri text-[#f2f1f1] underline">
                Contact Me
            </h1>
            <div className="flex-grow flex items-center">
                <div
                    className="text-[#f2f1f1] font-frank mx-2 px-5 py-4 flex flex-col text-2xl leading-10 min-h-[300px]">
                    <div className="flex mb-3 items-center w-full flex-auto">
                        <strong className = "w-24">Github: </strong>
                        <Link href="https://github.com/Roenan-b">
                            <h1 className="hover:underline hover:text-[#152514] ml-6">Roenan-b</h1>
                        </Link>
                    </div>
                    <div className="flex mb-3 items-center w-full flex-auto">
                        <strong className = "w-24">LinkedIn: </strong>
                        <Link href="https://www.linkedin.com/in/roenan/">
                            <h1 className="hover:underline hover:text-[#152514] ml-6">Roenan Bingle</h1>
                        </Link>
                    </div>
                    <div className="flex mb-3 items-center w-full flex-auto">
                        <strong className = "w-24">Email: </strong>
                        <Link href="mailto:roenanbingle@gmail.com">
                            <h1 className="hover:underline hover:text-[#152514] ml-6">roenanbingle@gmail.com</h1>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;