"use client";
import React from "react";
import { dashboardTabOptions } from "@/constants";
import { useRouter, usePathname } from "next/navigation";

const CoinTabs = () => {
  const path = usePathname();
  const router = useRouter();
  return (
    <div>
      <ul className="flex items-center justify-start gap-6 border-b border-[#dee1e6]">
        {dashboardTabOptions.map((tab, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                router.push(`${path}/?tab=${tab.value}`);
              }}
              className="cursor-pointer py-2 text-base focus:border-b-2 focus:border-b-[#0052fe]"
            >
              {tab.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CoinTabs;
