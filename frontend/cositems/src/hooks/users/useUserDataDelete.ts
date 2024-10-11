import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const deleteData = async (id: string): AxiosPromise<any> => {
    const response = axios.delete(`${API_URL}/users/${id}`);
    return response;
}

export function useUserDataDelete() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: (id: string) => deleteData(id),
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-data'] });
        }
    });

    return mutate;
}
