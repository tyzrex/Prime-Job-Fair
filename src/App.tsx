import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/global/footer";
import Navbar from "./components/global/navbar";
// import Home from "./components/pages/home";
import CommingSoon from "./components/pages/comming-soon";

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
        <div className="w-screen overflow-hidden">
            <Navbar />
            <Routes>
                <Route path="/" element={<CommingSoon />} />
            </Routes>

            {/* <Footer /> */}
        </div>
    );
}

export default App;
