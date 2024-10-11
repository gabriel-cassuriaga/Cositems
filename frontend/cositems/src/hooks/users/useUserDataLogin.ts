import axios, { AxiosPromise } from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UserData } from "../../interfaces/UserData";

const API_URL = 'http://localhost:8080';

const login = async (email: string, password: string): AxiosPromise<UserData> => {
    const params = new URLSearchParams();

    if(email) params.append('email', email);
    if(password) params.append('password', password);
    const response = axios.get(`${API_URL}'/users/login?${params}`);
    return response;
}

export function useUserDataLogin(email: string, password: string) {
    const query = useQuery({
        queryFn: () => login(email, password),
        queryKey: ['user-data', email, password],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}
