import titan from "../destinationImage/image-titan.png";
function Titan() {
  return (
    <div className="text-stone-200 sm:flex sm:justify-between sm:w-5/6 sm:m-auto sm:mt-26">
      <img
        className="w-2/5 m-auto mt-6 sm:w-1/2 sm:mt-36"
        src={titan}
        alt="titan"
      />
      <article className="w-4/5 m-auto text-center sm:w-2/5 sm:text-justify  ">
        <h1 className="text-3xl my-6 sm:text-6xl sm:tracking-wide">TITAN</h1>
        <p className="font-mono">
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </p>
        <hr className="my-6"></hr>
        <div className="sm:flex sm:justify-between sm:w-full">
          <div>
            <h6>Avg. distance </h6>
            <h2 className="text-xl font-bold">1.6 bil. km</h2>
          </div>
          <div>
            <h6>Est. travel time</h6>
            <h2 className="text-xl font-bold">7 years</h2>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Titan;
