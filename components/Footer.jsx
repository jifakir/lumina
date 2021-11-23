import * as React from 'react';
import Image from 'next/image';
import { FaTelegramPlane, FaTwitter, FaInstagram } from 'react-icons/fa';
import binance from '../assets/binance.png';
import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <div className="bg-secondary">
            <div className="container px-3 md:px-20 mx-auto">
                <div className="py-10 md:py-28 flex flex-col md:flex-row justify-between border-b border-gray-800">
                    <div className="">
                        <h6 className="pb-5 md:pb-8 text-white text-opacity-70">Powered by :</h6>
                        <div className="">
                            <Image src={binance} alt="Binance Logo" />
                        </div>
                    </div>
                    <div className="text-white">
                        <h6 className="pb-5 md:pb-8 pt-10 md:pt-0 text-white text-opacity-70">Join Social :</h6>
                        <div className="flex text-white">
                            <div className="w-10 h-10 md:w-18 md:h-18 rounded-full p-2 mr-3 bg-cyan text-xl md:text-4xl flex justify-center items-center cursor-pointer hover:bg-blue">
                                <FaTelegramPlane />
                            </div>
                            <div className="w-10 h-10 md:w-18 md:h-18 rounded-full p-2 mr-3 bg-cyan text-xl md:text-4xl flex justify-center items-center cursor-pointer hover:bg-blue">
                                <FaTwitter />
                            </div>
                            <div className="w-10 h-10 md:w-18 md:h-18 rounded-full p-2 mr-3 bg-cyan text-xl md:text-4xl flex justify-center items-center cursor-pointer hover:bg-blue">
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                    <div className="pb-3 pt-5">
                        <Image src={logo} alt="Logo" />
                    </div>
                    <ul className="md:hidden flex text-white text-opacity-70">
                        <li className="pr-5">Terms of Use</li>
                        <li className="">Privacy Policy</li>
                    </ul>
                    <div className="">
                        <p className="text-white text-opacity-50 py-3 md:py-10">
                            Copyright © 2021 Lumina. All Rights Reserved.
                        </p>
                    </div>
                    <ul className="hidden md:flex py-3 md:py-10 text-white text-opacity-70">
                        <li className="pr-5">Terms of Use</li>
                        <li className="">Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;