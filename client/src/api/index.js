import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost); 
export const signin = (loginInfo) => API.post('user/signin', loginInfo);
export const signup = (signUpData) => API.post('user/signup', signUpData);