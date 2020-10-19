import axios from 'axios';
import BaseApi from './BaseApi';

class Cellular extends BaseApi {
   constructor(accessToken) {
      super(accessToken,"/api");
   }

   getPackage(id) {
      return axios.get(`${this.apiUrl}/package`)
   }
   
   getProvider() {
      return axios.get(`${this.apiUrl}/billing`,this.config)
   }

   buyProviderCharge(data) {
      return axios.post(`${this.apiUrl}/billing/payment`,data,this.config)
   }

   buyPackage(data) {
      console.log("data "+ data)
      return axios.post(`${this.apiUrl}/package/payment`,data,this.config)
   }

   getProviderToken() {
      return axios.get(`${this.apiUrl}/billing/test`,this.config)
   }
}

export default Cellular;