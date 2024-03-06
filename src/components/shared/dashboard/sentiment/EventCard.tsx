import React from "react";
import Image from "next/image";

const EventCard = () => {
  return (
    <div className="flex w-full justify-start gap-2 rounded-lg p-3 bg-[#eff2f5]">
      <div className="pt-1">
        <Image
          src="/assets/images/bitcoin-icon.svg"
          width={250}
          height={250}
          alt="icon"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-3">
        <h4 className="line-clamp-2 text-base font-semibold">
          Nulla facilisi. Sed non felis suscipit, ultricies nulla a, malesuada
          velit. Cras vel convallis purus. Nam euism
        </h4>
        <p className="line-clamp-5 text-sm text-[#8793a3]">
          Nulla facilisi. Sed non felis suscipit, ultricies nulla a, malesuada
          velit. Cras vel convallis purus. Nam euismNulla facilisi. Sed non
          felis suscipit, ultricies nulla a, malesuada velit. Cras vel convallis
          purus. Nam euismNulla facilisi. Sed non felis suscipit, ultricies
          nulla a, malesuada velit. Cras vel convallis purus. Nam euism
        </p>
      </div>
    </div>
  );
};

export default EventCard;
