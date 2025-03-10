import Contact from "../components/Contact/Contact";
import ContactHero from "../components/Contact/ContactHero";
import ContactUs from "../components/Contact/ContactUs";
import Footer from "../components/Footer/Footer";
import MainNav from "../components/Nav/MainNav";

const ContactPage = () => {
  return (
    <div>
      <MainNav />
      <ContactHero />
      <ContactUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
