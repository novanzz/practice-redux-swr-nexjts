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

  login(data) {
    return axios.post(this.baseUrl+"/api/auth/login",data,this.config)
  }

  getUser(data){
    return axios.post(this.baseUrl+"/api/auth/user",data,this.config)
  }

  getOrder(path) {
    return axios.get(this.baseUrl+path,this.config)
  }
  
  getDetailOrder(id) {
    return axios.post(this.baseUrl+"/api/detailorder",{order_id:id},this.config)
  }

  getSearchOrder(data) {
    return axios.post(this.baseUrl+"/api/search",data,this.config)
  }

}

export default BaseApi;
