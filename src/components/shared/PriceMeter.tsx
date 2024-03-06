import React from "react";
import { PriceMeterProps } from "@/types";


const PriceMeter = (props: PriceMeterProps) => {
  return (
    <div className="py-2">
      <span className="flex flex-col items-start justify-start gap-2">
        <span className="text-base">{props.low.label}</span>
        <span className="text-lg font-medium">{props.low.value}</span>
      </span>
      <div className="h-2 rounded bg-gradient-to-r from-red-500 to-green-500"></div>
      <span>
        <span className="text-base">{props.high.label}</span>
        <span className="text-lg font-medium">{props.high.value}</span>
      </span>
    </div>
  );
};

export default PriceMeter;
