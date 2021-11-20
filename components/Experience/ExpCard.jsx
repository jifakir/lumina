import Image from 'next/image';
import { AiOutlinePlus } from 'react-icons/ai';
import stake from '../../assets/Mint.svg';
import line from '../../assets/line.svg';

const ExpCard = ({items}) => {

    const {icon, title, description, bg_color} = items;

    return (
        <div className={`${bg_color} px-7 py-10`}>
            <div className="flex justify-between">
                <Image src={icon} alt="Stake" />
                <Image src={line} alt="Line" />
            </div>
            <div className="flex justify-between pt-20 text-4xl text-white">
                <h1 className="">{title}</h1>
                <AiOutlinePlus />
            </div>
            <div className="text-white">
                <p className="pt-4">
                    {description}
                </p>
            </div>
        </div>
    )
};

export default ExpCard;