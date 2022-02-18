import axios from "axios";

const httpClient = axios.create();
httpClient.defaults.headers.common['x-rapidapi-key'] = `${process.env.REACT_APP_RAPID_API_KEY}`;

export default httpClient;