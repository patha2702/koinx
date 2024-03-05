"use client";
import React from "react";
// import { usePathname } from "next/navigation";

const PathIndicator = () => {
  const path = "/cryptocurrencies/bitcoin";
  const pathSegments = path.split("/");
  pathSegments.shift();

  return (
    <div className="flex space-x-1 py-4 text-base">
      {pathSegments.map((segment, index) => {
        return (
          <span key={index} className="flex items-center gap-1">
            <span
              className={`capitalize ${index === pathSegments.length - 1 ? "text-black" : "text-[#6a7e89]"}`}
            >
              {segment}
            </span>
            {index !== pathSegments.length - 1 && (
              <span className="flex text-[#354a56]">
                <span className="relative left-1">&gt;</span>
                <span>&gt;</span>
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default PathIndicator;
