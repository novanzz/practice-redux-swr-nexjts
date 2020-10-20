import useSWR from 'swr';
import { fetcher, useApiHandler } from '@/actions';
import axios from 'axios'

export const useGetOrder = (id) => {
    const { data, error,...rest } = useSWR(`/api/v1/order/${id}`,{ 
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        refreshInterval: 0,
        errorRetryInterval : 60000,
        fetcher });
    const responData = data;
    const errorSWR = error;
    return { responData, errorSWR ,loadingSWR: !responData && !error,...rest};
}

const getSearch = (data) => axios.post(`/api/v1/order`, data) ;

export const useGetSearch = () => useApiHandler(getSearch);