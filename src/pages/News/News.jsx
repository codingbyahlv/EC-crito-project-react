import NewsSection from "@sections/NewsSection/NewsSection";
import SignUpSection from "@sections/SignUpSection/SignUpSection";
import PageHeading from "@shared/PageHeading/PageHeading";

const News = () => {
  return (
    <main>
      <PageHeading heading="News & Articles" to="news" active="News" />
      <NewsSection heading="Our News & Articles" />
      <SignUpSection />
    </main>
  );
};

export default News;
