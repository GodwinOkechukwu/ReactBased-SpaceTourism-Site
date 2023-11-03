import { NavLink } from "react-router-dom";
import ButtonNav from "../home/utility/ButtonNav";

function DestinationNav() {
  return (
    <nav className="text-stone-200 w-full m-auto sm:w-1/2 sm:mt-[40px]  md:absolute top-[80px] md:right-[20%] md:mt-[10px] lg:absolute lg:right-[18%] lg:top-[160px]">
      <ul className="flex w-5/6 justify-between m-auto ">
        <li>
          <NavLink to="europa">
            <ButtonNav>EUROPA</ButtonNav>
          </NavLink>
        </li>
        <li>
          <NavLink to="titan">
            <ButtonNav>TITAN</ButtonNav>
          </NavLink>
        </li>
        <li>
          <NavLink to="moon">
            <ButtonNav>MOON</ButtonNav>
          </NavLink>
        </li>
        <li>
          <NavLink to="mars">
            <ButtonNav>MARS</ButtonNav>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default DestinationNav;
