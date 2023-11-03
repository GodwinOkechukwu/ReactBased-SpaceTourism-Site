import moon from "../destinationImage/image-moon.png";
function Moon() {
  return (
    <div className="text-stone-200 sm:flex sm:justify-between sm:w-5/6 sm:m-auto sm:mt-26">
      <img
        className="w-2/5 m-auto mt-6 sm:w-1/2 sm:mt-36"
        src={moon}
        alt="moon"
      />
      <article className="w-4/5 m-auto text-center sm:w-2/5 sm:text-justify  ">
        <h1 className="text-3xl my-6 sm:text-6xl sm:tracking-wide">MOON</h1>
        <p className="font-mono">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <hr className="my-6"></hr>
        <div className="sm:flex sm:justify-between sm:w-full">
          <div>
            <h6>Avg. distance </h6>
            <h2 className="text-xl font-bold">384,400 km </h2>
          </div>
          <div>
            <h6>Est. travel time</h6>
            <h2 className="text-xl font-bold">3 days</h2>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Moon;
