import axios from "axios";

export const baseUrl = 'http://localhost:3000';
export const axiosClient = axios.create({ baseURL: baseUrl });
