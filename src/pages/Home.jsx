// import About from "../components/About/About";
// import CallToAction from "../components/CallToAction";
import JobCategories from "../components/Categories/JobCategories";
// import Causes from "../components/Causes/Causes";
import Cta from "../components/Cta/Cta";

import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import JobList from "../components/JobList/JobList";
import MainNav from "../components/Nav/MainNav";

const Home = () => {
  return (
    <div className="">
      <MainNav />
      <Hero />
      <Cta />
      <JobCategories />
      {/* <About /> */}
      <JobList />

      {/* <CallToAction /> */}
      {/* <Causes /> */}

      <Footer />
    </div>
  );
};

export default Home;
