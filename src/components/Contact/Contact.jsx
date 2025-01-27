import {
  StyledH1,
  //   StyledH2,
  StyledParagraph,
} from "../GeneralStyles/Headings/Headings.styles";
import posterImg from "../../assets/poster.png";
import { StyledButton } from "../Button/Button.style";

const Contact = () => {
  return (
    <div className="relative  flex mt-[2rem]">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${posterImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="emptyDiv w-[50%] h-[100%] hidden md:block"></div>
      <div className="contactDiv relative md:w-[45%] h-[100%] w-[100%] bg-secondary  p-[3rem] z-10">
        <StyledParagraph
          className="text-amber-200"
          style={{ color: "#fde68a" }}
        >
          Get In Touch
        </StyledParagraph>
        <StyledH1 className="mb-6">Send Us message For donation!</StyledH1>
        <form action="" className="form">
          <div className="form-group mb-6">
            <input
              type="text"
              placeholder="Email"
              required
              className="h-[3.5rem] w-full p-3 rounded-[0.5rem] border-none outline-none"
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              placeholder="Your Phone"
              required
              className="h-[3.5rem] w-full p-3 rounded-[0.5rem]  border-none outline-none"
            />
          </div>
          <div className="form-group mb-6">
            <textarea
              type="text"
              placeholder="Your Message"
              className="h-[10rem] w-full p-3 rounded-[0.5rem]  border-none outline-none"
            />
          </div>
          <div className="form-group mb-6">
            <StyledButton
              className="w-[170px]"
              style={{ backgroundColor: "#fde68a", height: "3rem" }}
            >
              Send
            </StyledButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
