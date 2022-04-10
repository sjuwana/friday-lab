import React from "react";
import { Route, Routes } from "react-router-dom";
import Breweries from "./components/Breweries";
import Brewery from "./components/Brewery";
import AboutUs from "./components/AboutUs";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import { breweryData } from "./services/constants";
import News from "./components/News";
// import BreweryCard from './components/BreweryCard';

const Container = (props) => {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/breweries"
          element={<Breweries breweries={breweryData} />}
        />
        <Route path="/brewery/:name" element={<Brewery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Container;
