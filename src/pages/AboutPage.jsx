import AboutForPage from "../components/About/AboutForPage";
import AboutHero from "../components/About/AboutHero";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer/Footer";
import MainNav from "../components/Nav/MainNav";
// import OurTeam from "../components/ourTeam/ourTeam";

const AboutPage = () => {
  return (
    <div>
      <MainNav />
      <AboutHero />
      <AboutForPage />
      <CallToAction />
      {/* <OurTeam /> */}
      <Footer />
    </div>
  );
};

export default AboutPage;
