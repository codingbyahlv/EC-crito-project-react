import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "@pages/Contact/Contact";
import Home from "@pages/Home/Home";
import News from "@pages/News/News";
import NotFound from "@pages/NotFound/NotFound";
import FooterSection from "@sections/FooterSection/FooterSection";
import HeaderSection from "@sections/HeaderSection/HeaderSection";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
};

export default App;
