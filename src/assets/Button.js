import React, { useState } from "react";
import "./button.css";
import reloadImage from "./reload.png";
import swap from "./swap.png"

const Button = ({ type, name, onClick, disabled }) => {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(true);

    onClick();

    setTimeout(() => {
      setShowImage(false);
    }, 2000);
  };

  return (
    <button
      className={type === "SORT" ? "button sort" : "button newArray"}
      disabled={disabled}
      onClick={handleClick}
    >
      {showImage ? (
        <img className = "reloadimage" src={reloadImage} alt="Reload" />
      ) : (
        <span>{name}</span>
      )}
    </button>
  );
};

export default Button;
