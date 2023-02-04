import React from "react";
import AllCards from "../Home/AllCards/AllCards";
import Navbar from "../NavBar/NavBar.jsx";
import Filters from "../Filters/Filters.jsx"
import "./home.css";
import { Footer } from "./Footer/Footer";


export const Home = () => {
  return (
    <div>
      <Navbar />
      <Filters />
      <AllCards />

      <Footer/>

    </div>
  );
};

export default Home;
