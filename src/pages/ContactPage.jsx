import Contact from "../components/Contact/Contact";
import ContactHero from "../components/Contact/ContactHero";
import Footer from "../components/Footer/Footer";
import MainNav from "../components/Nav/MainNav";

const ContactPage = () => {
  return (
    <div>
      <MainNav />
      <ContactHero />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
