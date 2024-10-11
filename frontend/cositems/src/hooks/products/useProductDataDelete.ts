import axios, { AxiosPromise } from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';


const deleteData = async (id: string): AxiosPromise<any> => {
    const response = axios.delete(`${API_URL}/products/${id}`);
    return response;
}

export function useProductDataDelete() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: (id: string) => deleteData(id),
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['product-data'] });
        }
    });

    return mutate;
}
