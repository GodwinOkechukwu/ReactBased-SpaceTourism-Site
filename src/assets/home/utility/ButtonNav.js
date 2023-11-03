function ButtonNav({ children }) {
  return (
    <button
      className={`w-14 focus:bg-stone-900 text-xs hover:bg-stone-600 rounded-full bg-slate-500 text-stone-200 py-2 text-center sm:w-18 sm:text-sm sm:relative left-44 `}
    >
      {children}
    </button>
  );
}

export default ButtonNav;
