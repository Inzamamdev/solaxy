import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <div className="relative h-screen overflow-y-scroll overflow-x-hidden">
        {/* Background GIF */}
        <img
          src="../../public/assets/images/gif/body-bg-trails.gif" // adjust the path if importing
          alt="background animation"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-0 pointer-events-none"
        />

        <img
          src="../../public/assets/images/svg-icons/satelite.svg"
          alt="glow effect"
          className="absolute top-24 left-0 object-cover z-10 pointer-events-none "
        />
        <img
          src="../../public/assets/images/gif/hand-with-eye.gif"
          alt="glow effect"
          className="absolute bottom-0 object-cover z-10 transform -translate-x-10 translate-y-5 pointer-events-none "
        />
        <img
          src="../../public/assets/images/svg-icons/meteoroid.svg"
          alt="glow effect"
          className="absolute right-0  object-cover z-10 transform translate-x-10  -translate-y-9 pointer-events-none "
        />
        <img
          src="../../public/assets/images/svg-icons/rocket.svg"
          alt="glow effect"
          className="absolute right-0 object-cover z-10 transform translate-x-16  translate-y-80 pointer-events-none "
        />

        {/* Content on top */}
        <div className="relative z-20">
          {/* Your app/navbar/content */}
          <Navbar />
          <Modal.Provider />
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
