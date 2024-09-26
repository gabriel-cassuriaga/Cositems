import { useReducer } from "react";
import { ProductData } from "../interface/ProductData"

type Cart = {
    Products: ProductData[];
}

type Action = {
    type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT',
    value: ProductData
}

function reducer(state: Cart, action: Action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                Products: [...state.Products, action.value]
            };
        case 'REMOVE_PRODUCT':
            return {
                ...state,
                Products: state.Products.filter(product => product.id !== action.value.id)
            };
        default:
            return state;
    }

}

const initialState: Cart = {
    Products: []
}

export const useCart = () => useReducer(reducer, initialState)