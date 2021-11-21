import * as React from 'react';
import Image from 'next/image';
import mobile from '../../assets/mobile.svg';
import {FaCheckCircle} from 'react-icons/fa';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const BottomSec = () => {

    const [active, setActive] = React.useState(0);
    const bottomRef = React.useRef();
    const firstRef = React.useRef();
    const secondRef = React.useRef();
    const uiRef = React.useRef();
    const triRef = React.useRef([]);

    // Animating bottom section 
    React.useEffect(()=> {

        const tl = gsap.timeline({
            duration: 1,
            scrollTrigger: {
                trigger: bottomRef.current
            }
        })
        .from(bottomRef.current, {y: 25, opacity: 0});

        triRef.current.map((v, idx) => tl.from(v, {x: 15, opacity: 0}));
        tl.from(firstRef.current,{y: -15, opacity: 0});
        tl.from(secondRef.current, {y: 15, opacity: 0});
        tl.from(uiRef.current, {x: '15%', opacity: 0})

    },[]);

    return (
        <div ref={bottomRef} className="w-full mt-10 py-20 px-28 text-black1" style={{background: '#FFF7ED'}}>
            <h1 className="font-bold text-56px leading-tight">
                Icon-Fan Engagement<br/>
                Tokenized. Re-imagined.
            </h1>
            <ul className="mt-12 flex">
                {
                    ['The Power of IFT', 'Why Lumina', 'Use Cases', 'Ecosystem', 'Lumina App'].map((v, idx) => (
                        <>
                            <li key={idx} ref={ref => triRef.current[idx] = ref} onClick={() => setActive(idx)} className={`text-sm transition duration-1000 ease-in-out font-bold mr-8 px-3 py-2 rounded-full cursor-pointer ${active === idx ? 'bg-black text-white': 'text-gray-700'}`}>
                                {v}
                            </li>
                        </>
                    ))
                }
            </ul>
            <div className="flex mt-16">
                <div className="w-2/3 pr-20 text-black1">
                    <p ref={firstRef} className="">
                        The Icon Fan Token IFT®️is at the heart of the LUMINA ecosystem. It gives fans the power to voice their opinions and positions. It also allows them to  earn gifts and immense opportunities as they exercise the privileges of their IFTs.
                    </p>
                    <p ref={secondRef} className="pt-10">
                        Icons use these IFTs on the social app to select from their most active fans for special treats like backstage meetings, auditions, featuring in new projects, sponsorships, merchandises, NFTs, autographs and many many more benefits.
                    </p>
                </div>
                <div ref={uiRef} className="w-1/3">
                    <Image src={mobile} alt="Mobile" />
                </div>
            </div>
            <ul className="flex flex-wrap">
                {
                    ['In-App Activation', 'Exchange', 'Rewareds', 'Free Concerts','In-App Activation', 'Exchange', 'Rewareds', 'Free Concerts',].map((v, idx) => (
                        <>
                            <li  key={idx} className="flex items-center w-1/4 mt-3">
                                <span className="pr-3">
                                    <FaCheckCircle />
                                </span>
                                <p className="text-black1">{v}</p>
                            </li>
                        </>
                    ))
                }
            </ul>
        </div>
    )
};

export default BottomSec;