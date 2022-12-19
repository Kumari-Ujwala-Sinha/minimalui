import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/jagriti',
   
});

export const addCourse = (courseInfo) => api.post(`/add-courses`, courseInfo);
export const getCourse = () => api.get(`/courses`);