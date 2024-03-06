import React from "react";
import Fundamentals from "./Fundamentals";
import NewsInsights from "./NewsInsights";
import Overview from "./Overview";
import Sentiments from "./sentiment/Sentiments";
import Team from "./Team";
import Tokenomics from "./Tokenomics";
import Technicals from "./Technicals";

const CoinDashboard = ({ tabOption }: { tabOption: string | null }) => {
  return (
    <div>
      {tabOption === null && <Overview />}
      {tabOption === "overview" && <Overview />}
      {tabOption === "fundamentals" && <Fundamentals />}
      {tabOption === "news-insights" && <NewsInsights />}
      {tabOption === "sentiments" && <Sentiments />}
      {tabOption === "team" && <Team />}
      {tabOption === "tokenomics" && <Tokenomics />}
      {tabOption === "technicals" && <Technicals />}
    </div>
  );
};

export default CoinDashboard;
