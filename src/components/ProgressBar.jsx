import PropTypes from "prop-types";
import { motion } from "framer-motion"; // For smooth animations

const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
      <motion.div
        className="bg-[#000] h-full"
        initial={{ width: "0%" }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default ProgressBar;
