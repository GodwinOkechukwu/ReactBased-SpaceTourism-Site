import { NavLink } from "react-router-dom";
import TechnologyNavBtn from "./technologypages/TechnologyNavBtn";

function TechnologyNav() {
  return (
    <nav className="w-5/6 m-auto sm:w-1/4  ">
      <ul className="flex justify-between w-full md:flex-col md:gap-10 md:relative right-[160%] top-[250px] ">
        <li>
          <NavLink to="launchVehicle">
            <TechnologyNavBtn>1</TechnologyNavBtn>
          </NavLink>
        </li>

        <li>
          <NavLink to="spaceCapsule">
            <TechnologyNavBtn>2</TechnologyNavBtn>
          </NavLink>
        </li>

        <li>
          <NavLink to="spacePort">
            <TechnologyNavBtn>3</TechnologyNavBtn>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default TechnologyNav;
