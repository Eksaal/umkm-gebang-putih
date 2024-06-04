import Axios from 'axios';

const instance = typeof window === 'undefined';

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_API
});

export default instance;