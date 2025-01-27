import heroImg from "../../assets/childrenGroup1.jpeg";
import heroBg from "../../assets/whiteImageBg.jpeg";
import sicgroupPics1 from "../../assets/sicgrouppics1.jpg";
import { GiveButton } from "../Button/Button.style";
import {
  StyledH1,
  StyledParagraph,
  StyledSpan,
} from "../GeneralStyles/Headings/Headings.styles";
const Hero = () => {
  return (
    <div
      className="flex  bg:secondary h-[100vh] justify-between p-[2rem] md:p-[3rem] flex-col md:flex-row gap-8 mb-[4rem]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="textDiv w-[100%] pt-[2.5rem] md:pt-[4rem] md:w-[50%]">
        <StyledH1>
          Share your love to <StyledSpan>make life better</StyledSpan>
        </StyledH1>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </StyledParagraph>

        <div className="buttonDiv">
          <GiveButton>Donate</GiveButton>
        </div>
      </div>

      <div className="imgDiv w-[100%] md:w-[50%] flex items-center">
        <img
          src={sicgroupPics1}
          alt="hero bg"
          className="h-[80%] w-[100%] md:w-[100%] rounded-[3rem] object-cover"
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
