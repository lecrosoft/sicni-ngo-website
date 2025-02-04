import CausesHero from "../components/Causes/CausesHero";
import CausesPageContent from "../components/Causes/CausesPageContent";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import MainNav from "../components/Nav/MainNav";

const CausesPage = () => {
  return (
    <div>
      <MainNav />
      <CausesHero />
      <CausesPageContent />

      <Contact />
      <Footer />
    </div>
  );
};

export default CausesPage;
