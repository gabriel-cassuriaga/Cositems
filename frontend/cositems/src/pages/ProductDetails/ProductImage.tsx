import './ProductImage.css';

import arrowLeftImg from '../../assets/icons/products/arrow_left.png';
import arrowRigthImg from '../../assets/icons/products/arrow_right.png';
import openInFullImg from '../../assets/icons/products/open_in_full.png';


import { useState } from 'react';

interface ProductImageProps {
    currentImage: string;
    handlePreviousImage: () => void;
    handleNextImage: () => void;
}

export function ProductImage({ currentImage, handlePreviousImage, handleNextImage }: ProductImageProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    
    return (
        <div className="product-img-section">
            <img className="arrow-left" src={arrowLeftImg} onClick={handlePreviousImage} />
            <div className="img-container">
                <img src={currentImage} className="main-image" />
            </div>
            <img className="arrow-right" src={arrowRigthImg} onClick={handleNextImage} />
            <img className="open-full-img" src={openInFullImg} onClick={handleOpenModal}/>

            {isModalOpen && (
                <div className="modal" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img className="modal-arrow-left" src={arrowLeftImg} onClick={handlePreviousImage} />
                        <img src={currentImage} className="modal-image" />
                        <img className="modal-arrow-right" src={arrowRigthImg} onClick={handleNextImage} />
                    </div>
                </div>
            )}

        </div>
    );
}
