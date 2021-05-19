import React, { useState, useEffect } from "react";
import "../css/Button.css";

const Button = ({ className, text, id }) => {
  return (
      <button className={className} id={id}>
        {text}
      </button>
  );
};

export default Button;
