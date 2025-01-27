import About from "../components/About/About";
import Categories from "../components/Categories/Categories";
import Causes from "../components/Causes/Causes";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import MainNav from "../components/Nav/MainNav";

const Home = () => {
  return (
    <div className="">
      <MainNav />
      <Hero />
      <Categories />
      <About />
      <Causes />
      <Contact />
    </div>
  );
};

export default Home;
