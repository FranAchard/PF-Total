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
<<<<<<< HEAD
      <Footer/>
=======
>>>>>>> 79f9467e8265f32d846dd008a3aff21f515cd655
    </div>
  );
};

export default Home;
