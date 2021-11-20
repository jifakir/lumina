import Image from 'next/image';
import Card from './Card';

const RightSec = (props) => {

    return (
                <div className="w-1/2 flex justify-center items-center">
                    <div className="relative">
                        <div className="clip-path w-96 h-110 bg-lightblue"></div>
                            <div className="absolute top-5 left-2">
                                <Card />
                            </div>
                            <div className="absolute top-10 right-2">
                                <Card />
                            </div>
                            <div className="absolute bottom-0 right-2">
                                <Card />
                            </div>
                            <div className="absolute bottom-7 left-3">
                                <Card />
                            </div>
                    </div>
                </div>
    )
};

export default RightSec;