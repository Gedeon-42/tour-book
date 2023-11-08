import axios from "axios";
const axiosClient = axios.create({
  baseURL: 'https://events-planner.onrender.com',
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
});

axiosClient.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('token')
  
    return error;
  }
  throw error;
})

export default axiosClient;