import React, { useState, useEffect } from "react";
import "../css/Title.css";

const Title = ({ className, id, title }) => {
  return (
    <div className={className} id={id}>
      {title}
    </div>
  );
};

export default Title;
