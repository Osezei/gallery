"use client";
import React from "react";
import { data } from "@/utils/data";
import Image from "next/image";

const Hero = () => {
  //console.log(data);
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-[23px] md:gap-10 w-[327px] md:w-[688px] lg:w-[1360px] mx-auto">
      {data.map((item, index) => {
        //console.log(item);
        const url = item.images.hero.large;
        const urlSmallScreen = item.images.hero.small;
        return (
          <div key={index} className="relative">
            <Image
              //src={`/${item.images.hero.large}`}
              src={`/${url}`}
              // src={url}
              width={310}
              height={250}
              alt={item.name}
              priority
              className="overflow-hidden w-[310px] h-[250px] object-cover hidden md:block"
            />
            <Image
              src={`/${urlSmallScreen}`}
              width={327}
              height={250}
              alt={item.name}
              priority
              className="overflow-hidden w-[310px] h-[250px] object-cover md:hidden"
            />

            <div className="absolute bottom-[33px] left-[32px]">
              <p className="text-2xl font-bold text-white w-[246px]">
                {item.name}
              </p>
              <p className="text-[13px] font-normal opacity-[0.7528279423713684] text-white">
                {item.artist.name}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Hero;
