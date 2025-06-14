import Hero from "./components/Hero";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <div className=" bg-[url(../public/assets/images/png/body-bg-stars.png)] h-full w-full min-h-screen grid">
        <Modal.Provider />
        <Hero />
      </div>
    </>
  );
}

export default App;
