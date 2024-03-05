import React from "react";
import Image from "next/image";
import { navLinks } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b-[1px] border-[#dedfe2] px-10 py-2 shadow-lg max-sm:hidden">
      <Link href="/">
        <Image
          src="/assets/images/logo.svg"
          height={50}
          width={100}
          alt="KoinX"
        />
      </Link>
      <ul className="flex items-center justify-end gap-8">
        {navLinks.map((navLink) => {
          return (
            <li key={navLink.value}>
              <Link href={navLink.route} className="font-semibold">
                {navLink.label}
              </Link>
            </li>
          );
        })}
        <button className="rounded-lg border-none bg-[#1b4aef] px-6 py-2 font-semibold text-white">
          Get Started
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
