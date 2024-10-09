import { useCartContext } from "../../modules/cart/cartContext";
import './Cart.css';

import deleteImg from '../../assets/icons/cart/delete.png';
import { Counter } from "../../components/Counter/Counter";

export function Cart() {
  const { cart, dispatch } = useCartContext();

  const removeFromCart = (productId: string | undefined) => {
    if (productId) {
      dispatch({ type: 'REMOVE_PRODUCT', value: productId });
    }
  };


  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className="cart">
      <h1 className="cart-title">Carrinho de Compras</h1>

      {cart.products.length === 0 ? (
        <p className="empty-cart-message">Seu carrinho está vazio!</p>
      ) : (
        <>
          <div className="cart-header">
            <p className="header-product">Produto</p>
            <p className="header-quantity">Quantidade</p>
            <p className="header-total">Total</p>
          </div>
          <div className="products-list">
            {cart.products.map(product => (
              <div className="product" key={product.id}>
                <div className="product-container-cart">
                  <img className="product-image" src={product.image[0]} alt={product.name} />
                </div>
                <div className="product-details">
                  <p className="product-name">{product.name}</p>
                  <p className="product-price">R${product.price}</p>
                </div>
                <div className="product-counter">
                  <Counter initialNumber={1}/>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(product.id)}>
                  <img src={deleteImg} alt="Remover produto" />
                </button>
              </div>
            ))}
          </div>
          <div className="clear-cart-container">
            <button className="clear-cart-btn" onClick={clearCart}>Limpar carrinho</button>
          </div>
        </>
      )}
    </div>
  );
};
