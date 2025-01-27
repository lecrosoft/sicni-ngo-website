// import { Link } from "react-router-dom";
import { GiveButtonLong } from "../Button/Button.style";
import { StyledContainer } from "../GeneralStyles/GeneralStyles.style";
import {
  StyledH1,
  // MoreDetailsLink,
  // StyledH2,
  StyledH3,
  StyledParagraph,
  StyledSpan,
  // StyledParagraph,
} from "../GeneralStyles/Headings/Headings.styles";
import ProgressBar from "../ProgressBar";
import { Data } from "./Data";

const Causes = () => {
  return (
    <div className="mt-14 md:mt-[4rem] mb-[4rem]">
      <StyledH1 className="text-center">
        Support Our Mission and <StyledSpan>Make a Difference</StyledSpan>
      </StyledH1>
      <StyledContainer className="flex flex-col items-center justify-center gap-5 md:flex-row ">
        {Data.map((item) => (
          <div
            key={item.id}
            className="box md:w-[33.3%] w-[100%]  p-3 rounded-[1rem] relative group transition-all  ease-in"
            style={{
              backgroundColor: "#fff",
              boxShadow: "2px 7px 10px #ccc",
            }}
          >
            <div className="imgWrapper h-[200px] w-[100%] rounded-[2rem]  mb-6 relative">
              <img
                src={item.src}
                alt="Img"
                className="h-[100%] w-[100%] rounded-[1rem] object-fill group-hover:object-cover absolute "
              />
              <div className="coloredBox bg-secondary absolute bottom-[-1rem] right-4 p-2 text-white rounded-[0.4rem] group-hover:bg-amber-200">
                <h4>Education</h4>
              </div>
            </div>

            <StyledH3>{item.title}</StyledH3>
            <StyledParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, quam.
            </StyledParagraph>

            <div className="grayBox  bg-gray-200 rounded-[0.6rem] p-2 mb-4 flex flex-col gap-2">
              <div className="flex justify-between donation">
                <h5>Donation</h5>
                <h5>{(item.donated * 100) / item.goal}%</h5>
              </div>
              <ProgressBar percentage={(item.donated * 100) / item.goal} />
              <div className="flex justify-between donation">
                <h5>Donated:{item.donated.toLocaleString()}</h5>

                <h5>
                  Goal:{" "}
                  <span className="text-secondary">
                    {item.goal.toLocaleString()}
                  </span>
                </h5>
              </div>
            </div>

            <GiveButtonLong>Donate now</GiveButtonLong>
            {/* <Link>
              <MoreDetailsLink>More details..</MoreDetailsLink>
            </Link> */}
          </div>
        ))}
      </StyledContainer>
    </div>
  );
};

export default Causes;
