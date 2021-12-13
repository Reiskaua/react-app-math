import axios from 'axios';

const BASE_URL = "https://x-math.herokuapp.com/api";

async function basicFetch(endpoint) {
    const URL = BASE_URL + endpoint;
    let data  = null;
    
    try {
        const response = await axios.get(URL);
        data = response.data;
    } catch (error) {
        data = error.response.data;
    }
    return data;
}

const api = {
    getExpression: async (name) => {
        const res = await basicFetch(`/${name}`);
        return res;
    }
}

export default api;