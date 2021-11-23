import { useEffect, useRef, useState } from "react";
import ExpCard from "./ExpCard";
import Image from 'next/image';
import experience from '../../assets/experience.png';
import curexp from '../../assets/curexp.svg';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// Icons
import logo from '../../assets/logo.svg';
import mint from '../../assets/Mint.svg';
import nft from '../../assets/nft.svg';
import metaverse from '../../assets/metaverse.svg';
import ticketing from '../../assets/ticketing.svg';



const expItems = [
    {
        title: 'Stake & Mint',
        description: 'The LUMINA ecosystem allows true fans to stake the LUMINA tokens in order to get Icon Fan Tokens IFT®️ as rewards. Only the fans are be privy to early price discounts before listing for their IFTs. ',
        icon: mint,
        bg_color: 'bg-magenta'
    },
    {
        title: 'NFT',
        description: 'Icon create invaluable NFTs, like early music releases, or the first scripts of a performance and other similar exciting contents for their fans and their fans alone. These NFTs can be obtained by fans on the social app.',
        icon: nft,
        bg_color: 'bg-skyblue'
    },
    {
        title: 'Lumina Metaverse',
        description: 'Stake the LUMINA tokens in order to get Icon Fan Tokens IFT®️ as rewards. Participate in IDOs, voting, and early price discounts for all new projects',
        icon: metaverse,
        bg_color: 'bg-lightcyan'
    },
    {
        title: 'Ticketing & More',
        description: 'Fans that hold their icon tokens may just be on their way to the front row of the next concert or the VIP box for the next grand slam finals by their favourite sport icons',
        icon: ticketing,
        bg_color: 'bg-red'
    },
];

const Experience = () => {

    const [active, setActive] = useState('fans');
    
    const fansRef = useRef();
    const iconsRef = useRef();
    const brinRef = useRef();
    const descRef = useRef();
    const descRef2 = useRef();
    const expRef = useRef();
    const logoRef = useRef();
    const logorightRef = useRef();

    useEffect(() => {
        const tl = gsap.timeline({
            duration: 1, 
            scrollTrigger:{
                trigger: brinRef.current,
            }
        });
        tl.from(brinRef.current, {y: 10, opacity: 0});
        tl.from(iconsRef.current, {x: '-150%', opacity: 0});
        tl.from(fansRef.current, {x: '-130%', opacity: 0});
        
    },[]);
    // Animating descripton..******
    useEffect(() => {
        
        if(active==='fans'){
            gsap.from(descRef.current, {y: 10, opacity: 0, duration: 0.5, 
                scrollTrigger:{
                    trigger: descRef.current,
                }});
        }else {
            gsap.from(descRef2.current, {y: 10, opacity: 0, duration: 0.5, 
                scrollTrigger:{
                    trigger: descRef2.current,
                }});
        }
    },[active]);

    // Animating bottom section
    useEffect(() => {
        gsap.timeline({duration: 1, scrollTrigger:{
            trigger: expRef.current,
        }})
        .from(expRef.current, {y: -20, opacity: 0})
        .from(logoRef.current, {y: 20, opacity: 0}, "<")
        .from(logorightRef.current, {x: 15, opacity: 0})
    },[])

    return (
        <div className="container mx-auto bg-secondary">
            <div className="w-full px-3 py-16 md:p-28 relative">
                <div className="absolute right-5 top-5">
                    <Image className="w-full" src={curexp} alt="Back Shape" />
                </div>
                <p ref={brinRef} className="uppercase text-lightpeach text-sm md:text-base border border-dashed tracking-widest border-lightpeach px-2 py-1 inline-block">
                    bringing a new experience to fan-icon experience
                </p>
                <ul className="flex text-2xl md:text-5xl text-white my-5 md:my-10 font-bold select-none">
                    <li ref={fansRef} onClick={() => setActive('fans')} className="relative cursor-pointer mr-9">
                        <h1 className={`text-white ${active !== 'fans' ? 'text-opacity-20' : ''}`}>Fans</h1>
                        <span className={`absolute -bottom-2 w-0 h-1 bg-gradient-to-r from-blue to-lightgreen ${active === 'fans' ? 'inline-block min-w-full' : 'hidden'}`}></span>
                    </li>
                    <li ref={iconsRef} onClick={() => setActive('icons')} className="relative  cursor-pointer">
                        <h1 className={`text-white ${active !== 'icons' ? 'text-opacity-20' : 'text-opacity-100'}`}>Icons</h1>
                        <span className={`absolute -bottom-2 min-w-full h-1 bg-gradient-to-r from-blue to-lightgreen ${active === 'icons' ? 'inline-block' : 'hidden'}`}></span>
                    </li>
                </ul>
                <p ref={descRef} className={`text-white font-light md:font-normal h-32 text-opacity-70 text-xs md:text-xl ${active === 'fans' ? 'block': 'hidden'}`}>
                    Our Fans revolutionary social app fosters unparalleled experience for the true fans. 
                    They can have robust experiences with their icons in ways they could not do before now. 
                    They are no longer just transactional parties. They are more involved than ever before. 
                    The in-app experience allows fans to have a say in icon matters, to claim great giveaways, 
                    play games, enter into draws, audition for future icon projects and view games from VIP stands. 
                    They can earn free tokens on the app through solving puzzles by set by their loved icons.
                </p>
                <p ref={descRef2} className={`text-white font-light md:font-normal h-32 text-opacity-70 text-xs md:text-xl ${active === 'icons' ? 'block': 'hidden'}`}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.    
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
                    {
                        expItems.map((item, idx) => <ExpCard key={idx} itemIdx={idx} items={item} />)
                    }
                </div>
                <div className="relative w-full md:flex text-white z-10 mt-10 md:mt-36">
                    <div className="w-full md:w-1/3 ">
                        <h1 ref={expRef} className="text-56px -ml-1 -mb-8 pt-0 mt-0 font-light">Experience</h1>
                        <div ref={logoRef} className=" w-80 h-28"><Image width={250} height={100} layout="intrinsic" src={logo} alt="Logo" /></div>
                    </div>
                    <div ref={logorightRef} className="text-white w-full md:w-2/3 text-sm md:text-xl font-normal text-opacity-60">
                        <p className="">
                            The Lumina Token LUMIN is a store of great value and is a passport to a world of unparalleled experience for any icon listing their IFTs on the platform and their fans. For the holders of the IFTs, as it increases in value, it becomes very rewarding along with the utility derived from its use on the app as an exchange for their icon IFTs. 
                        </p>
                        <p className="pt-5">
                        he fans are no longer on the sidelines as spectators and just transactional parties who are only sold to. They are now involved and have their say in matters with their icons. They now influence things in real time. They are also rewarded based on their activities in-app.
                        </p>
                    </div>
                </div>
                <div className="absolute max-w-full left-0 bottom-0 z-0 -mb-2">
                    <Image width={1600} height={500} layout="intrinsic" sizes="20px" src={experience} alt="Experience"  />
                </div>
            </div>
        </div>
    )
};

export default Experience;