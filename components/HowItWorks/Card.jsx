import gsap from "gsap";
import { useEffect, useRef } from "react";

const listData = [
    {
        title: 'Apply for IDO',
        description: 'Fill out the info form to join the our list of something and do something'
    },
    {
        title: 'Get Listed',
        description: 'It is your own version of NASDAQ. Get  traded, to your benefit and your fans’.'
    },
    {
        title: 'Activate',
        description: 'Reward your fans based on staking and blah blah blah and meet something'
    },

];

const Card = ({index, data}) => {

    const {title, btnTitle} = data;
    const headingRef = useRef();
    const cardRef = useRef();
    const listRef = useRef([]);

    // Animating the list items
    useEffect(() => {
        const tl = gsap.timeline({
            duration: 1, 
            scrollTrigger: {
                trigger: headingRef.current
            }})
            .from(cardRef.current, {x: !(index % 2) ? '-30%' : '30%', opacity: 0});
        listRef.current.map((v, idx) => tl.from(v, {y: 10, opacity: 0}));
    })
    return (
        <div ref={cardRef} className={`p-10 ${index === 0 ? 'bg-thinblue':'bg-white'}`}>
            <div className="flex justify-between items-center">
                <h1 ref={headingRef} className="uppercase text-40px text-gray-700 text-opacity-50 font-light">FOR <span className="font-bold text-black1">{title}</span></h1>
                <button className={`uppercase border px-5 py-2 text-sm font-bold ${index !== 0 ? ' text-black2 border-black2 hover:bg-blue3 bg-opacity-50' : ' text-blue3 border-blue3 hover:bg-white'}`}>{btnTitle}</button>
            </div>
            <ul className="">
                {
                    listData.map((v, idx) => (
                        <li key={idx} ref={ref => listRef.current[idx] = ref} className="flex items-center py-8 border-b">
                            <div className={`w-12 h-14 rounded-3xl text-white text-2xl px-5 mr-4 flex justify-center items-center ${ index !== 0 ? 'bg-black2' : 'bg-blue3'}`}>
                                <span className="font-semibold">0{idx+1}</span>
                            </div>
                            <div className="">
                                <h3 className="font-semibold text-2xl text-black4">{v.title}</h3>
                                <p className="text-black1">{v.description}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};


export default Card;