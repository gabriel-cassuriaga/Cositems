import './Home.css'

import { useState } from "react";
import { useProductData } from "../../hooks/useProductData";
import { Card } from "../../components/card/card";
import { CreateModal } from "../../components/create-modal/create-modal";


export function Home() {

    const { data } = useProductData();
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
    }

    return (

        <>
            <div className="teste">
            <div className="home-container">
                <div className="product-card-container">
                    <div className="card-grid">
                        {data?.map(productData => <Card
                            id={productData.id}
                            image={productData.image}
                            name={productData.name}
                            price={productData.price} />
                        )}
                    </div>
                </div>
            </div>
            </div>
            
            {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
            <button onClick={handleOpenModal}>Novo Produto</button>

        </>

    )
}

