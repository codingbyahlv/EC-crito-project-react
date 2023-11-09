import FormSection from "@sections/FormSection/FormSection";
import MapSection from "@sections/MapSection/MapSection";
import PageHeading from "@shared/PageHeading/PageHeading";
import ContactWays from "@shared/ContactWays/ContactWays";

const Contact = () => {
  return (
    <main>
      <PageHeading heading="Let´s Connect" to="contact" active="Contact" />
      <ContactWays page="contact" />
      <FormSection />
      <MapSection />
    </main>
  );
};

export default Contact;
