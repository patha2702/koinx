import React from "react";
import Performance from "./Performance";
import Sentiments from "./sentiment/Sentiments";
import About from "./About";
import Tokenomics from "./Tokenomics";

const Overview = () => {
  return (
    <div>
      <Performance />
      <Sentiments />
      <About />
      <Tokenomics />
    </div>
  );
};

export default Overview;
