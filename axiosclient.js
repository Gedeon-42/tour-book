import axios from "axios";

const axiosClent = axios.create({
    baseURL:'https://events-planner.onrender.com/'
})
axiosClent.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`
    return config;
  })
  
  axiosClent.interceptors.response.use((response) => {
    return response
  }, (error) => {
    const {response} = error;
    if (response.status === 401) {
      localStorage.removeItem('ACCESS_TOKEN')
      // window.location.reload();
    } else if (response.status === 404) {
      //Show not found
    }
  
    throw error;
  })
export default axiosClent


