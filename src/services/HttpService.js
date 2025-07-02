import axios from 'axios';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

class HttpService {

    async findAll() {
        const res = await axios.get('/posts');
        return res.data;
    }
    
}

export default new HttpService();