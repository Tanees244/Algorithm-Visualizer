import React from "react";
import HeroImage2 from "../components/HeroImage2";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Work from "../components/Work";

const Sorting = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2
        heading="Sorting"
        text="Here you have different number of 
      sorting algorithms"
      />
      <Work />
      <Footer />
    </div>
  );
};

export default Sorting;
