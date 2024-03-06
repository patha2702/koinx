import React from "react";
import { RenderLabelValueProps } from "@/types";
import RenderLabelValue from "./RenderLabelValue";

const RenderLabelValueList = ({ list }: { list: RenderLabelValueProps[] }) => {
  return (
    <div>
      <ul className="flex flex-col items-start justify-start">
        {list.map((item, index) => {
          return (
            <RenderLabelValue
              key={index}
              label={item.label}
              value={item.value}
              additionalInfo={item.additionalInfo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default RenderLabelValueList;
