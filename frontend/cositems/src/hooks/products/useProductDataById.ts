import axios, { AxiosPromise } from "axios"
import { ProductData } from "../../interfaces/ProductData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (id: string): AxiosPromise<ProductData> => {
    const response = axios.get(API_URL + '/products/' + id);
    return response;
}

export function useProductDataById(id: string){
    const query = useQuery({
        queryFn: () => fetchData(id),
        queryKey: ['product-data', id],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}

