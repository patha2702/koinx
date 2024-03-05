import React from "react";
import { ChangeIndicatorProps } from "@/types";


const ChangeIndicator = ({ value }: ChangeIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-1  rounded-md bg-[#ebf9f4] px-2 py-1 text-xs">
      {value > 0 ? (
        <span
          className={`border-x-4 border-b-8 border-x-transparent border-b-green-600`}
        ></span>
      ) : (
        <span
          className={`border-x-4 border-t-8 border-x-transparent border-t-red-600`}
        ></span>
      )}

      <span
        className={`${value > 0 ? "font-medium text-green-600" : "text-red-600"}`}
      >
        {Math.abs(value)}%
      </span>
    </div>
  );
};

export default ChangeIndicator;
