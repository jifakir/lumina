import Image from 'next/image';

const Card = ({data, index}) => {
    const {profile, name, val, sub, percent} = data;
    return (
            <div className={`w-44 h-48 text-black relative ${index===0 ? 'z-10  shadow-high bg-white' : 'z-0 bg-gray-200'}`}>
                            <div className="h-full p-4 flex flex-col justify-between">
                                <div className="flex">
                                    <div className="w-10 h-10 mr-4 rounded-full flex justify-center items-center overflow-hidden bg-lightpeach border-4 border-red">
                                        <div className="w-8 h-8 rounded-full transform -translate-x-1 -translate-y-1 overflow-hidden flex justify-center items-center">
                                            <Image width={100} height={100} layout="fill" src={profile} alt="Profile Pic" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <h1 className="text-sm font-bold text-black2">{name}</h1>
                                        <h2 className="text-10px text-black3">{sub}<sup>usd</sup></h2>
                                    </div>
                                </div>
                                <div className="">
                                        <h1 className="black2">${val}</h1>
                                        <h3 className="text-green1 text-xs font-light">{percent.inc}%(${percent.total})</h3>
                                </div>
                            </div>
                        </div>
    )
};
export default Card;