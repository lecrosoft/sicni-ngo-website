import "swiper/css";
import "swiper/css/navigation";
import { FancyButton } from "../Button/Button.style";
import {
  StyledH1,
  StyledH3,
  StyledParagraph,
  StyledSpan,
} from "../GeneralStyles/Headings/Headings.styles";
import ProgressBar from "../ProgressBar";
import { Data } from "./Data";

const CausesPageContent = () => {
  return (
    <div className="mt-14 md:mt-[4rem] mb-[4rem]">
      <StyledH1 className="mb-[4rem] text-center p-[2rem]">
        Support Our Mission and <StyledSpan>Make a Difference</StyledSpan>
      </StyledH1>

      {/* Swiper Carousel */}
      <div className="flex flex-wrap gap-4 ">
        {Data.map((item) => (
          <div key={item.id} className="p-3 w-[100%] md:w-[32.3%]">
            <div
              className="box rounded-[1rem] shadow-lg transition-all ease-in group"
              style={{
                backgroundColor: "#fff",
                boxShadow: "2px 7px 10px #ccc",
                padding: "1rem",
              }}
            >
              {/* Image Wrapper with Hover Effect */}
              <div className="imgWrapper h-[200px] w-full rounded-[2rem] mb-6 relative ">
                <img
                  src={item.src}
                  alt="Img"
                  className="h-full w-full  rounded-[1rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="coloredBox bg-secondary absolute bottom-[-1rem] right-4 p-2 text-white rounded-[0.4rem] z-10">
                  <h4>{item.category}</h4>
                </div>
              </div>

              <StyledH3>{item.title}</StyledH3>
              <StyledParagraph>{item.content}</StyledParagraph>

              <div className="grayBox bg-gray-200 rounded-[0.6rem] p-2 mb-4 flex flex-col gap-2">
                <div className="flex justify-between donation">
                  <h5>Donation</h5>
                  <h5>{((item.donated * 100) / item.goal).toFixed(2)}%</h5>
                </div>
                <ProgressBar percentage={(item.donated * 100) / item.goal} />
                <div className="flex justify-between donation">
                  <h5>Donated: {item.donated.toLocaleString()}</h5>
                  <h5>
                    Goal:{" "}
                    <span className="text-secondary">
                      {item.goal.toLocaleString()}
                    </span>
                  </h5>
                </div>
              </div>

              <FancyButton>Donate now</FancyButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CausesPageContent;
