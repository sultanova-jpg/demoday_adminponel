import axios from "axios";

const instance = axios.create({
  baseURL: 'https://6888b3d0adf0e59551bb0a41.mockapi.io',
  headers: {'Content-Type': "application/json"}
});


export default instance;
