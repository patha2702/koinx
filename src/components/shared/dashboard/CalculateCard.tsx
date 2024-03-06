import React from "react";
import Image from "next/image";
import { CalculateCardProps } from "@/types";
import Button from "../Button";

const CalculateCard = ({ label, imgPath, btnText }: CalculateCardProps) => {
  return (
    <div className="w-full rounded-lg p-4 bg-orange-600 flex justify-start items-center gap-3">
      <div className="w-[40%]">
        <Image
          src={imgPath}
          width={100}
          height={100}
          alt="icon"
          className="rounded-lg"
        />
      </div>
      <div className="45% flex flex-col justify-start items-start gap-2">
        <span className="text-xl font-semibold text-white">{label}</span>
        <Button btnText="Check Now" targetRoute="/" />
      </div>
    </div>
  );
};

export default CalculateCard;
