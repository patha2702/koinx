import React from "react";
import { PriceMeterProps } from "@/types";

const PriceMeter = (props: PriceMeterProps) => {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="flex flex-col items-start justify-start gap-1">
        <span className="text-sm">{props.low.label}</span>
        <span className="text-base font-medium">{props.low.value}</span>
      </span>
      <div className="h-1 w-[70%] rounded bg-gradient-to-r from-red-500 to-green-500"></div>
      <span className="flex flex-col items-start justify-start gap-1 text-left">
        <span className="text-sm">{props.high.label}</span>
        <span className="text-base font-medium">{props.high.value}</span>
      </span>
    </div>
  );
};

export default PriceMeter;
