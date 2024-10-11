import './ProductsList.css'

import { useProductData } from "../../hooks/products/useProductData";
import { ImageCard } from "../ImageCard/ImageCard";

interface ProductsListProps {
    nameFilter?: string,
    minPrice?: number,
    maxPrice?: number,
    size?: string
}

export function ProductsList({nameFilter, minPrice, maxPrice, size}: ProductsListProps) {

    const { data } = useProductData(nameFilter, minPrice, maxPrice, size);

    return (
        <>
            <div className="product-list-container">
                <div className="product-card-container">
                    <div className="card-grid">
                        {data?.map(productData => <ImageCard
                            key={productData.id}
                            id={productData.id}
                            image={productData.image}
                            name={productData.name}
                            price={productData.price} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}


