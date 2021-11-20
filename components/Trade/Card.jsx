import Image from 'next/image';
import profile from '../../assets/profile.png';

const Card = () => {

    return (
            <div className="w-44 h-48 bg-white text-black">
                            <div className="h-full p-4 flex flex-col justify-between">
                                <div className="flex">
                                    <div className="w-10 h-10 mr-4 rounded-full overflow-hidden bg-lightpeach border-4 border-red">
                                        <div className="w-10 h-10 transform">
                                            <Image className="max-w-full" src={profile} alt="Profile Pic" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <h1 className="text-sm font-semibold">Tiwa Savage</h1>
                                        <h2 className="text-xs text-gray-500">TIWA<sup>usd</sup></h2>
                                    </div>
                                </div>
                                <div className="font-semibold">
                                        <h1 className="">$4.90</h1>
                                        <h3 className="text-red text-sm font-light">5.26%($0.02)</h3>
                                </div>
                            </div>
                        </div>
    )
};
export default Card;