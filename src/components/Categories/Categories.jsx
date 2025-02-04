import { Link } from "react-router-dom";
import { StyledContainer } from "../GeneralStyles/GeneralStyles.style";
import {
  MoreDetailsLink,
  StyledH2,
  StyledParagraph,
} from "../GeneralStyles/Headings/Headings.styles";
import { Data } from "./Data"; // Importing Data from the new file
import circleImg from "../../assets/round.png";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Categories = () => {
  return (
    <motion.div
      className="mt-14 md:mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <StyledContainer className="flex flex-col items-center justify-center gap-4 md:w-full md:flex-row">
        {Data.map((item, index) => (
          <motion.div
            key={item.id}
            className="box md:w-[24%] w-[100%] p-6 rounded-[1.5rem] relative"
            style={{
              backgroundColor: item.bg,
              boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            {/* Circle Image with FontAwesome Icon */}
            <motion.div
              className="absolute left-[50%] translate-x-[-50%] top-[-3rem] bg-white h-[6rem] w-[6rem] p-4 rounded-full flex flex-col items-center justify-center"
              style={{ boxShadow: "2px 2px 10px #ccc" }}
              whileHover={{ rotate: 360, transition: { duration: 1 } }}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="text-2xl text-gray-600"
              />
            </motion.div>

            <StyledParagraph>Donate For</StyledParagraph>
            <StyledH2>{item.title}</StyledH2>
            <Link>
              <MoreDetailsLink>More details..</MoreDetailsLink>
            </Link>

            {/* Floating Circle Image */}
            <motion.img
              src={circleImg}
              alt="circle"
              className="absolute right-[1rem] bottom-[1rem]"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        ))}
      </StyledContainer>
    </motion.div>
  );
};

export default Categories;
