import axios from 'axios';
import useSWR from 'swr';
import { useApiHandler,fetcher } from '@/actions';

const getUser = (data) => axios.post(`/api/v1/user`, data);

export const useGetUser = () => useApiHandler(getUser)

export const useGetUser0 = () => {
    const { data, error, ...rest } = useSWR('/api/me', {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        refreshInterval: 0,
        errorRetryInterval : 1800000,
        fetcher });
    const responData = data;
    const errorSWR = error;
    return { responData, errorSWR ,loadingSWR: !responData && !error,...rest};
}