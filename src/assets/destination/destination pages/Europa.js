import europa from "../destinationImage/image-europa.png";
function Europa() {
  return (
    <div className="text-stone-200 sm:flex sm:justify-between sm:w-5/6 sm:m-auto sm:mt-26">
      <img
        className="w-2/5 m-auto mt-6 sm:w-1/2 sm:mt-36"
        src={europa}
        alt="europa"
      />
      <article className="w-4/5 m-auto text-center sm:w-2/5 sm:text-justify  ">
        <h1 className="text-3xl my-6 sm:text-6xl sm:tracking-wide">EUROPA</h1>
        <p className="font-mono">
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </p>
        <hr className="my-6"></hr>
        <div className="sm:flex sm:justify-between sm:w-full">
          <div>
            <h6>Avg. distance </h6>
            <h2 className="text-xl font-bold">6 28 mil. km</h2>
          </div>
          <div>
            <h6>Est. travel time</h6>
            <h2 className="text-xl font-bold">3 years</h2>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Europa;
