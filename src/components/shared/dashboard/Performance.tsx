import React from "react";
import PriceMeter from "../PriceMeter";
import RenderLabelValueList from "./RenderLabelValueList";
import { fundamentalList1, fundamentalList2 } from "@/constants";

const Performance = () => {
  return (
    <section className="mt-4 space-y-4 rounded-lg bg-white p-6">
      <h2 className="text-2xl font-semibold">Performance</h2>
      <div>
        <PriceMeter
          low={{ label: "Today's Low", value: 46930.22 }}
          high={{ label: "Today's High", value: 49343.83 }}
        />
        <PriceMeter
          low={{ label: "52W Low", value: 46930.22 }}
          high={{ label: "52W High", value: 49343.83 }}
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#5d667b]">Fundamentals</h3>
        <div className="mt-4 flex justify-between max-sm:flex-col">
          <div className="w-[45%] max-sm:w-full">
            <RenderLabelValueList list={fundamentalList1} />
          </div>
          <div className="w-[45%] max-sm:w-full">
            <RenderLabelValueList list={fundamentalList2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
