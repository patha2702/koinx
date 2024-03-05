import React from "react";
import { trendingCoins } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import ChangeIndicator from "./shared/ChangeIndicator";

const TrendingCoins = () => {
  return (
    <div className="rounded-lg bg-white px-6 py-4">
      <h3 className="text-xl font-semibold">Trending Coins (24h)</h3>
      <div className="flex flex-col items-start justify-start gap-3 mt-4">
        {trendingCoins.map((coin) => {
          return (
            <Link
              href={`/cryptocurrencies/${coin.value}`}
              key={coin.value}
              className="w-full flex items-center justify-between"
            >
              <div className="w-full flex items-center gap-1">
                <Image
                  src={coin.iconPath}
                  width={20}
                  height={20}
                  alt={coin.value}
                  className="rounded-full"
                />
                <span className="text-base font-medium">{coin.label} ({coin.symbol})</span>
              </div>
              <ChangeIndicator value={coin.priceChange.value} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingCoins;
