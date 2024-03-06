import React from "react";
import { RenderLabelValueProps } from "@/types";

const RenderLabelValue = (props: RenderLabelValueProps) => {
  return (
    <div className="flex w-full items-center justify-between border-b-[1px] border-b-[#8793a3] py-4 text-sm">
      <span className="text-[#8793a3]">{props.label}</span>
      <span className="flex flex-col items-end gap-1">
        <span className="font-medium text-black">{props.value}</span>
        {props.additionalInfo !== undefined && (
          <span className="text-sm">{props.additionalInfo}</span>
        )}
      </span>
    </div>
  );
};

export default RenderLabelValue;
