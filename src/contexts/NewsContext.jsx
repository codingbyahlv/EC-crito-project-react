import { createContext, useState, useEffect } from "react";
import { getAllNews as NewsAPI_getAllNews } from "@services/NewsAPI";

export const NewsContext = createContext();

export const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  //function: gets the news
  const getNews = async () => {
    try {
      const respData = await NewsAPI_getAllNews();
      setNews(respData);
    } catch (error) {
      alert("Oh shit! Something wrong!");
    }
  };

  return (
    <NewsContext.Provider value={{ news }}>{children}</NewsContext.Provider>
  );
};
