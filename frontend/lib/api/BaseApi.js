import axios from 'axios';

class BaseApi { 
  constructor(accessToken,subPath) {
    this.config = {}

    if (accessToken) {
      this.config.headers = {
        Authorization: `Bearer ${accessToken}`
      }
    }
  
    this.apiUrl = process.env.API_URL + subPath;
    this.baseUrl = process.env.API_URL ;
  }

  // getAll() {
  //   return axios.get(this.apiUrl)
  // }

  getOrder(path) {
    return axios.get(this.baseUrl+path)
  }
  
  getDetailOrder(id) {
    return axios.post(this.baseUrl+"/api/detailorder",{order_id:id})
  }
}

export default BaseApi;
