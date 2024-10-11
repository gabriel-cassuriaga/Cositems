import axios, { AxiosPromise } from "axios"
import { UserData } from "../../interfaces/UserData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (id: string): AxiosPromise<UserData> => {
    const response = axios.get(API_URL + '/users/' + id);
    return response;
}

export function useUserDataById(id: string){
    const query = useQuery({
        queryFn: () => fetchData(id),
        queryKey: ['user-data', id],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}

