import * as React from 'react';
import ReactModal from 'react-modal';
import {BsArrowLeft, BsArrowRight, BsX} from 'react-icons/bs';
import gsap from 'gsap';


import ModalSlide from './Slide';

// ! styles for modal;
const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#0B0D28bb',
      zIndex: 100
    },
    content: {
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
    }
};

// ! slide data 

const slideData = [
    {
        text: 'The 1 Lumina Token LUMIN is a store of great value and is a passport to a world of unparalleled experience for any icon listing their IFTs on the platform and their fans. For the holders of the IFTs, as it increases in value, it becomes very rewarding along with the utility derived from its use on the app as an exchange for their icon IFTs.'
    },
    {
        text: 'The 2 Lumina Token LUMIN is a store of great value and is a passport to a world of unparalleled experience for any icon listing their IFTs on the platform and their fans. For the holders of the IFTs, as it increases in value, it becomes very rewarding along with the utility derived from its use on the app as an exchange for their icon IFTs.'
    },
    {
        text: 'The 3 Lumina Token LUMIN is a store of great value and is a passport to a world of unparalleled experience for any icon listing their IFTs on the platform and their fans. For the holders of the IFTs, as it increases in value, it becomes very rewarding along with the utility derived from its use on the app as an exchange for their icon IFTs.'
    },
    {
        text: 'The 4 Lumina Token LUMIN is a store of great value and is a passport to a world of unparalleled experience for any icon listing their IFTs on the platform and their fans. For the holders of the IFTs, as it increases in value, it becomes very rewarding along with the utility derived from its use on the app as an exchange for their icon IFTs.'
    },
    {
        text: 'The 5 Lumina Token LUMIN is a store of great value and is a passport to a world of unparalleled experience for any icon listing their IFTs on the platform and their fans. For the holders of the IFTs, as it increases in value, it becomes very rewarding along with the utility derived from its use on the app as an exchange for their icon IFTs.'
    },
    {
        text: 'The 6 Lumina Token LUMIN is a store of great value and is a passport to a world of unparalleled experience for any icon listing their IFTs on the platform and their fans. For the holders of the IFTs, as it increases in value, it becomes very rewarding along with the utility derived from its use on the app as an exchange for their icon IFTs.'
    },
];

//* Component
const InitModal = () => {

    const [show, setShow] = React.useState(false);
    const [active, setActive] = React.useState(0);
    const modalRef = React.useRef([]);

    const prevHandler = () => {
        if(active <= 0) return setActive(slideData.length - 1);
        setActive(active - 1);
        
    };
    const nextHandler = () => {
        if(active >= slideData.length - 1){
            setActive(0);
            return;
        }
        setActive(active + 1);
    };


    React.useEffect(() => {
        modalRef.current.map(v => gsap.from(v, {duration: 0.5, x: 100, opacity: 0}));
    },[active]);
    React.useEffect(() => {
        const timeout = setTimeout(() => {setShow(true)}, 10000);
        return () => clearTimeout(timeout);
    },[]);
    console.log(active);
    return (
        <ReactModal  
            isOpen={show}
            ariaHideApp={true}
            overlayClassName="flex justify-center items-center" 
            className="text-white bg-secondary border-2 border-primary w-10/12 md:w-4/6 h-96 md:h-auto" 
            style={customStyles}>

            <div className="px-5 md:px-52 flex flex-col justify-between items-center">
                <div className="relative w-full py-5 text-xl md:text-40px font-bold">
                    <h1 className="text-center">Ticketing & More</h1>
                    <div onClick={() => setShow(!show)} className="absolute -right-28 top-4 cursor-pointer hover:text-red"><BsX className="text-3xl" /></div>
                </div>
                {
                    slideData.map((val, idx) => <ModalSlide key={idx} modalRef={ref => modalRef.current[idx] = ref} show={idx === active} text={val.text} />)
                }
                <div className="flex py-5">
                    <button onClick={prevHandler} className="bg-primary px-2 py-1 text-white text-opacity-50 flex items-center mr-5"><BsArrowLeft className="mr-2" />Previous</button>
                    <button onClick={nextHandler} className="bg-primary px-2 py-1 text-white text-opacity-50 flex items-center ml-5">More<BsArrowRight className="ml-2" /></button>
                    <div className="ml-5 text-white text-opacity-50 px-2 py-1 font-medium">{active + 1}/6</div>
                </div>
            </div>
        </ReactModal>
    )
}

export default InitModal;