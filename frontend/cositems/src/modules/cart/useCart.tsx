import { useReducer } from "react";

export type ProductCart = {
    id: string,
    name: string,
    image: string,
    price: number,
    quantity: number
}

export type Cart = {
    products: ProductCart[];
}

export type Action =
    | { type: 'ADD_PRODUCT'; value: ProductCart }
    | { type: 'REMOVE_PRODUCT'; value: string }
    | { type: 'UPDATE_QUANTITY'; value: { productId: string, quantity: number } }
    | { type: 'CLEAR_CART' };

function reducer(state: Cart, action: Action): Cart {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            const existingProduct = state.products.find(product => product.id === action.value.id);
            if (existingProduct) {
                return {
                    ...state,
                    products: state.products.map(product =>
                        product.id === action.value.id
                            ? { ...product, quantity: product.quantity + action.value.quantity }
                            : product
                    )
                };
            } else {
                return {
                    ...state,
                    products: [...state.products, action.value]
                };
            }
        }
        case 'REMOVE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.value)
            };

        case 'UPDATE_QUANTITY': {
            const { productId, quantity } = action.value;
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === productId
                        ? { ...product, quantity }
                        : product
                )
            };
        }

        case 'CLEAR_CART':
            return {
                ...state,
                products: []
            };
        
        default:
            return state;
    }
}

const initialState: Cart = {
    products: []
}

export const useCart = () => useReducer(reducer, initialState);
