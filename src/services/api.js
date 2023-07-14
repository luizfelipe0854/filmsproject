import axios from "axios";

//base da url: https://api.themoviedb.org/3/
//url da api: /movie/now_playing?api_key=9158248058702e442b86003f222df955

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
