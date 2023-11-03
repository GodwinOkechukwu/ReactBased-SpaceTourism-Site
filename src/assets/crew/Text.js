function Text({ title, name, content }) {
  return (
    <div className="w-[full] pb-7 duration-700 sm:w-[80%] sm:ml-[50px]">
      <article className="w-[80%] m-auto text-stone-200 text-center sm:text-justify">
        <h2 className="text-lg">{title}</h2>
        <h1 className="text-3xl">{name}</h1>
        <p>{content}</p>
      </article>
    </div>
  );
}

export default Text;
