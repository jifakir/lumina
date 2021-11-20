import * as React from 'react';
import Image from 'next/image';
import profile from '../assets/profile.png';

const HeroCard = () => {
    return (
        <div className="w-60 bg-blue bg-opacity-50 border border-opacity-20">
            <ul className="px-5 py-4 text-white">
                {
                    Array(5).fill('').map((v, idx) => (
                        <li key={idx} className="flex justify-between items-center mb-2">
                            <div className="flex items-center font-light text-sm">
                                <div className="w-6 h-6 mr-2 clip-path-hexagon overflow-hidden bg-lightpeach flex justify-center items-center">
                                    <Image className="w-full h-full" src={profile} alt="Profile" />
                                </div>
                                <h3 className="">Cristiano Ronaldo</h3>
                            </div>
                            <div className="">
                                <p className="">$8.45</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HeroCard;