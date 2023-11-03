import { Outlet } from "react-router-dom";
import Nav from "../home/utility/Nav";
import DestinationNav from "./DestinationNav";

function Destination() {
  return (
    <main className="h-screen w-full bg-destinationMobileImg bg-cover bg-left-top  bg-no-repeat sm:h-full md:bg-destinationTabletImg lg:bg-destinationDesktopImg">
      <Nav />
      <section className="text-stone-200 text-center">
        <h1 className="font-extrabold mb-4 sm:absolute top-[130px] left-[15%] md:text-xl">
          <span className="text-stone-500">01</span> PICK YOUR DESTINATION
        </h1>
        <DestinationNav />
        <Outlet />
      </section>
    </main>
  );
}

export default Destination;
