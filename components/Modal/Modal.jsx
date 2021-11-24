import * as React from 'react';
import ReactModal from 'react-modal';
import {BsArrowLeft, BsArrowRight, BsX} from 'react-icons/bs';

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

//* Component
const InitModal = () => {

    const [show, setShow] = React.useState(false);
    const modalRef = React.useRef();

    React.useEffect(() => {
        const timeout = setTimeout(() => {setShow(true)}, 10000);
        return () => clearTimeout(timeout);
    },[]);
    return (
        <ReactModal 
            ref={modalRef} 
            isOpen={show} 
            overlayClassName="flex justify-center items-center" 
            className="text-white bg-secondary border-2 border-primary w-10/12 md:max-h-96" 
            style={customStyles}>

            <div className="w-full h-full px-5 md:px-28 flex flex-col justify-between items-center">
                <div className="relative w-full py-2 text-xl md:text-40px font-bold">
                    <h1 className="text-center">Ticketing & More</h1>
                    <div onClick={() => setShow(!show)} className="absolute -right-28 top-4 cursor-pointer hover:text-red"><BsX /></div>
                </div>
                <ModalSlide />
                <div className="flex py-5">
                    <button className="bg-primary px-2 py-1 text-white text-opacity-50 flex items-center mr-5"><BsArrowLeft className="mr-2" />Previous</button>
                    <button className="bg-primary px-2 py-1 text-white text-opacity-50 flex items-center ml-5">More<BsArrowRight className="ml-2" /></button>
                    <div className="ml-5 text-white text-opacity-50 px-2 py-1 font-medium">2/6</div>
                </div>
            </div>
        </ReactModal>
    )
}

export default InitModal;