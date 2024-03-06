import React from "react";
import Performance from "./Performance";
import Sentiments from "./sentiment/Sentiments";
import About from "./About";
import Tokenomics from "./Tokenomics";
import Team from "./Team";

const Overview = () => {
  return (
    <div>
      <Performance />
      <Sentiments />
      <About />
      <Tokenomics />
      <Team />
    </div>
  );
};

export default Overview;
