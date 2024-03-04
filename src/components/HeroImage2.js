import "./HeroImage2.css";
import backimage from "../assets/image13.jpg";
import React from "react";

const HeroImage2 = ({ heading, text }) => {
  return (
    <div className="Hero">
      <div className="Mask">
        <img className="backimage" src={backimage} alt="backimage" />
      </div>
      <div className="content">
        <div className="heading">
          <h1>{heading}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage2;
