import PageHeading from "@shared/PageHeading/PageHeading";
import NewsSection from "@sections/NewsSection/NewsSection";
import SignUpSection from "@sections/SignUpSection/SignUpSection";
const News = () => {
  return (
    <div>
      <PageHeading heading="News & Articles" />
      <NewsSection heading="Our News & Articles" />
      <SignUpSection />
    </div>
  );
};

export default News;
