import React from "react";
import Widget from "@/components/Widget";
import GetStartedModal from "@/components/GetStartedModal";
import TrendingCoins from "@/components/TrendingCoins";

interface cryptocurrenciesParam {
  params: {
    id: string;
  };
}

const Page = ({ params }: cryptocurrenciesParam) => {
  return (
    <main>
      <div className="flex w-full gap-1">
        <div className="w-[70%]">
          <Widget />
        </div>
        <div className="flex w-[30%] flex-col gap-1">
          <div>
            <GetStartedModal />
          </div>
          <div>
            <TrendingCoins />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
