import './Home.css'

import { useProductData } from "../../hooks/useProductData";
import { ImageCard } from "../../components/image-card/ImageCard";
// import { CreateModal } from "../../components/create-modal/CreateModal";


export function Home() {

    const { data } = useProductData();
    // const [isModalOpen, setIsModalOpen] = useState(false);


    // const handleOpenModal = () => {
    //     setIsModalOpen(prev => !prev)
    // }

    return (

        <>
            <div className="teste">
            <div className="home-container">
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
            </div>
            
            {/* {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
            <button onClick={handleOpenModal}>Novo Produto</button> */}

        </>

    )
}

