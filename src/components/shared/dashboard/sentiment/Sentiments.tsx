import React from "react";
import EventCard from "./EventCard";
import EstimateMeter from "./EstimateMeter";

const Sentiments = () => {
  return (
    <section className="mt-4 space-y-4 rounded-lg bg-white p-6">
      <h2 className="text-2xl font-semibold">Sentiment</h2>
      <div className="flex flex-col items-start justify-start gap-4">
        <h3 className="text-xl font-semibold text-[#5d667b]">Key Events</h3>
        <div className="flex items-center justify-start gap-2 overflow-x-auto">
          <div className="w-[60%]">
            <EventCard />
          </div>
          <div className="w-[60%]">
            <EventCard />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-4">
        <h3 className="text-xl font-semibold text-[#5d667b]">Key Events</h3>
        <div className="flex items-center justify-start gap-6">
          <div className="flex size-[120px] items-center justify-center rounded-full bg-[#eff2f5]">
            <span className="text-3xl font-bold text-green-600">76%</span>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <EstimateMeter label="Buy" value={76} color="green-600" />
            <EstimateMeter label="Hold" value={8} color="gray-400" />
            <EstimateMeter label="Sell" value={16} color="red-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sentiments;
