import researchMan from "../../assets/researchMan.jpg";
import AboutBg from "../../assets/africaBgWhite.jpeg";
import hatBoy from "../../assets/hatboy.jpg";
// import { GiveButton } from "../Button/Button.style";
import {
  StyledH1,
  StyledH2Colored,
  StyledParagraph,
  StyledSpan,
} from "../GeneralStyles/Headings/Headings.styles";
import TabComponent from "../Utilities/Tabs";
const About = () => {
  return (
    <div
      className="flex  bg:secondary justify-between p-[2rem] md:p-[3rem] flex-col md:flex-row gap-8"
      style={{
        backgroundImage: `url(${AboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="imgDiv w-[100%] md:w-[40%] flex items-center relative">
        <img
          src={researchMan}
          alt="About bg"
          className="h-[80%] w-[100%] md:w-[100%] rounded-[3rem] object-cover "
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        />
        <img
          src={hatBoy}
          alt="About bg"
          className="h-[50%] w-[50%] md:w-[60%] rounded-[3rem] object-cover absolute bottom-[-10%] right-[-4rem] border-[0.5rem] border-white"
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        />
      </div>

      <div className="textDiv w-[100%] pt-[2.5rem] md:pt-[4rem] md:w-[50%]">
        <StyledH2Colored as="h4" className="mb-3">
          Welcome to Social Impact Catalyst Network Initiative
        </StyledH2Colored>
        <StyledH1>
          A world where <StyledSpan>poverty</StyledSpan> will not exists
        </StyledH1>
        <StyledParagraph>
          African Leadership Initiative (ALI), was founded with the aim to
          identify, develop, and support the next generation of African leaders
          who have the potential to drive positive change and development in
          &nbsp;
          <span>
            <a href="" className="text-secondary">
              More...
            </a>
          </span>
        </StyledParagraph>

        <TabComponent />
        {/* <div className="buttonDiv">
          <GiveButton>Learn More</GiveButton>
        </div> */}
      </div>
    </div>
  );
};

export default About;
