import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  StyledH2,
  StyledParagraph,
} from "../GeneralStyles/Headings/Headings.styles";
import { StyledContainer } from "../GeneralStyles/GeneralStyles.style";
import { useLocation } from "react-router-dom";
const CategoriesDetailContent = () => {
  const location = useLocation();
  const { item } = location.state || {};

  if (!item) {
    return <p className="mt-10 text-center">No category selected.</p>;
  }

  return (
    <StyledContainer
      className="flex flex-col items-center justify-center mt-10 p-6 mb-10 rounded-[1.5rem] shadow-lg "
      style={{ backgroundColor: item.bg }}
    >
      <div className="flex flex-col items-center mb-4">
        <FontAwesomeIcon
          icon={item.icon}
          className="mb-4 text-4xl text-gray-600"
        />
        <StyledH2>{item.title}</StyledH2>
      </div>

      <StyledParagraph className="text-lg text-gray-700">
        {item.description}
      </StyledParagraph>
    </StyledContainer>
  );
};

export default CategoriesDetailContent;
