import axios from "axios";

const url = 'https://preetstagram.herokuapp.com/posts/';

export const fetchPosts = () => axios.get(url);
export const createPost = (data) => axios.post(url, data);
export const updatePost = (id, data) => axios.put(`${url}${id}`, data);
export const deletePost = (id) => axios.delete(`${url+ id}`);
export const likePost = (id, data) => axios.put(`${url+ id }/like`, data);