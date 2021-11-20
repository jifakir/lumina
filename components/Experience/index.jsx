import ExpCard from "./ExpCard";
import Image from 'next/image';
import experience from '../../assets/experience.png';
import curexp from '../../assets/curexp.svg';


// Icons
import logo from '../../assets/logo.svg';
import mint from '../../assets/Mint.svg';
import nft from '../../assets/nft.svg';
import metaverse from '../../assets/metaverse.svg';
import ticketing from '../../assets/ticketing.svg';
import { useState } from "react";


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
    

    return (
        <div className="container mx-auto bg-secondary">
            <div className="w-full p-28 relative">
                <div className="absolute right-5 top-5">
                    <Image className="w-full" src={curexp} alt="Back Shape" />
                </div>
                <p className="uppercase text-lightpeach border border-dashed tracking-widest border-lightpeach px-2 py-1 inline-block">
                    bringing a new experience to fan-icon experience
                </p>
                <ul className="flex text-5xl text-white my-10 font-bold select-none">
                    <li onClick={() => setActive('fans')} className="relative cursor-pointer mr-9">
                        <h1 className={`text-white ${active !== 'fans' ? 'text-opacity-20' : ''}`}>Fans</h1>
                        <span className={`absolute -bottom-2 min-w-full h-1 bg-gradient-to-r from-blue to-green ${active === 'fans' ? 'inline-block' : 'hidden'}`}></span>
                    </li>
                    <li onClick={() => setActive('icons')} className="relative  cursor-pointer">
                        <h1 className={`text-white ${active !== 'icons' ? 'text-opacity-20' : 'text-opacity-100'}`}>Icons</h1>
                        <span className={`absolute -bottom-2 min-w-full h-1 bg-gradient-to-r from-blue to-green ${active === 'icons' ? 'inline-block' : 'hidden'}`}></span>
                    </li>
                </ul>
                <p className="text-white font-normal text-opacity-70 text-xl">
                    Our revolutionary social app fosters unparalleled experience for the true fans. 
                    They can have robust experiences with their icons in ways they could not do before now. 
                    They are no longer just transactional parties. They are more involved than ever before. 
                    The in-app experience allows fans to have a say in icon matters, to claim great giveaways, 
                    play games, enter into draws, audition for future icon projects and view games from VIP stands. 
                    They can earn free tokens on the app through solving puzzles by set by their loved icons.
                </p>
                <div className="grid grid-cols-2 gap-10 mt-14">
                    {
                        expItems.map((item, idx) => <ExpCard key={idx} items={item} />)
                    }
                </div>
                <div className="relative w-full flex text-white z-10 mt-36">
                    <div className="w-1/3">
                        <h1 className="text-5xl mb-2">Experience</h1>
                        <Image className="w-full pt-2 pl-1" src={logo} alt="Logo" />
                    </div>
                    <div className="text-white w-2/3 text-xl font-normal text-opacity-70">
                        <p className="">
                            The Lumina Token LUMIN is a store of great value and is a passport to a world of unparalleled experience for any icon listing their IFTs on the platform and their fans. For the holders of the IFTs, as it increases in value, it becomes very rewarding along with the utility derived from its use on the app as an exchange for their icon IFTs. 
                        </p>
                        <p className="pt-3">
                        he fans are no longer on the sidelines as spectators and just transactional parties who are only sold to. They are now involved and have their say in matters with their icons. They now influence things in real time. They are also rewarded based on their activities in-app.
                        </p>
                    </div>
                </div>
                <div className="absolute max-w-full left-0 bottom-0 z-0">
                    <Image className="max-w-full min-h-full" src={experience} alt="Experience"  />
                </div>
            </div>
        </div>
    )
};

export default Experience;