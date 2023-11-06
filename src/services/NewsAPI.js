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
