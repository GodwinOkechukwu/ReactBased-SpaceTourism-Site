import Nav from "../home/utility/Nav";
import anousheh from "./crewImage/image-anousheh-ansari.png";
import douglas from "./crewImage/image-douglas-hurley.png";
import mark from "./crewImage/image-mark-shuttleworth.png";
import victor from "./crewImage/image-victor-glover.png";
import React, { useState } from "react";
import Text from "./Text";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Crew() {
  const slides = [
    {
      img: anousheh,
      title: "Flight Engineer",
      fullName: "Anousheh Ansari",
      content:
        " Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
    {
      img: douglas,
      title: "Commander",
      fullName: "Douglas Hurley",
      content:
        "Douglas Gerald Hurley is an American engineer,former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      img: mark,
      title: "Mission Specialist",
      fullName: "Mark Shuttleworth",
      content:
        "  Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South    African to travel to space as a space tourist.",
    },
    {
      img: victor,
      title: "  Pilot",
      fullName: "Victor Glover",
      content:
        "  Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a  station systems flight engineer.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  function rightSlideHandle() {
    const isLastSlide = slides.length - 1;
    const newIndex = isLastSlide === currentIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  function leftSlideHandle() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  return (
    <>
      <main className="h-screen w-full bg-crewMobileImg bg-cover bg-left-top  bg-no-repeat md:bg-crewTabletImg lg:bg-crewDesktopImg">
        <Nav />
        <h1 className="font-extrabold text-center text-stone-200 text-xl sm:text-left sm:ml-[10%] sm:pt-[40px] sm:text-[30px]">
          <span className="text-stone-500 mx-2">02</span>Meet your Crew
        </h1>
        <div className="sm:flex sm:flex-row-reverse sm:mt-[250px]">
          <div className="max-w-[1400px] w-[100%] h-[400px] m-auto py-16 px-4 relative sm:relative sm:bottom-[100px]">
            <img
              className="w-[50%] m-auto h-full duration-700 sm:w-[70%] "
              src={slides[currentIndex].img}
              alt={slides.index}
            />
          </div>
          <Text
            title={slides[currentIndex].title}
            name={slides[currentIndex].fullName}
            content={slides[currentIndex].content}
          />
        </div>
        {/* left arrow */}
        <div>
          <BsChevronCompactLeft
            onClick={leftSlideHandle}
            size={50}
            className="text-white absolute top-[50%] translate-x-0 translate-y-[-50%] left-5  rounded-full p-2 cursor-pointer"
          />
        </div>
        {/* Right Arrow */}
        <div>
          <BsChevronCompactRight
            onClick={rightSlideHandle}
            size={50}
            className="text-white absolute top-[50%] translate-x-0 translate-y-[-50%] right-5  rounded-full p-2 cursor-pointer"
          />
        </div>
      </main>
    </>
  );
}

export default Crew;
