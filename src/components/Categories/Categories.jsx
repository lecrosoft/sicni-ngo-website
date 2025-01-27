import { Link } from "react-router-dom";
import { StyledContainer } from "../GeneralStyles/GeneralStyles.style";
import {
  MoreDetailsLink,
  StyledH2,
  StyledParagraph,
} from "../GeneralStyles/Headings/Headings.styles";
import { Data } from "./Data";
import circleImg from "../../assets/round.png";

const Categories = () => {
  return (
    <div className="mt-14 md:mt-10">
      <StyledContainer className="flex flex-col items-center justify-center gap-4 mdw-full md:flex-row">
        {Data.map((item) => (
          <div
            key={item.id}
            className="box md:w-[24%] w-[100%]  p-6 rounded-[1.5rem] relative"
            style={{
              backgroundColor: item.bg,
            }}
          >
            <div
              className="absolute left-[50%] translate-x-[-50%] top-[-3rem] bg-white h-[6rem] w-[6rem] p-4 rounded-full flex items-center justify-center "
              style={{ boxShadow: "2px 2px 10px #ccc" }}
            >
              <img src={item.icon} alt="icon" />
            </div>
            <StyledParagraph>Donate For</StyledParagraph>

            <StyledH2>{item.title}</StyledH2>
            <Link>
              <MoreDetailsLink>More details..</MoreDetailsLink>
            </Link>
            <img
              src={circleImg}
              alt="circle"
              className="absolute right-[1rem] bottom-[1rem]"
            />
          </div>
        ))}
      </StyledContainer>
    </div>
  );
};

export default Categories;
