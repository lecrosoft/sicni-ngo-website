import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  MdDesignServices,
  MdOutlineCode,
  MdCampaign,
  MdEdit,
  MdCameraAlt,
  MdMovie,
  MdAnimation,
  MdBrandingWatermark,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { StyledH2 } from "../GeneralStyles/Headings/Headings.styles";

// Category data with icons and job openings
const categories = [
  { name: "Design", icon: <MdDesignServices />, openings: 120 },
  { name: "Development", icon: <MdOutlineCode />, openings: 95 },
  { name: "Marketing", icon: <MdCampaign />, openings: 80 },
  { name: "Writing", icon: <MdEdit />, openings: 60 },
  { name: "Photography", icon: <MdCameraAlt />, openings: 45 },
  { name: "Video Editing", icon: <MdMovie />, openings: 50 },
  { name: "Animation", icon: <MdAnimation />, openings: 40 },
  { name: "Branding", icon: <MdBrandingWatermark />, openings: 35 },
];

// Light pastel background colors for each category
const bgColors = [
  "bg-[#FFEBE8]",
  "bg-[#E8F4FF]",
  "bg-[#E8FFE8]",
  "bg-[#FFF5E8]",
  "bg-[#F5E8FF]",
  "bg-[#E8FFF8]",
  "bg-[#FFF8E8]",
  "bg-[#E8F8FF]",
];

const JobCategories = () => {
  return (
    <div className="relative p-[2rem] mx-auto">
      <div className="flex justify-between mb-6 div-heading ">
        <div className="title-div">
          <StyledH2> Job Categories</StyledH2>
        </div>

        <div className="btn-div">
          <Link className="text-primary">View All</Link>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        modules={[FreeMode, Navigation]}
        className="relative pb-6"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex flex-col items-center justify-center h-36 p-6 rounded-xl shadow-lg transition-all ${
                bgColors[index % bgColors.length]
              }`}
            >
              <div className="text-4xl text-gray-700">{category.icon}</div>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                {category.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                {category.openings} openings
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="prev-btn absolute left-[2rem] top-1/2 -translate-y-1/2 p-3 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-900 transition z-10">
        <FaArrowLeft size={20} />
      </button>
      <button className="next-btn absolute right-[2rem] top-1/2 -translate-y-1/2 p-3 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-900 transition z-10">
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default JobCategories;
