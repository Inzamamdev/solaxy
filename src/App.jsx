import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
function App() {
  return (
    <>
      <Modal.Provider />
      <Hero />

      <Navbar />
    </>
  );
}

export default App;
