import * as React from 'react';
import Image from 'next/image';
import modalImage from '../../assets/modal-icon.png';

const ModalSlide = () => {
    return (
            <div className="text-center">
                <Image src={modalImage} alt="Logo" />
                <p className="py-5 text-white text-opacity-50 text-left">
                    The Lumina Token LUMIN is a store of great value 
                    and is a passport to a world of unparalleled experience 
                    for any icon listing their IFTs on the platform and their fans. 
                    For the holders of the IFTs, as it increases in value, it becomes 
                    very rewarding along with the utility derived from its use on the 
                    app as an exchange for their icon IFTs. 
                </p>
            </div>
    )
}

export default ModalSlide;