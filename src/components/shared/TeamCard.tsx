import React from "react";
import Image from "next/image";
import { TeamMemberCardProps } from "@/types";


const TeamCard = ({userImg, name, designation, description}: TeamMemberCardProps) => {
  return (
    <div className="w-full py-4 px-6 rounded-lg flex justify-start items-center gap-4 bg-[#eff2f5]">
      <div className="w-max flex flex-col gap-1 justify-start items-center">
        <Image
          src={userImg}
          width={150}
          height={150}
          alt="profile"
          className="rounded-lg"
        />
        <span className="text-sm font-semibold">{name}</span>
        <span className="text-xs text-[#8793a3]">{designation}</span>
      </div>
      <div className="w-[80%] flex flex-col justify-start items-center">
        <p className="text-sm leading-normal">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
