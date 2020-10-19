import axios from 'axios';
import { useState } from 'react';

export const fetcher = async (url) => {
    try {
        const fetchData = await axios.get(url)
        return fetchData.data
    } catch (err) {
        const error = new Error('An error occurred while fetching the data.')
        error.status = err.response.status
        error.message = err.response.data.message
        throw error
    }
};

export function useApiHandler(apiCall) {
    const [reqState, setReqState] = useState({
      error: null,
      feedback: null,
      loading: false,
    });
  
    const handler = async (...data) => {
      setReqState({error: null, feedback: null, loading: true});
      try {
        const json = await apiCall(...data);
        setReqState({error: null, feedback: json.data, loading: false});
        return json.data;
      } catch(e) {
        const message = (e.response && e.response.data) || 'Ooops, something went wrong...';
        setReqState({error: message, feedback: null, loading: false});
        return Promise.reject(message);
      }
    }
  
    return [handler, {...reqState}]
};