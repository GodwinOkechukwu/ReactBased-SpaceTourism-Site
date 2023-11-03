function OverLay({ overlay, setOverLay }) {
  return (
    <div
      className={`w-full h-screen absolute left-0 ${
        overlay ? "" : "hidden"
      } top-0 bg-cover bg-center bg-black opacity-50 z-10 sm:hidden`}
    ></div>
  );
}

export default OverLay;
