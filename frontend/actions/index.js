import axios from 'axios';
import { useState } from 'react';

export const fetcher = (url) =>
  axios.get(url).then( res => {
    if (res.status !== 200) {
      return Promise.reject(result);
    } else {
      return res.data;
    }
  });

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