import axios from "axios";

const newsApi = axios.create({ baseURL: `http://localhost:3000` });

export default newsApi;
