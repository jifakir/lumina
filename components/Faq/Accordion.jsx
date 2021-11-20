import * as React from 'react';


const Accordion = () => {
    const [active, setActive] = React.useState(false);
    return (
        <div className={`w-3/4 mx-auto text-white py-2 ${active ? 'bg-secondary px-12' : 'border-b border-gray-600'}`}>
            <div className="font-medium">
                <div className="flex justify-between items-center text-2xl">
                    <h1 className="text-white">What is Lumina?</h1>
                    <div className="text-2xl cursor-pointer select-none hover:text-blue" onClick={()=> setActive(!active)}>{active ? '-' : '+'}</div>
                </div>
                <p className={!active ? 'hidden' : ''}>
                    LUMINA (LUMI) is a digital currency for entertainment platforms, and adoptable across 
                    a wide range of industries. It aims to foster 
                    a blockchain ecosystem built for entertainment icons, including Music, TV and Sports;
                </p>
            </div>
        </div>
    )
}

export default Accordion;