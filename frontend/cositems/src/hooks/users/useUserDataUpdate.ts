import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserData } from "../../interfaces/UserData";

const API_URL = 'http://localhost:8080';

const updateData = async (id: string, data: UserData): AxiosPromise<any> => {
    const response = axios.put(`${API_URL}/users/${id}`, data);
    return response;
}

export function useUserDataUpdate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: (variables: { id: string, data: UserData }) => updateData(variables.id, variables.data),
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['product-data'] });
        }
    });

    return mutate;
}
