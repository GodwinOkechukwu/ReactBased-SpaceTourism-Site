import spacePort1 from "../technologyImage/image-spaceport-landscape.jpg";
import spacePort2 from "../technologyImage/image-spaceport-portrait.jpg";
function SpacePort() {
  return (
    <div className="pb-5 md:flex gap-[100px] md:flex-row-reverse  md:w-[80%] md:relative left-[25%]">
      <div className="my-5 md:w-[400px]">
        <img className="w-full md:hidden" src={spacePort1} alt="spaceport1" />
        <img
          className="hidden md:block md:h-[300px] md:w-[100%]"
          src={spacePort2}
          alt="spaceport2"
        />
      </div>
      <article className="w-5/6 m-auto md:w-[50%] md:text-justify">
        <h4 className="text-xs font-thin">The terminology... </h4>
        <h1 className="text-3xl my-4 md:text-4xl">Spaceport</h1>
        <p>
          A spaceport or cosmodrome is a site for launching (or receiving)
          spacecraft, by analogy to the seaport for ships or airport for
          aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
          situated to take advantage of the Earth’s rotation for launch.
        </p>
      </article>
    </div>
  );
}

export default SpacePort;
