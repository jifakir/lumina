import Image from 'next/image';
import { FaTelegramPlane, FaTwitter, FaInstagram } from 'react-icons/fa';
import heroImage from '../assets/HeroImage.svg';
import Vector from '../assets/Vector.svg';
import HeroCard from './HeroCard';

const Hero = () => {

    return (
        <div className="container mx-auto">
            <div className="flex py-24 pl-10">
                <div className="w-1/2">
                    <div className="">
                        <p className="uppercase tracking-widest text-lightpeach border border-dashed border-lightpeach px-2 py-1 inline-block">
                            icon fan tokens
                        </p>
                    </div>
                    <div className="my-9 text-white">
                        <h1 className="uppercase text-5xl leading-normal">
                            Launchpad for<br/> Entertainment<br/> and Sports  
                            <span className="relative">
                                <span className="relative z-10"> Icons</span>
                                <span className="absolute z-0 left-0 top-0">
                                    <Image src={Vector} alt="Icons" />
                                </span>
                            </span>
                        </h1>
                    </div>
                    <div className="">
                        <p className="pb-10 text-white text-xl font-light">
                            The world first platform that allows you to go beyond 
                            loving your favorite icons. Trade them, mint them, build
                             wealth and better connections.
                        </p>
                    </div>
                    <div className="flex text-white">
                        <div className="w-18 h-18 rounded-full p-2 mr-3 bg-cyan text-4xl flex justify-center items-center cursor-pointer hover:bg-blue">
                            <FaTelegramPlane />
                        </div>
                        <div className="w-18 h-18 rounded-full p-2 mr-3 bg-cyan text-4xl flex justify-center items-center cursor-pointer hover:bg-blue">
                            <FaTwitter />
                        </div>
                        <div className="w-18 h-18 rounded-full p-2 mr-3 bg-cyan text-4xl flex justify-center items-center cursor-pointer hover:bg-blue">
                            <FaInstagram />
                        </div>
                    </div>
                </div>
                <div className="relative w-1/2 flex justify-center items-center">
                    <Image src={heroImage} alt="Hero Image" />
                    <div className="absolute bottom-8 right-0">
                        <HeroCard />
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Hero;