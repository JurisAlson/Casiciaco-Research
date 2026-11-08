
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import FacebookContact from "./Components/UI/FacebookContact";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(hash.slice(1));

        if (target) {
          target.scrollIntoView({ behavior: "auto" });
        }
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter basename="/Casiciaco-Research">
      <ScrollManager />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />

      <FacebookContact />
    </BrowserRouter>
  );
}

export default App;
