import * as React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const RoadCard = ({index}) => {
    const wrapRef = React.useRef();
    const shiftRight = !(index % 2);

    // Animating .....
    React.useEffect(() => {

        gsap.from(wrapRef.current, {
            duration: 1,
            y: 50,
            scrollTrigger: {
                trigger: wrapRef.current
            }
        })
    },[]);
    return (
                 <div ref={wrapRef} className="w-full relative">
                    <div className={`w-full bg-secondary py-5 pl-6 pr-8 transform -translate-y-1/2 ${shiftRight ? 'translate-x-90' : '-translate-x-10'}`}>
                        <div className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-indigo-800 rounded-full bg-opacity-50 flex justify-center items-center ${shiftRight ? '-left-13' : '-right-13'}`}>
                            <div className="w-4 h-4 bg-indigo-500 rounded-full bg-opacity-80 flex justify-center items-center">
                                <div className="w-2 h-2 bg-white rounded-full">
                                </div>
                            </div>
                        </div>
                        <h2 className={`text-2xl text-white font-bold ${shiftRight ? 'text-left' : 'text-right'}`}>Presale</h2>
                        <h4 className={`text-blue4 text-sm font-bold mt-3 ${shiftRight ? 'text-left' : 'text-right'}`}>Q4, 2021</h4>
                        <div className="mt-8 text-sm">
                            <div className="flex justify-between">
                                <h4 className="text-blue">Private Sales</h4>
                                <p className="text-white">2000000 LUMIN</p>
                            </div>
                            <div className="flex justify-between mt-3">
                                <h4 className="text-blue">Date</h4>
                                <p className="text-white">TBA</p>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default RoadCard;