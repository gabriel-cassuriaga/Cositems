import './ProductDetails.css'

import { useParams } from "react-router-dom"
import { useProductDataById } from "../../hooks/useProductDataById";

import arrowLeftImg from '../../assets/images/arrow_left.png';
import arrowRigthImg from '../../assets/images/arrow_right.png';
import openInFullImg from '../../assets/images/open_in_full.png'

export function ProductDetails() {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <div>Product ID is missing</div>;
    }

    const { data, isLoading, error } = useProductDataById(id);

    if (isLoading) return <div>Atualizando...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <div className="product-container">
                <div className="product-img-section">
                    <img className="arrow-left" src={arrowLeftImg} />

                    <div className="img-container">
                        <img src={data?.image[0]} />
                    </div>
                    <img className="arrow-right" src={arrowRigthImg} />
                    <img className="open-full-img" src={openInFullImg} />
                </div>


                <div className="product-details">
                    <h1 className="product-name">{data?.name}</h1>
                    <p className="product-price">R${data?.price}</p>
                    <p className="product-description">{data?.description}</p>
                </div>
            </div>
        </>
    )
}