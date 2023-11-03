import { Outlet } from "react-router-dom";
import Nav from "../home/utility/Nav";
import TechnologyNav from "./TechnologyNav";

function Technology() {
  return (
    <main className="h-screen w-full bg-technologyMobileImg bg-cover bg-left-top  bg-no-repeat  md:bg-technologyTabletImg lg:bg-technologyDesktopImg">
      <Nav />{" "}
      <section className="text-stone-200 text-center">
        <h1 className="font-extrabold mb-4 sm:absolute top-[130px] left-[15%] md:text-xl">
          <span className="text-stone-500 mx-3">03</span>SPACE LAUNCH 101
        </h1>
        <TechnologyNav />
        <Outlet />
      </section>
    </main>
  );
}

export default Technology;
