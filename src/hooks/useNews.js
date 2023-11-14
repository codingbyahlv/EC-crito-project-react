import { useContext } from "react";
import { NewsContext } from "../contexts/NewsContext";

//custom hook: for making it impossible to use the context outside the provider
export const useNewsContext = () => {
  const newsContext = useContext(NewsContext);

  if (!newsContext) {
    throw new Error("Trying to use NewsContext outside of NewsContextProvider");
  }

  return newsContext;
};
