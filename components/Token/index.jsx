import * as React from 'react';
import Image from 'next/image';
import line from '../../assets/line.svg';
import TokenCard from './TokenCard';
import gsap from 'gsap';

//* Data for tile
const tileData = [
    {
        title: 'Public Sale Token Prize',
        sub: 'TBA',
        bg: 'bg-pink1'
    },
    {
        title: 'Maximum Token Supply',
        sub: 'TBA $LUMIN',
        bg: 'bg-skyblue',
    },
    {
        title: 'Market capitalization at listing',
        sub: 'TBA',
        bg: 'bg-red'
    },
    {
        title: 'Total circulating supply at listing',
        sub: 'TBA $LUMIN',
        bg: 'bg-lightcyan'
    },
]

// ! Component start

const Token = () => {
    
    const tokenRef = React.useRef();

    //* Animating tile*********
    React.useEffect(()=> {
        gsap.from(tokenRef.current , {duration: 1, y: 15, opacity: 0, scrollTrigger: {trigger: tokenRef.current}});
    })
    return (
        <div className="bg-secondary">
            <div className="container mx-auto pt-24 pb-24">
                <h1 className="text-white text-center font-bold text-56px pb-18">
                    IDO, Token, Price, and<br/>
                    Vesting Schedules
                </h1>
                <div className="px-44 text-white flex flex-wrap">
                    
                    <div className="w-full grid grid-cols-2 gap-10">
                        {
                            tileData.map((v, idx) => (
                                <TokenCard key={idx} data={v} index={idx} />
                            ))
                        }
                    </div>
                    <div ref={tokenRef} className="p-11 mt-10 w-full bg-purple1">
                        <h1 className="text-40px font-bold pb-5">
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