import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";
import NoMatch from "./NoMatch";
import ContactUs from "./ContactUs/Email";

import { CircleLoader } from "react-spinners";
import About from "./about/About";
import MostPopular from "./MostPopularProjects/MostPopular";

const override: CSSProperties = {
  display: "block",
  margin: "14.5rem auto",
  borderColor: "red",
};

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <CircleLoader
          color={"blue"}
          loading={loading}
          cssOverride={override}
          size={200}
          className="loader"
        />
      ) : (
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<MostPopular />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
export default App;
