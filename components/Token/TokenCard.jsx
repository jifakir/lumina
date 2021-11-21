import * as React from 'react';
import Image from 'next/image';
import line from '../../assets/line.svg';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const TokenCard = ({data, index}) => {
    const {title, sub, bg} = data;

    const tileRef = React.useRef();

    //* Animating tile*********
    React.useEffect(()=> {
        gsap.timeline({duration: 2, scrollTrigger: {trigger: tileRef.current}})
        .from(tileRef.current, {x: !(index % 2) ? '-25%' : '25%', opacity: 0})
    })

    return (
        <div ref={tileRef} className={`p-11 flex flex-col justify-between ${bg}`}>
            <div className="">
                <h1 className="text-40px font-bold">
                    {title}
                </h1>
            </div>
            <div className="flex justify-between items-baseline">
                <h6 className="">{sub}</h6>
                <Image src={line} alt="Line" />
            </div>
        </div>
    )
}

export default TokenCard;