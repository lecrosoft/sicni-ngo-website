import MainNav from "../components/Nav/MainNav";
import Footer from "../components/Footer/Footer";
import CategoriesDetailContent from "../components/Categories/CategoriesDetailContent";
import CategoryHero from "../components/Categories/CategoryHero";

const CategoryDetail = () => {
  return (
    <div>
      <MainNav />
      <CategoryHero />
      <CategoriesDetailContent />
      <Footer />
    </div>
  );
};

export default CategoryDetail;
