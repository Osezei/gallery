"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/shared/logo.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const router = useRouter();
  return (
    <section>
      <nav className="flex justify-between w-[327px] md:w-[688px] lg:w-[1360px] mt-[29px] md:mt-10 mx-auto">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={169}
            height={48}
            className="hidden lg:block"
          />
          <Image
            src={Logo}
            alt="Logo"
            width={113}
            height={32}
            className=" lg:hidden object-contain"
          />
        </Link>

        <button
          type="button"
          onClick={() => router.push("/slideshow")}
          className="uppercase font-bold text-[12px] lg:leading-[2.5px] text-[#7D7D7D]"
        >
          start slideshow
        </button>
      </nav>
      <div className="max-w-full md:w-[1360px] h-[1px] mx-auto my-[23px]  md:my-10 bg-[#E5E5E5]"></div>
    </section>
  );
};

export default Navigation;
