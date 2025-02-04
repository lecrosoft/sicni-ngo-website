import About from "../components/About/About";
import Categories from "../components/Categories/Categories";
import Causes from "../components/Causes/Causes";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import MainNav from "../components/Nav/MainNav";
import OurTeam from "../components/ourTeam/ourTeam";

const Home = () => {
  return (
    <div className="">
      <MainNav />
      <Hero />
      <Categories />
      <About />
      <Causes />
      <Contact />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default Home;
