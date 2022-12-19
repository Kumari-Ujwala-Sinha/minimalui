import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/jagriti',
   
});

export const addCourse = (courseInfo) => api.post(`/add-courses`, courseInfo);
export const getCourse = () => api.get(`/courses`);
export const addShop = (productInfo) => api.post(`/add-products`, productInfo);
export const getShop = () => api.get(`/products`);
export const addTestimonial = (testimonialInfo) => api.post(`/add-testimonies`, testimonialInfo);
export const getTestimonial = () => api.get(`/testimonies`);
export const addHomebanner = (homebannerInfo) => api.post(`/add-homebanners`, homebannerInfo);
export const getHomebanner = () => api.get(`/homebanners`);