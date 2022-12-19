import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/jagriti',
   
});

export const addCourse = (courseInfo) => api.post(`/add-courses`, courseInfo);
export const getCourse = () => api.get(`/courses`);
export const addShop = (productInfo) => api.post(`/add-products`, productInfo);
export const getShop = () => api.get(`/products`);