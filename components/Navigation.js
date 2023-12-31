"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/shared/logo.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "animate.css";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const router = useRouter();
  return (
    <>
      <section className="animate__animated animate__flipInX relative pt-[29px] pd:mt-10">
        <nav className="flex justify-between w-[327px] md:w-[688px] lg:w-[1360px] mx-auto">
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
            show slideshow
          </button>

          {/* <button
            onClick={handleToggle}
            className="uppercase font-bold text-[12px] lg:leading-[2.5px] text-[#7D7D7D]"
          >
            {toggle ? (
              <Link href="/">stop slideshow</Link>
            ) : (
              <Link href="/slideshow">show slideshow</Link>
            )}
          </button> */}
        </nav>
        <div className="max-w-full md:w-[1360px] h-[1px] mx-auto my-[23px]  md:my-10 bg-[#E5E5E5]"></div>
      </section>
      {/* <div className="absolute w-[200px] h-[200px] top-0 right-0 bg-red-500"></div> */}
    </>
  );
};

export default Navigation;
