import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '',
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Faça algo antes de enviar a solicitação
    return config;
  },
  (error) => {
    // Faça algo com o erro da solicitação
    return Promise.reject(error);
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    // Faça algo com a resposta
    return response;
  },
  (error) => {
    // Faça algo com o erro da resposta
    return Promise.reject(error);
  }
);

export default axiosInstance;