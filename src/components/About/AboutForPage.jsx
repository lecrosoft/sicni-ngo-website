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
          Welcome to Social Impact Catalyst Network Initiative
        </StyledH2Colored>
        <StyledH1 className="text-center">
          Empowering Africa’s Future <StyledSpan>Leaders</StyledSpan>
        </StyledH1>
        <StyledParagraph className="text-center w-[100%]">
          Social Impact Catalyst Network Initiative (SICNI), was founded with
          the aim to identify, develop, and support the next generation of
          African leaders who have the potential to drive positive change and
          development in their communities and countries. SICNI recognizes the
          importance of strong and visionary leadership in addressing the
          complex challenges facing the African continent, and believes that
          investing in leadership development is crucial for sustainable
          progress. SICNI was established by a group of experienced and
          passionate individuals who have a deep commitment to Africa and a
          strong belief in the potential of its people. They saw a need for a
          platform that could nurture and empower emerging leaders, providing
          them with the skills, knowledge, and networks needed to make a
          meaningful impact in their respective fields. The organization works
          closely with a network of mentors, experts, and partners from various
          sectors to deliver high-quSICNIty leadership development programs,
          workshops, and initiatives. These programs are designed to equip
          participants with the tools and resources they need to lead
          effectively, inspire others, and drive positive change in their
          communities. SICNI is dedicated to fostering a culture of
          collaboration, innovation, and excellence among its participants, and
          strives to create a supportive and inclusive environment where leaders
          can learn, grow, and thrive. The organization is committed to
          promoting ethical leadership, integrity, and accountability, and
          believes that these values are essential for building a brighter
          future for Africa. Overall, SICNI is driven by a vision of a continent
          where strong, ethical, and visionary leaders are at the forefront of
          driving sustainable development and positive change. The organization
          is dedicated to empowering African leaders to reSICNIze their full
          potential and make a lasting impact on their communities and
          countries. The concept of a democracy that truly represents the
          people, rather than selecting an individual based on political party
          affiliation, is a vision that many individuals and organizations
          aspire to achieve. This type of democracy, often referred to as a
          direct democracy or participatory democracy, places a strong emphasis
          on citizen engagement, empowerment, and decision-making. In this model
          of democracy, the power lies with the people themselves, who are
          actively involved in shaping policies, making decisions, and holding
          their leaders accountable. Instead of relying on political parties to
          select candidates and make decisions on behalf of the people,
          individuals have a direct say in the governance process through
          mechanisms such as referendums, citizen assemblies, and participatory
          budgeting.
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
