import React, { useState, useEffect } from "react";
import "../css/Grid.css";

const Grid = ({ id, className, children }) => {
  return (
    <div id={id} className={className}>
      {children}
    </div>
  );
};

export default Grid;
