import axios from "axios";

const BASE_URL = "https://newsapi.org/v2";

export const fetchArticles = async (query, filters) => {
  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        q: query,
        language: "en",
        apiKey: process.env.REACT_APP_API_KEY,
        ...filters,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error(error);
  }
};

export const fetchTopHeadlines = async (filters) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country: "us",
        language: "en",
        apiKey: process.env.REACT_APP_API_KEY,
        ...filters,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error(error);
  }
};
