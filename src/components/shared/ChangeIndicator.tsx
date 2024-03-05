import React from "react";

interface ChangeIndicatorProps {
  value: number;
}
const ChangeIndicator = ({ value }: ChangeIndicatorProps) => {
  return (
    <div className="text-xs flex py-1 px-2  justify-center items-center gap-1 bg-[#ebf9f4] rounded-md">
      {value > 0 ? (
        <span
          className={`border-x-4 border-x-transparent border-b-8 border-b-green-600`}
        ></span>
      ) : (
        <span
          className={`border-x-4 border-x-transparent border-t-8 border-t-red-600`}
        ></span>
      )}

      <span className={`${(value > 0)?"text-green-600 font-medium": "text-red-600"}`}>{Math.abs(value)}%</span>
    </div>
  );
};

export default ChangeIndicator;
