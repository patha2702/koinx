import React from "react";
import Link from "next/link";
import Image from "next/image"
import { ButtonProps } from "@/types";


const Button = ({btnText, targetRoute}: ButtonProps) => {
  return (
    <Link
      href={targetRoute}
      className="flex items-center gap-2 rounded-md border-none bg-white px-4 py-2"
    >
      <span className="text-lg font-semibold text-black">
        {btnText}
      </span>
      <Image
        src="/assets/images/right-arrow.png"
        width={20}
        height={10}
        alt="right arrow"
      />
    </Link>
  );
};

export default Button;
