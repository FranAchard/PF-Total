import React from "react";
// import { NavBar } from "../navBar/NavBar";
import AllCards from "../Home/AllCards/AllCards";
import Navbar from "../NavBar/NavBar.jsx";
import Filters from "../Filters/Filters.jsx"
import "./home.css";


export const Home = () => {
  return (
    <div>
      <Navbar />
      <Filters />
      {/* <AllCards /> */}
    </div>
  );
};

export default Home;
