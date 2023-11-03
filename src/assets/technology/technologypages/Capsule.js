import Capsule1 from "../technologyImage/image-space-capsule-landscape.jpg";
import Capsule2 from "../technologyImage/image-space-capsule-portrait.jpg";
function Capsule() {
  return (
    <div className="pb-5 md:flex gap-[100px] md:flex-row-reverse  md:w-[80%] md:relative left-[25%]">
      <div className="my-5 md:w-[400px]">
        <img className="w-full md:hidden" src={Capsule1} alt="caplsule1" />
        <img
          className="hidden md:block md:h-[300px] md:w-[100%]"
          src={Capsule2}
          alt="capsule2"
        />
      </div>
      <article className="w-5/6 m-auto md:w-[50%] md:text-justify">
        <h4 className="text-xs font-thin">The terminology... </h4>
        <h1 className="text-3xl my-4 md:text-4xl">Space capsule</h1>
        <p>
          A space capsule is an often-crewed spacecraft that uses a blunt-body
          reentry capsule to reenter the Earth's atmosphere without wings. Our
          capsule is where you'll spend your time during the flight. It includes
          a space gym, cinema, and plenty of other activities to keep you
          entertained.
        </p>
      </article>
    </div>
  );
}

export default Capsule;
