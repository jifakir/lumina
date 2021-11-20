import BottomSec from "./BottomSec";
import HowItCard from "./Card";



const HowItWorks = () => {

    return (
        <div className="pt-24 px-40 pb-36 bg-secondary container mx-auto">
            <h1 className="text-center text-white text-5xl mb-10">How It Works</h1>
            <div className="w-full grid grid-cols-2 gap-10">
                <HowItCard />
                <HowItCard />
            </div>
            <div className="">
                <BottomSec />
            </div>
        </div>
    )
};

export default HowItWorks;