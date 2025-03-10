// import researchMan from "../../assets/researchMan.jpg";
import AboutBg from "../../assets/africaBgWhite.jpeg";
// import hatBoy from "../../assets/hatboy.jpg";
// import { GiveButton } from "../Button/Button.style";
import {
  StyledH1,
  StyledH2Colored,
  StyledParagraph,
  StyledSpan,
} from "../GeneralStyles/Headings/Headings.styles";
import TabComponent from "../Utilities/Tabs";
const AboutForPage = () => {
  return (
    <div
      className="flex  bg:secondary  p-[2rem] md:p-[3rem] items-center justify-center w-[100%]"
      style={{
        backgroundImage: `url(${AboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="textDiv w-[100%] pt-[2.5rem] md:pt-[4rem] md:w-[100%]">
        <StyledH2Colored as="h4" className="mb-3 text-center">
          Welcome to Next Best Creative Hot Bed
        </StyledH2Colored>
        <StyledH1 className="text-center">
          Empowering Africa’s Future <StyledSpan>Leaders</StyledSpan>
        </StyledH1>
        <StyledParagraph className="text-center w-[100%]">
          Connecting top creative minds with the best opportunities. At Next
          Best Creative Hot Bed, we bring you verified, fresh job listings
          straight from recruiters and employers—designed to fuel your career
          growth and ignite your passion.
        </StyledParagraph>

        <TabComponent />
        {/* <div className="buttonDiv">
          <GiveButton>Learn More</GiveButton>
        </div> */}
      </div>
    </div>
  );
};

export default AboutForPage;
