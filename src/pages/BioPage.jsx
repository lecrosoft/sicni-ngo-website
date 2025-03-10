import { useLocation } from "react-router-dom";
import BioHero from "../components/Bio/BioHero";
import Footer from "../components/Footer/Footer";
import MainNav from "../components/Nav/MainNav";

const BioPage = () => {
  const location = useLocation();
  const { card } = location.state || {};
  if (!card) {
    return <p className="mt-10 text-center">No Profile selected.</p>;
  }
  return (
    <div>
      <MainNav />
      <BioHero card={card} />

      <Footer />
    </div>
  );
};

export default BioPage;
