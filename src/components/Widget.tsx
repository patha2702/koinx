import React from "react";
import Image from "next/image";
import ChangeIndicator from "./shared/ChangeIndicator";
import TradingViewWidget from "./shared/TradingViewWidget";

const Widget = () => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-4">
      <div className="flex justify-start gap-4">
        <div className="flex items-center justify-start gap-1">
          <Image
            src="/assets/images/bitcoin-icon.svg"
            width={30}
            height={30}
            alt="coin"
            className="rounded-full"
          />

          <span className="text-2xl font-semibold">Bitcoin</span>
          <span className="text-sm font-semibold text-[#5d667b]">BTC</span>
        </div>
        <div className="rounded-lg bg-[#768396] p-2 text-sm text-white">
          Rank #{1}
        </div>
      </div>
      <div className="flex flex-col items-start border-b border-[#dee1e6] pb-6">
        <div className="flex items-center justify-start gap-4">
          <span className="text-3xl font-semibold">&#36;{46953.04}</span>
          <div className="flex items-center justify-start gap-2">
            <ChangeIndicator value={2.51} />
            <span className="text-sm text-[#8793a3]">(24H)</span>
          </div>
        </div>
        <div className="flex items-center justify-start">
          <span>&#8377;</span>
          <span>{3942343}</span>
        </div>
      </div>
      <div>
        <TradingViewWidget />
      </div>
    </div>
  );
};

export default Widget;
