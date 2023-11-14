import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "@pages/Contact/Contact";
import Home from "@pages/Home/Home";
import News from "@pages/News/News";
import NewsDetails from "@pages/NewsDetails/NewsDetails";
import NotFound from "@pages/NotFound/NotFound";
import FooterSection from "@sections/FooterSection/FooterSection";
import HeaderSection from "@sections/HeaderSection/HeaderSection";
import { NewsContextProvider } from "./contexts/NewsContext";
import AutoScroll from "@shared/Scrolls/AutoScroll";
import ScrollToTopButton from "@shared/Scrolls/ScrollToTopButton";

const App = () => {
  return (
    <BrowserRouter>
      <NewsContextProvider>
        <AutoScroll />
        <ScrollToTopButton />
        <HeaderSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FooterSection />
      </NewsContextProvider>
    </BrowserRouter>
  );
};

export default App;
