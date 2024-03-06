import React from "react";
import { EstimateMeterProps } from "@/types";

const EstimateMeter = ({ label, value, color }: EstimateMeterProps) => {
  return (
    <div className="flex items-center justify-start gap-2 text-base text-[#8793a3]">
      <span>{label}</span>
      <div className="w-[20rem] rounded-lg">
        <div className={`rounded-lg bg-[${color}] w-[${value}%] h-2`}></div>
      </div>
      <span>{value}%</span>
    </div>
  );
};

export default EstimateMeter;
