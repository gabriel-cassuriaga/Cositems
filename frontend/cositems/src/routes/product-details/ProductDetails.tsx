import './ProductDetails.css';
import { useParams } from "react-router-dom";
import { useProductDataById } from "../../hooks/useProductDataById";
import { useState } from 'react';

import { ImageSlider } from '../../components/image-slider/ImageSlider';
import { ProductImage } from '../../components/product-image/ProductImage';
import { Counter } from '../../components/counter/Counter';
import { Dropdown } from '../../components/dropdown/Dropdown';

import sizeChart from '../../assets/images/size_chart.png'
import { useCartContext } from '../../context/CartContext';

export function ProductDetails() {

    const { id } = useParams<{ id: string }>();
    if (!id) { return <div>Product ID is missing</div> }

    const { data, isLoading, error } = useProductDataById(id);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const { dispatch } = useCartContext();

    const addToCart = () => {
        if (data) {
            dispatch({ type: 'ADD_PRODUCT', value: data });

        }
    };

    if (isLoading) return <div>Atualizando...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const handleNextImage = () => {
        if (data?.image) {
            setCurrentImageIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % data.image.length;
                scroll(newIndex)
                return newIndex;
            });
        }
    };

    const handlePreviousImage = () => {
        if (data?.image) {
            setCurrentImageIndex((prevIndex) => {
                const newIndex = prevIndex === 0 ? data.image.length - 1 : prevIndex - 1;
                scroll(newIndex)
                return newIndex;
            });
        }
    };

    const handleImageClick = (index: number) => {
        setCurrentImageIndex(index);
        scroll(index)
    };

    const scroll = (index: number) => {
        document.querySelectorAll('.image-slider img')[index].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }

    const currentImage = data?.image[currentImageIndex] || '';

    return (
        <div className="product-container">
            <div className="show-product">
                <ImageSlider
                    images={data?.image || []}
                    currentImageIndex={currentImageIndex}
                    handleImageClick={handleImageClick}
                />
                <ProductImage
                    currentImage={currentImage}
                    handlePreviousImage={handlePreviousImage}
                    handleNextImage={handleNextImage}
                />
            </div>

            <div className="product-details">
                <h1 className="product-name">{data?.name}</h1>
                <p className="product-price">R${data?.price}</p>
                <Dropdown />
                <Counter />
                <button className="add-cart-button" onClick={addToCart}>Adicionar ao Carrinho</button>
                <button className="buy-now-button">Comprar Agora</button>
                <p className="product-description">{data?.description}</p>
                <div className="size-chart-container">
                    <img className="size-chart" src={sizeChart} />
                </div>
            </div>

        </div>
    );
}
