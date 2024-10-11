
import { ProductsCardList } from '../../components/ProductsCardList/ProductsCardList';
// import { CreateModal } from "../../components/create-modal/CreateModal";


export function Home() {
    // const [isModalOpen, setIsModalOpen] = useState(false);


    // const handleOpenModal = () => {
    //     setIsModalOpen(prev => !prev)
    // }

    return (

        <>
           <ProductsCardList></ProductsCardList>
            {/* {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
            <button onClick={handleOpenModal}>Novo Produto</button> */}

        </>

    )
}

