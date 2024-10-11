import axios, { AxiosPromise } from "axios";
import { ProductData } from "../../interfaces/ProductData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const updateData = async (id: string, data: ProductData): AxiosPromise<any> => {
    const response = axios.put(`${API_URL}/products/${id}`, data);
    return response;
}

export function useProductDataUpdate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: (variables: { id: string, data: ProductData }) => updateData(variables.id, variables.data),
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['product-data'] });
        }
    });

    return mutate;
}
