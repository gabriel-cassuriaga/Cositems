import './styles/ImageSlider.css';

interface ImageSliderProps {
    images: string[];
    currentImageIndex: number;
    handleImageClick: (index: number) => void;
}

export function ImageSlider({ images, currentImageIndex, handleImageClick }: ImageSliderProps) {
    return (
        <div className="slider-container">
            <div className="image-slider">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        onClick={() => handleImageClick(index)}
                        className={index === currentImageIndex ? 'active' : ''}
                    />
                ))}
            </div>
        </div>
    );
}
