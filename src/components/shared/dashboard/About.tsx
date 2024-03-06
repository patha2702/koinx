"use client";
import React from "react";
import { usePathname } from "next/navigation";
import CalculateCard from "./CalculateCard";

const About = () => {
  const path = usePathname();
  const pathSegments = path.split("/");
  const label = pathSegments[pathSegments.length - 1];
  return (
    <section className="mt-4 space-y-4 rounded-lg bg-white p-6 flex flex-col justify-start items-start gap-2">
      <h2 className="text-2xl font-semibold">
        About <span className="capitalize">{label}</span>
      </h2>
      <div className="pb-4 border-b-[1px] border-b-[#8793a3]">
        <h3 className="text-xl font-semibold">What is {label}</h3>
        <p className="text-md tracking-tight leading-tight">
          Vestibulum auctor urna a justo volutpat dictum. Phasellus eget
          hendrerit risus. Phasellus eget magna vel enim mattis convallis. Ut ac
          nibh in felis viverra pellentesque. Integer nec enim vitae ipsum
          congue mattis. Vestibulum ut diam fringilla, euismod nisi a, tristique
          erat.{" "}
        </p>
      </div>
      <div className="pb-4 border-b-[1px] border-b-[#8793a3]">
        <h4 className="text-md font-semibold">
          Vestibulum auctor urna a justo volutpat
        </h4>
        <p className="text-md tracking-tight leading-tight py-2">
          Maecenas venenatis sapien et enim malesuada, ac elementum velit
          auctor. Ut sed nunc ut dolor sodales scelerisque. Vivamus rhoncus
          sollicitudin odio, sit amet cursus neque vestibulum eget. Vivamus quis
          erat non orci accumsan fermentum. Sed fringilla lobortis elit a
          fermentum. Maecenas vestibulum ipsum vel arcu vulputate tempus.{" "}
        </p>
        <p className="text-md tracking-tight leading-tight py-4">
          Maecenas venenatis sapien et enim malesuada, ac elementum velit
          auctor. Ut sed nunc ut dolor sodales scelerisque. Vivamus rhoncus
          sollicitudin odio, sit amet cursus neque vestibulum eget. Vivamus quis
          erat non orci accumsan fermentum. Sed fringilla lobortis elit a
          fermentum. Maecenas vestibulum ipsum vel arcu vulputate tempus.{" "}
        </p>
        <p className="text-md tracking-tight leading-tight py-2">
          Maecenas venenatis sapien et enim malesuada, ac elementum velit
          auctor. Ut sed nunc ut dolor sodales scelerisque. Vivamus rhoncus
          sollicitudin odio, sit amet cursus neque vestibulum eget. Vivamus quis
          erat non orci accumsan fermentum. Sed fringilla lobortis elit a
          fermentum. Maecenas vestibulum ipsum vel arcu vulputate tempus.{" "}
        </p>
      </div>
      <div className="w-full py-2 border-b-[1px] border-b-[#8793a3]">
        <span className="text-2xl font-semibold capitalize">
          Already holding <span>{label}?</span>
        </span>
        <div className="py-4 flex justify-start items-center gap-6">
          <div className="w-[45%]">
            <CalculateCard
              btnText="Check Now"
              imgPath="/assets/images/getting-started-illustration.webp"
              label="Calculate your Profits"
            />
          </div>
          <div className="w-[45%]">
            <CalculateCard
              btnText="Check Now"
              imgPath="/assets/images/getting-started-illustration.webp"
              label="Calculate your tax liability"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="text-md tracking-tight leading-tight py-2">
          Maecenas venenatis sapien et enim malesuada, ac elementum velit
          auctor. Ut sed nunc ut dolor sodales scelerisque. Vivamus rhoncus
          sollicitudin odio, sit amet cursus neque vestibulum eget. Vivamus quis
          erat non orci accumsan fermentum. Sed fringilla lobortis elit a
          fermentum. Maecenas vestibulum ipsum vel arcu vulputate tempus.{" "}
        </p>
      </div>
    </section>
  );
};

export default About;
