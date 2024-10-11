import axios, { AxiosPromise } from "axios"
import { ProductData } from "../../interfaces/ProductData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (nameFilter?: string, minPrice?: number, maxPrice?: number, size?: string): AxiosPromise<ProductData[]> => {
    const params = new URLSearchParams();
    if (nameFilter) params.append('name', nameFilter);
    if (minPrice) params.append('minPrice', minPrice.toString());
    if (maxPrice) params.append('maxPrice', maxPrice.toString());
    if (size) params.append('size', size);

    const response = axios.get(`${API_URL}/products/search?${params.toString()}`);
    return response;
}


export function useProductData(nameFilter?: string, minPrice?: number, maxPrice?: number, size?: string){
    const query = useQuery({
        queryFn: () => fetchData(nameFilter, minPrice, maxPrice, size),
        queryKey: ['product-data', nameFilter, minPrice, maxPrice, size],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}


