import useSWR from 'swr';
import axios from 'axios';
import { useApiHandler,fetcher } from '@/actions';

const buyPackage = (data) => axios.post(`/api/v1/package/buy`, data) ;

export const useBuyPackage = () => useApiHandler(buyPackage);

// export const useGetPackage = () => {
//     const { data, error,...rest } = useSWR(`/api/v1/package`, fetcher);
//     const responData = data;
//     const errorSWR = error;
//     return { responData, errorSWR ,loadingSWR: !responData && !error,...rest};
// }