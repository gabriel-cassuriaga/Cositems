import { useReducer } from "react";
import { ProductData } from "../interface/ProductData";

export type Cart = {
    products: ProductData[];
}

export type Action =
    | { type: 'ADD_PRODUCT'; value: ProductData }
    | { type: 'REMOVE_PRODUCT'; value: string }
    | { type: 'CLEAR_CART' };

function reducer(state: Cart, action: Action): Cart {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.value]
            };
        case 'REMOVE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.value)
            };
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
