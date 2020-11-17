import axios from "axios";

const newsApi = axios.create({ baseURL: process.env.REACT_APP_NEWS_API_URL });

export default newsApi;
