import axios from "axios";

export const baseUrl = 'http://localhost:3001';
export const axiosClient = axios.create({ baseURL: baseUrl });