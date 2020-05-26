import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: pass,
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth;