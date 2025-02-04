import AboutForPage from "../components/About/AboutForPage";
import AboutHero from "../components/About/AboutHero";
import Footer from "../components/Footer/Footer";
import MainNav from "../components/Nav/MainNav";
import OurTeam from "../components/ourTeam/ourTeam";

const AboutPage = () => {
  return (
    <div>
      <MainNav />
      <AboutHero />
      <AboutForPage />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default AboutPage;
