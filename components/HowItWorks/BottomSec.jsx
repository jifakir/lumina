import * as React from 'react';
import Image from 'next/image';
import mobile from '../../assets/mobile.svg';
import {FaCheckCircle} from 'react-icons/fa';

const BottomSec = () => {

    const [active, setActive] = React.useState(0);
    return (
        <div className="w-full mt-10 py-20 px-32" style={{background: '#FFF7ED'}}>
            <h1 className="font-semibold text-5xl">
                Icon-Fan Engagement<br/>
                Tokenized. Re-imagined.
            </h1>
            <ul className="mt-12 flex">
                {
                    ['The Power of IFT', 'Why Lumina', 'Use Cases', 'Ecosystem', 'Lumina App'].map((v, idx) => (
                        <>
                            <li key={idx} onClick={() => setActive(idx)} className={`text-sm font-medium mr-8 px-3 py-2 rounded-full cursor-pointer ${active === idx ? 'bg-black text-white': 'text-gray-700'}`}>
                                {v}
                            </li>
                        </>
                    ))
                }
            </ul>
            <div className="flex mt-16">
                <div className="w-2/3 pr-20">
                    <p className="">
                        The Icon Fan Token IFT®️is at the heart of the LUMINA ecosystem. It gives fans the power to voice their opinions and positions. It also allows them to  earn gifts and immense opportunities as they exercise the privileges of their IFTs.
                    </p>
                    <p className="pt-10">
                        Icons use these IFTs on the social app to select from their most active fans for special treats like backstage meetings, auditions, featuring in new projects, sponsorships, merchandises, NFTs, autographs and many many more benefits.
                    </p>
                </div>
                <div className="w-1/3">
                    <Image src={mobile} alt="Mobile" />
                </div>
            </div>
            <ul className="flex flex-wrap">
                {
                    Array(8).fill('').map((v, idx) => (
                        <>
                            <li key={idx} className="flex items-center w-1/4 mt-3">
                                <span className="pr-3">
                                    <FaCheckCircle />
                                </span>
                                <p className="">In-App Activation</p>
                            </li>
                        </>
                    ))
                }
            </ul>
        </div>
    )
};

export default BottomSec;