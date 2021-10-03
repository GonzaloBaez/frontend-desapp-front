import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8080/api/";
axios.defaults.timeout = 20000;

const request = (type, path, body) =>
   axios
      .request({url:path, method:type, data:body})
      .then(response => response.data)
      .catch(error => Promise.reject(error.response.data))

const api ={
    registerUser: (body) => request('post','users/register',body)
}      

export default api