import gsap from 'gsap';
import * as React from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Accordion = () => {
    const [active, setActive] = React.useState(false);
    const accordRef = React.useRef();
    
    const openHanlder = () => {
        if(active){
            gsap.to(accordRef.current, {height: 30, duration: 1});
            setActive(false);
        }else{
            gsap.to(accordRef.current, {height: 'auto', duration: 1});
            setActive(true);
        }
    };
    return (
        <div className={`w-full md:w-3/4 mx-auto text-white py-2 mb-2 px-5 ${active ? 'bg-secondary' : 'border-b border-white border-opacity-10'}`}>
            <div ref={accordRef} className="font-medium overflow-hidden" style={{height: '30px'}}>
                <div className="flex justify-between items-center md:text-2xl">
                    <h1 className="text-white font-bold">What is Lumina?</h1>
                    <div className={`cursor-pointer select-none hover:text-blue ${active ? 'text-blue' : ''}`} onClick={openHanlder}>{active ?  <AiOutlineMinus /> : <AiOutlinePlus />}</div>
                </div>
                <p className="text-base mt-2 pb-10">
                    LUMINA (LUMI) is a digital currency for entertainment platforms, and adoptable across 
                    a wide range of industries. It aims to foster 
                    a blockchain ecosystem built for entertainment icons, including Music, TV and Sports;
                </p>
            </div>
        </div>
    )
}

export default Accordion;