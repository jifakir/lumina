import * as React from 'react';
import Image from 'next/image';
import app from '../../assets/mobile.svg';

const LuminaApp = () => {
    return (
        <div className="mt-16">
            <h1 className="font-semibold text-xl pb-3">The LUMINA App</h1>
            <p className="text-xl pb-3">
                This is the community where the fan experiences and participates in all the excitement. In the app, the Icon and Fan meet and experience new level of interactions.
            </p>
            <h3 className="text-xl font-semibold pt-3">Activities that happen on the app:</h3>
            <div className="flex justify-between pt-5">
                <ul className="text-xl pb-5 leading-8">
                    <li className="">– Rewards</li>
                    <li className="">– Voting</li>
                    <li className="">– Minting</li>
                    <li className="">– Earn Free IFTs and LUMINs;</li>
                    <li className="">– Trade on the Exchange;</li>
                    <li className="">– Meet other Fans;</li>
                    <li className="">– Meet Your Icon.</li>
                </ul>
                <div className="-mt-5">
                    <Image width={200} height={300} src={app} alt="App" />
                </div>
            </div>
            <p className="text-xl">
                On the social App, fans can buy or swap other stable coins for LUMIN. They will be informed early ahead of the public about the launch of their Icon Fan Tokens. They can then stake their LUMINA token for the IFTs.
            </p>
        </div>
    )
}

export default LuminaApp;