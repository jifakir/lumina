import * as React from 'react';
import Image from 'next/image';
import line from '../../assets/line.svg';


const Token = () => {
    return (
        <div className="bg-secondary">
            <div className="container mx-auto pt-24 pb-24">
                <h1 className="text-white text-center font-semibold text-5xl pb-18">
                    IDO, Token, Price, and<br/>
                    Vesting Schedules
                </h1>
                <div className="px-44 text-white flex flex-wrap">
                    
                    <div className="w-full grid grid-cols-2 gap-10">
                        {
                            Array(4).fill('').map((v, idx) => (
                                <div key={idx} className="p-11 bg-lightpeach flex flex-col justify-between">
                                    <div className="">
                                        <h1 className="text-4xl font-semibold">
                                            Public Sale<br/>
                                            Token Prize
                                        </h1>
                                    </div>
                                    <div className="flex justify-between items-baseline">
                                        <h6 className="">TBA</h6>
                                        <Image src={line} alt="Line" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="p-11 mt-10 w-full bg-blue">
                        <h1 className="text-4xl font-semibold pb-5">
                            Tokenomics
                        </h1>
                        <div className="flex justify-between">
                            <ul className="w-3/4 grid grid-cols-3 gap-3">
                                {
                                    Array(9).fill('').map((v, idx) => (
                                        <li key={idx} className="flex justify-between">
                                            <p className="font-medium">Private Sale</p>
                                            <span className="font-semibold">20%</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="relative w-1/4 min-h-full flex justify-end items-end">
                                <Image className="" src={line} alt="Line" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Token;