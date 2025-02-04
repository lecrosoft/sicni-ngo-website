import surveyPicsImg from "../../assets/publicOpinion.jpeg";
// import surveyPicsImg from "../../assets/survey-pics.png";
// import heartImg from "../../assets/heart.png";
// import tapImg from "../../assets/tap.png";
import leaderShipImg from "../../assets/leaderShipPics.jpg";
import groupStudentImg from "../../assets/groupStudent.jpg";
import scholarshipImg from "../../assets/scholarship.jpg";
import megaphoneImg from "../../assets/megaphone.jpg";

export const Data = [
  {
    id: 1,
    title: "Leadership Training and Workshops",
    content:
      "Offering intensive training programs and workshops designed to equip potential leaders with essential skills in governance, ethics, and strategic thinking.",
    category: "Training",
    path: "/",
    bg: "#cae4f7",
    src: leaderShipImg,
    goal: 2000000,
    donated: 1800000,
  },
  {
    id: 2,
    title: "Mentorship Programs",
    content:
      "Connecting emerging leaders with experienced mentors who provide guidance, support, and insights into effective leadership.",
    category: "Mentorship",
    path: "/about",
    bg: "#fdf0dd",
    src: groupStudentImg,
    goal: 10000000,
    donated: 7000000,
  },
  {
    id: 3,
    title: "Scholarships and Fellowships",
    content:
      "Providing financial support and opportunities for advanced education and professional development in leadership-related fields.",
    category: "Scholarships",
    path: "/wu",
    bg: "#f0fbff",
    src: scholarshipImg,
    goal: 8000000,
    donated: 3500000,
  },
  {
    id: 4,
    title: "Public Opinion Surveys",
    content:
      "Conducting opinion polls and surveys to identify individuals perceived to possess leadership qualities across various African countries.",
    category: "Research",
    path: "/wu",
    bg: "#f0fbff",
    src: surveyPicsImg,
    goal: 8000000,
    donated: 3500000,
  },
  {
    id: 5,
    title: "Advocacy Campaigns",
    content:
      "Engaging in advocacy efforts to raise awareness about the importance of good leadership and to promote policies that support leadership development",
    category: "Campaigns",
    path: "/wu",
    bg: "#f0fbff",
    src: megaphoneImg,
    goal: 8000000,
    donated: 3500000,
  },
];
