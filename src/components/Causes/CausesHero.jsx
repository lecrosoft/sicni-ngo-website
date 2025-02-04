import { motion } from "framer-motion";
import posterImg from "../../assets/africaGirl.jpeg";
const CausesHero = () => {
  return (
    <section className="relative flex items-center justify-center w-full text-center h-[450px]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${posterImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 px-6 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold md:text-6xl">Causes</h1>
        {/* <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-300 md:text-xl">
          We are committed to excellence, innovation, and delivering
          high-quality solutions. Discover our journey and what drives us
          forward.
        </p> */}
      </motion.div>
    </section>
  );
};

export default CausesHero;
