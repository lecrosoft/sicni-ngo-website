import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  StyledH1,
  StyledSpan,
} from "../GeneralStyles/Headings/Headings.styles";
import { useNavigate } from "react-router-dom";

const TeamCard = ({ card }) => {
  const navigate = useNavigate();

  const handleClick = (card) => {
    navigate("/bio", { state: { card } });
  };

  return (
    <motion.div
      className="relative flex flex-col items-center group justify-center mb-[2rem] min-w-[300px]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative flex items-center justify-center w-80 h-80">
        <svg width="280" height="280" className="absolute">
          <circle
            cx="140"
            cy="140"
            r="105"
            fill="none"
            stroke="gray"
            strokeWidth="30"
            strokeDasharray="260 160"
            strokeLinecap="round"
            transform="rotate(-60 140 140)"
            className="transition-all duration-300 group-hover:stroke-secondary"
          />
        </svg>

        {/* <img
          src={card.image}
          alt={card.name}
          className="w-44 h-44 rounded-full object-cover border-[2px] border-white shadow-lg"
        /> */}
        <img
          src={card.image.startsWith("http") ? card.image : `${card.image}`}
          alt={card.name}
          className="w-44 h-44 rounded-full object-cover border-[2px] border-white shadow-lg"
        />
        {/* {card.socialLinks?.map((link, index) => {
          const angle = -60 + index * 50;
          const radius = 90;
          const x = Math.cos((angle * Math.PI) / 180) * radius + 140;
          const y = Math.sin((angle * Math.PI) / 180) * radius + 140;
          return (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute p-3 mb-3 text-white transition-all duration-300 bg-gray-800 rounded-full shadow-md opacity-0 group-hover:opacity-100"
              style={{
                top: `${y}px`,
                left: `${x}px`,
                transform: "translate(-50%, -50%)",
              }}
              whileHover={{ scale: 1.2 }}
            >
              {link.icon}
            </motion.a>
          );
        })} */}
      </div>

      <h3
        className="mt-4 text-lg font-semibold cursor-pointer"
        onClick={() => handleClick(card)}
      >
        {card.name}
      </h3>
      <p className="text-gray-500">{card.role}</p>
    </motion.div>
  );
};

TeamCard.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    socialLinks: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        icon: PropTypes.node.isRequired,
      })
    ),
  }).isRequired,
};

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [teamCards, setTeamCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
    };

    const getData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/profiles`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        if (result.success && Array.isArray(result.data)) {
          setTeamCards(result.data);
        } else {
          console.error("Invalid API response:", result);
        }
      } catch (error) {
        console.error("Error fetching profiles:", error.message);
      } finally {
        setLoading(false);
      }
    };

    handleResize();
    getData();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, teamCards.length - slidesPerView)
    );
  };

  return (
    <div className="flex gap-[3rem] flex-col items-center py-[3rem] mb-3">
      <StyledH1 className="p-[2rem]">
        Meet Our <StyledSpan>Dedicated</StyledSpan> Team Members
      </StyledH1>

      {loading ? (
        <p>Loading team members...</p>
      ) : teamCards.length === 0 ? (
        <p>No team members available.</p>
      ) : (
        <div className="relative flex items-center w-full overflow-hidden">
          <button
            onClick={goToPrevious}
            className="absolute z-10 p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full left-4 top-1/2"
            disabled={currentIndex === 0}
          >
            &#8592;
          </button>

          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * (100 / slidesPerView)}%` }}
            transition={{ type: "spring", stiffness: 120 }}
            style={{ display: "flex", gap: "1rem", width: "100%" }}
          >
            {teamCards.map((card, index) => (
              <div key={index} style={{ flex: `0 0 ${100 / slidesPerView}%` }}>
                <TeamCard card={card} />
              </div>
            ))}
          </motion.div>

          <button
            onClick={goToNext}
            className="absolute z-10 p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full right-4 top-1/2"
            disabled={currentIndex >= teamCards.length - slidesPerView}
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

export default TeamSection;
