import { useCartContext } from "../../context/CartContext";

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
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.products.map(product => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};
