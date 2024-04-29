import { useState } from "react";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  return (
    <main className="min-h-screen">
      <Navbar setIsModelOpen={setIsModelOpen} />
      <Products />
      <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} />
    </main>
  );
}

export default App;
