import React from "react";
import Image from "next/image";
import Button from "./shared/Button";

const GetStartedModal = () => {
  return (
    <section className="flex w-full flex-col items-center justify-evenly gap-4 rounded-lg bg-[#0052fe] px-8 py-10 text-center text-white">
      <h1 className="text-2xl font-bold ">Get Started with KoinX for Free</h1>
      <p className="text-sm">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <Image
        src="/assets/images/getting-started-illustration.webp"
        height={140}
        width={100}
        alt="Getting started illustration"
      />
      <Button btnText="Get Started for FREE" targetRoute="/" />
    </section>
  );
};

export default GetStartedModal;
