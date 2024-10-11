import { useState } from 'react';
import { useProductData } from '../../hooks/products/useProductData';
import { CreateProductModal } from './../../components/CreateProductModal/CreateProductModal';
import { UpdateProductModal } from '../../components/UpdateProductModal/UpdateProductModal';
import { useProductDataDelete } from '../../hooks/products/useProductDataDelete';
import './ProductsList.css';
import { ProductData } from '../../interfaces/ProductData';

export function ProductsList() {
    const { data: products, isLoading, error } = useProductData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productToUpdate, setProductToUpdate] = useState<ProductData | null>(null);

    const { mutate: deleteProduct } = useProductDataDelete();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setProductToUpdate(null);
    };

    const openUpdateModal = (product: ProductData) => {
        setProductToUpdate(product);
        setIsModalOpen(true);
    };

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro ao carregar produtos.</div>;
    }
    return (
        <div className="product-list-container--">
            <h1>Lista de Produtos</h1>
            <table className="product-list-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>R${product.price}</td>
                            <td>
                                <div className="product-actions">
                                    <button className="edit" onClick={() => openUpdateModal(product)}>Editar</button>
                                    <button className="delete" onClick={() => product.id && deleteProduct(product.id)}>Deletar</button>
                                    </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="floating-button" onClick={openModal}>+</button>
            {isModalOpen && !productToUpdate && <CreateProductModal closeModal={closeModal} />}
            {isModalOpen && productToUpdate && (
                <UpdateProductModal closeModal={closeModal} product={productToUpdate} />
            )}
        </div>
    );
}