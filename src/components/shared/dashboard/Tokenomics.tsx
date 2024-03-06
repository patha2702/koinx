import React from "react";
import Image from "next/image";

const Tokenomics = () => {
  return (
    <section className="mt-4 space-y-4 rounded-lg bg-white p-6 flex flex-col justify-start items-start gap-2">
      <h2 className="text-2xl font-semibold">Tokenomics</h2>
      <div className="flex flex-col justify-start items-start gap-3">
        <h3 className="text-xl font-semibold">Initial Distribution</h3>
        <div className="flex justify-start items-center gap-3">
          <div>
            <Image
              src="/assets/images/donut-chart.png"
              width={200}
              height={200}
              alt="chart"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-1">
            <div className="flex justify-start items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-blue-600"></span>
              <span>Crowdsale investors: 20%</span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-orange-400"></span>
              <span>Foundation: 20%</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-md tracking-tight leading-tight">
          Vestibulum auctor urna a justo volutpat dictum. Phasellus eget
          hendrerit risus. Phasellus eget magna vel enim mattis convallis. Ut ac
          nibh in felis viverra pellentesque. Integer nec enim vitae ipsum
          congue mattis. Vestibulum ut diam fringilla, euismod nisi a, tristique
          erat.  Vestibulum auctor urna a justo volutpat dictum. Phasellus eget
          hendrerit risus. Phasellus eget magna vel enim mattis convallis. Ut ac
          nibh in felis viverra pellentesque. Integer nec enim vitae ipsum
          congue mattis. Vestibulum ut diam fringilla, euismod nisi a, tristique
          erat. 
        </p>
      </div>
    </section>
  );
};

export default Tokenomics;
