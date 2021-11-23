import BottomSec from "./BottomSec";
import HowItCard from "./Card";


const cardData = [
    {
        title: 'ICONS',
        btnTitle: 'apply for ido'
    },
    {
        title: 'FANS',
        btnTitle: 'nominate an icon'
    },
];
const HowItWorks = () => {

    return (
        <div className="pt-12 md:pt-24 px-3 md:px-40 pb-12 md:pb-36 bg-secondary container mx-auto">
            <h1 className="text-center text-white text-40px md:text-56px font-bold mb-10">How It Works</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    cardData.map((v, idx) => <HowItCard key={idx} index={idx} data={v} />)
                }
            </div>
            <div className="">
                <BottomSec />
            </div>
        </div>
    )
};

export default HowItWorks;