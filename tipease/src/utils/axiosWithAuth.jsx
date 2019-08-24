
import axios from 'axios'

const axiosWithAuth = () => {

  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'replace',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })
};

export default axiosWithAuth