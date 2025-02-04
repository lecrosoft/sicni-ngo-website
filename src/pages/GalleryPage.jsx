import Footer from "../components/Footer/Footer";
// import Gallery from "../components/Gallery";
import GalleryHero from "../components/GalleryHero";
import MainNav from "../components/Nav/MainNav";

const GalleryPage = () => {
  return (
    <div>
      <MainNav />
      <GalleryHero />
      {/* <Gallery /> */}
      <Footer />
    </div>
  );
};

export default GalleryPage;
