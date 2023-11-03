import mars from "../destinationImage/image-mars.png";
function Mars() {
  return (
    <div className="text-stone-200 sm:flex sm:justify-between sm:w-5/6 sm:m-auto sm:mt-26">
      <img
        className="w-2/5 m-auto mt-6 sm:w-1/2 sm:mt-36"
        src={mars}
        alt="mars"
      />
      <article className="w-4/5 m-auto text-center sm:w-2/5 sm:text-justify  ">
        <h1 className="text-3xl my-6 sm:text-6xl sm:tracking-wide">MARS</h1>
        <p className="font-mono">
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </p>
        <hr className="my-6"></hr>
        <div className="sm:flex sm:justify-between sm:w-full">
          <div>
            <h6>Avg. distance </h6>
            <h2 className="text-xl font-bold">225 mil. km</h2>
          </div>
          <div>
            <h6>Est. travel time</h6>
            <h2 className="text-xl font-bold">9 months</h2>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Mars;
