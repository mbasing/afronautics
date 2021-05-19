import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Grid from "./components/Grid";
import Title from "./components/Title";
import "../src/App.css";

const App = () => {
  return (
    <div className="app">
      <Title
        className={"title"}
        id={"title"}
        title={"Reusable button components"}
      />

      <Button className={"button__primary"} text={"Hire A Team"} />
      <Button className={"button__secondary"} text={"Apply as a freelancer"} />
      <Button
        id={"button__secondary"}
        className={"button__secondary"}
        text={"Subscribe to our newsletter"}
      />

      <Title
        className={"title"}
        id={"title"}
        title={"Reusable card components"}
      />
      <Card id={"card"} className={"card"} />

      <Title
        className={"title"}
        id={"title"}
        title={"Reusable 3-column grid components"}
      />
      <Grid id={"grid"} className={"grid"}>
        <Card id={"card"} className={"card"} />
        <Card id={"card"} className={"card"} />
        <Card id={"card"} className={"card"} />
      </Grid>
    </div>
  );
};

export default App;
