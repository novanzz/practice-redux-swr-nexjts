import useSWR from 'swr';
import axios from 'axios'
import { useApiHandler,fetcher } from '@/actions';

const login = (data) => axios.post(`/api/v1/auth/login`, data) ;

export const useLogin = () => useApiHandler(login);

export const useGetUserLogin = () => {
    const { data, error,...rest } = useSWR(`/api/v1/auth`,fetcher);
    var responData = data;
    const errorSWR = error;
    return { responData, errorSWR ,loadingSWR: !responData && !error,...rest};
}