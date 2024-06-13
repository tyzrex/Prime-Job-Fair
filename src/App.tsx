import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/global/footer";
import Navbar from "./components/global/navbar";
import Home from "./components/pages/home";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
