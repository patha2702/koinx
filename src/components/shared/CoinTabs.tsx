"use client";
import React from "react";
import { dashboardTabOptions } from "@/constants";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const CoinTabs = () => {
  const path = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
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
              className={`cursor-pointer py-2 text-base ${tab.value === searchParams.get("tab") ? "border-b-[3px] border-b-[#0052fe] font-semibold text-[#0052fe]" : ""}`}
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
