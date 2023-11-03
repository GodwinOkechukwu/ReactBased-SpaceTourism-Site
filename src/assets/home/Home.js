import Nav from "./utility/Nav";

function Home() {
  return (
    <main className="text-stone-200 box-border font-mono h-screen w-full bg-mobileImg bg-cover bg-left-top  bg-no-repeat md:bg-tabletImg lg:bg-desktopImg">
      <Nav />
      <section className="lg:flex lg:mt-44">
        <article className="text-center w-4/5 m-auto sm:mt-20 lg:w-1/4 lg:text-justify">
          <h3 className="uppercase text-lg font-san sm:text-xl">
            So, you want to travel to
          </h3>
          <h1 className="uppercase text-5xl font-serif my-9 sm:text-7xl">
            {" "}
            Space
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>

        <div className="w-36 m-auto mt-11 bg-slate-100 rounded-full h-36 text-stone-950 text-center font-bold sm:w-44 sm:h-44 lg:w-60 lg:h-60 lg:mt-28">
          <h1 className="pt-16 text-2xl lg:pt-24 lg:text-4xl">Explore</h1>
        </div>
      </section>
    </main>
  );
}

export default Home;
