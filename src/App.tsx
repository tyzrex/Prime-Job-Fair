import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/global/footer";
import Navbar from "./components/global/navbar";
// import Home from "./components/pages/home";
import CommingSoon from "./components/pages/comming-soon";
import Home from "./components/pages/home";
import MaxWidthWrapper from "./components/wrapper/maxwidth-wrapper";

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
            {/* <Routes>
                <Route path="/" element={<Home />} />
            </Routes> */}
            <Home/>

            <Footer />
        </>
    );
}

export default App;
