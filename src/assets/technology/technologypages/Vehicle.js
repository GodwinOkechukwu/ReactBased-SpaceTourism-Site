import vehicle1 from "../technologyImage/image-launch-vehicle-landscape.jpg";
import vehicle2 from "../technologyImage/image-launch-vehicle-portrait.jpg";
function Vehicle() {
  return (
    <div className="pb-5 md:flex gap-[100px] md:flex-row-reverse  md:w-[80%] md:relative left-[25%]">
      <div className="my-5 md:w-[400px]">
        <img className="w-full md:hidden" src={vehicle1} alt="vehicle1" />
        <img
          className="hidden md:block md:h-[300px] md:w-[100%]"
          src={vehicle2}
          alt="vehicle2"
        />
      </div>
      <article className="w-5/6 m-auto md:w-[50%] md:text-justify">
        <h4 className="text-xs font-thin">The terminology... </h4>
        <h1 className="text-3xl my-4 md:text-4xl">Launch vehicle</h1>
        <p>
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth's surface to space, usually to Earth
          orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it's quite an awe-inspiring sight
          on the launch pad!
        </p>
      </article>
    </div>
  );
}

export default Vehicle;
