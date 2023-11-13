import { useContext } from "react";
import { NewsContext } from "../contexts/NewsContext";

export const useNewsContext = () => {
  const newsContext = useContext(NewsContext);

  if (!newsContext) {
    throw new Error("Trying to use NewsContext outside of NewsContextProvider");
  }

  return newsContext;
};
