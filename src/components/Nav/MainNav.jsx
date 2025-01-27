import { NavLink } from "react-router-dom";
import { Data } from "./Data";
import { StyledMainNav } from "./MainNav.style";
import { GiveButton } from "../Button/Button.style";
import logo from "../../assets/sic_logo.jpg";

const MainNav = () => {
  return (
    <StyledMainNav>
      <div className="brand">
        <img src={logo} alt="" className="h-[80px] w-[80px] object-fill" />
      </div>
      <ul className="flex items-center gap-8">
        {Data.map((item) => (
          <li key={item.id}>
            <NavLink to={item.path}>{item.title}</NavLink>
          </li>
        ))}
        <GiveButton>Donate</GiveButton>
      </ul>
    </StyledMainNav>
  );
};

export default MainNav;
