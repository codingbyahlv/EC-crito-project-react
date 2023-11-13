import axios from "axios";

const BASE_URL = "https://win23-assignment.azurewebsites.net/api";

const get = async (endpoint) => {
  const response = await axios.get(endpoint);
  return response.data;
};

export const getAllNews = async () => {
  return get(`${BASE_URL}/articles`);
};

export const getNews = async (id) => {
  return get(`${BASE_URL}/articles/${id}`);
};

const post = async (endpoint, data) => {
  const response = await axios.post(endpoint, data);
  return response.data;
};

export const postForm = async (formData) => {
  return post(`${BASE_URL}/contactform`, formData);
};
