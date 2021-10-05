import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8080/";
axios.defaults.timeout = 10000;
const token = localStorage.getItem("token")
const configuration = {Authorization: `Bearer ${token}`,
                        'Access-Control-Allow-Origin': 'http://localhost:3000'}

const request = (type, path, body) =>
  axios
    .request({ url: path, method: type, data: body , headers: configuration})
    .then(response => response.data)
    .catch(error => console.log("error: " + configuration["Autorhization"])); // equivalente: try {...} catch (e: Exception) { throw Exception(error) }

const api ={
   getAuth: (body) => request('post',`authenticate`,body),
   getDollar:() => request('get',`api/dollar/`),
   getCryptos:() => request('get',`api/cryptos/quotes`)
}    

export default api;