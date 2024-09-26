import React from 'react';
import { useCart } from '../../reducers/useCart'
import { ProductData } from '../../interface/ProductData';

const CartItem: React.FC<{ product: ProductData, onRemove: (product: ProductData) => void }> = ({ product, onRemove }) => (
    <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Preço: R${product.price}</p>
        <button onClick={() => onRemove(product)}>Remover</button>
    </div>
);

const Cart: React.FC = () => {
    const [state, dispatch] = useCart();

    const handleRemove = (product: ProductData) => {
        dispatch({ type: 'REMOVE_PRODUCT', value: product });
    };

    return (
        <div>
            <h2>Carrinho de Compras</h2>
            {state.Products.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                state.Products.map(product => (
                    <CartItem key={product.id} product={product} onRemove={handleRemove} />
                ))
            )}
        </div>
    );
};

export default Cart;
