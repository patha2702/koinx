"use client"
import React from "react";
import Widget from "@/components/Widget";
import GetStartedModal from "@/components/GetStartedModal";
import TrendingCoins from "@/components/TrendingCoins";
import CoinDashboard from "@/components/shared/dashboard/CoinDashboard";
import CoinTabs from "@/components/shared/CoinTabs";
import { useSearchParams } from "next/navigation";

interface cryptocurrenciesParam {
  params: {
    coinId: string;
  };
}

const Page = ({ params }: cryptocurrenciesParam) => {
  const searchParams = useSearchParams();
  return (
    <main className="space-y-4">
      <div className="flex w-full gap-4">
        <div className="w-[70%]">
          <Widget />
        </div>
        <div className="flex w-[30%] flex-col gap-4">
          <GetStartedModal />
          <TrendingCoins />
        </div>
      </div>
      <div className="flex w-full gap-4">
        <div className="w-[70%]">
          <CoinTabs />
          <CoinDashboard tabOption={searchParams.get("tab")} />
        </div>
      </div>
    </main>
  );
};

export default Page;
