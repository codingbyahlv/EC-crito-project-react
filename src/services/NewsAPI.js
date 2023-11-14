import axios from "axios";

const BASE_URL = "https://win23-assignment.azurewebsites.net/api";

//generic get
const get = async (endpoint) => {
  const response = await axios.get(endpoint);
  return response.data;
};

//specific gets using the generic get
export const getAllNews = async () => {
  return get(`${BASE_URL}/articles`);
};

export const getNews = async (id) => {
  return get(`${BASE_URL}/articles/${id}`);
};

//generic post
const post = async (endpoint, data) => {
  const response = await axios.post(endpoint, data);
  return response;
};

//specific posts using tje generic post
export const postForm = async (formData) => {
  return post(`${BASE_URL}/contactform`, formData);
};
