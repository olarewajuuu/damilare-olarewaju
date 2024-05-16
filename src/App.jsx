import Profile from "./components/Home/Profile";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Card from "./components/Projects/Card";
import { Fade } from "react-reveal";
import "./App.css";

import { useEffect } from "react";
import { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="App">
        <PropagateLoader
          color={"#eb770b"}
          loading={loading}
          // cssOverride={override}
          size={20}
        />
        </div>
      ) : (
        <Fade top distance="20%">
          {/* <Loading /> */}
          <Navbar />
          <Profile />
          <About />
          <Card />
          <Contact />
          <Footer />
        </Fade>
      )}
    </>
  );
}

export default App;
