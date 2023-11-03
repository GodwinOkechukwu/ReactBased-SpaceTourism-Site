import { useState } from "react";
import { NavLink } from "react-router-dom";
import OverLay from "./OverLay";

function Nav() {
  const [open, setOpen] = useState(false);
  const [overlay, setOverLay] = useState(false);

  function handleToggleOpen() {
    setOpen(true);
    setOverLay(true);
  }

  function handleToggleClosed() {
    setOpen(false);
    setOverLay(false);
  }
  return (
    <nav>
      <div className="flex w-4/5 justify-between m-auto pt-6">
        <OverLay overlay={overlay} setOverLay={setOverLay} />
        <svg
          className="w-12 h-12"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
        >
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
        <svg
          className={`mt-4 sm:hidden ${
            open ? "hidden" : "block"
          } z-20 relative `}
          onClick={handleToggleOpen}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="21"
        >
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>

        <svg
          className={`absolute right-9 top-10 ${
            !open ? "hidden" : "block"
          } transition-all duration-500 z-20`}
          onClick={handleToggleClosed}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
        >
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
            <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
          </g>
        </svg>
      </div>
      <div
        className={`text-white bg-black w-60 transition-all duration-700 overflow-hidden  m-auto mt-11 ${
          !open ? "h-0" : "h-28 "
        }  sm:absolute right-0 top-0 sm:w-1/2 sm:mt-8 sm:h-11 sm:pt-2 sm:block`}
      >
        <ul className="w-4/5 m-auto sm:flex justify-between z-20 relative   ">
          <li className="  focus:bg-blue-900 hover:text-slate-500   ">
            <NavLink to="/">
              <span className="sm:hidden">00</span> Home
            </NavLink>
          </li>
          <li className=" focus:bg-blue-900 hover:text-slate-500  ">
            <NavLink to="/destination">
              <span className="sm:hidden">01</span> Destination
            </NavLink>
          </li>
          <li className=" focus:bg-blue-900 hover:text-slate-500  ">
            <NavLink to="/crew">
              <span className="sm:hidden">02</span> Crew
            </NavLink>
          </li>
          <li className=" focus:bg-blue-900 hover:text-slate-500  ">
            <NavLink to="/technology">
              <span className="sm:hidden">03</span> Technology
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
