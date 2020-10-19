import useSWR from 'swr';
import axios from 'axios';
import { useApiHandler,fetcher } from '@/actions';

const buyCredit = (data) => axios.post(`/api/v1/credit/buy`, data) ;

export const useBuyCredit = () => useApiHandler(buyCredit);

export const useGetCreditId = (id) => {
    const { data, error } = useSWR(`/api/v1/posts/${id}`, fetcher);
    return { data, error ,loading: !data && !error};
}

export const useGetCredit = () => {
    const { data, error,...rest } = useSWR(`/api/v1/credit`, fetcher);
    const responData = data;
    const errorSWR = error;
    return { responData, errorSWR ,loadingSWR: !responData && !error,...rest};
}