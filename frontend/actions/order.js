import useSWR from 'swr';
import { fetcher } from '@/actions';

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