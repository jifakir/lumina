import * as React from 'react';
import Image from 'next/image';
import { FaTelegramPlane, FaTwitter, FaInstagram } from 'react-icons/fa';
import binance from '../assets/binance.png';
import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <div className="bg-secondary">
            <div className="container px-20 mx-auto">
                <div className="py-28 flex justify-between border-b border-gray-800">
                    <div className="">
                        <h6 className="pb-8 text-white text-opacity-70">Powered by:</h6>
                        <div className="">
                            <Image src={binance} alt="Binance Logo" />
                        </div>
                    </div>
                    <div className="text-white">
                        <h6 className="pb-8 text-white text-opacity-70">Join Social</h6>
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
                </div>
                <div className="flex justify-between items-center">
                    <div className="">
                        <Image src={logo} alt="Logo" />
                    </div>
                    <div className="">
                        <p className="text-white text-opacity-50">
                            Copyright © 2021 Lumina. All Rights Reserved.
                        </p>
                    </div>
                    <ul className="flex py-10 text-white text-opacity-70">
                        <li className="pr-5">Terms of Use</li>
                        <li className="">Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;