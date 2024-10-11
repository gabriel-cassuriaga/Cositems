import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserData } from "../../interfaces/UserData";

const API_URL = 'http://localhost:8080';

const postData = async (data: UserData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/users', data);
    return response;
}

export function useUserDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-data'] })
        }
    })

    return mutate;
}

