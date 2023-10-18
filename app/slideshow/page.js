"use client";
import React, { useState } from "react";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import { data } from "@/public/data";
import Image from "next/image";
import Link from "next/link";
import View from "@/public/assets/shared/icon-view-image.svg";
import NextButton from "public/assets/shared/icon-next-button.svg";
import PrevButton from "public/assets/shared/icon-back-button.svg";
import "animate.css";

const Page = ({}) => {
  const [current, setCurrent] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }
  const activePage = "slideshow";

  return (
    <Layout activePage={activePage}>
      {/* desktop screen */}
      <section className="hidden lg:block mt-[100px] ">
        {data.map((slide, index) => {
          const urlBigScreen = slide.images.hero.large;
          // const urlMobileScreen = slide.images.hero.small;
          const urlArtist = slide.artist.image;

          return (
            <div
              key={index}
              className="animate__animated animate__fadeIn transition delay-150 duration-300 ease-in-out"
            >
              {index === current && (
                <section className="">
                  {/* modal */}
                  {openModal && (
                    <div className="box z-30 bg-black/90 flex justify-center items-center">
                      <div>
                        <div className="w-[475px] flex justify-end">
                          <button
                            onClick={() => setOpenModal(false)}
                            className=" font-bold text-[14px] uppercase text-white leading-[3px] mb-[41px]"
                          >
                            close
                          </button>
                        </div>
                        <Image
                          src={urlBigScreen}
                          width={475}
                          height={560}
                          alt={slide.name}
                          className="overflow-hidden object-contain bg-black/90 "
                        />
                      </div>
                    </div>
                  )}
                  {/* end of modal */}
                  <article className="flex justify-center gap-[30px]">
                    <div className="flex">
                      <div className="relative">
                        <Image
                          src={urlBigScreen}
                          width={475}
                          height={560}
                          alt={slide.name}
                          className=""
                        />

                        <button
                          onClick={() => setOpenModal(true)}
                          className="absolute bottom-20 left-5 w-[152px] h-[40px] bg-black text-white text-[10px] font-bold leading-[2.14px]"
                        >
                          <span className="flex justify-center gap-x-[14px] items-center">
                            <Image
                              src={View}
                              width={12}
                              height={12}
                              alt="view"
                            />
                            <p> VIEW IMAGE</p>
                          </span>
                        </button>
                        <div className="w-[65px] h-[174px] z-10 bg-white absolute top-0 right-0"></div>
                      </div>
                      <div className="flex flex-col h-[624px] justify-between">
                        <div className="w-[445px] h-[174px] bg-white">
                          <p className="text-[56px] font-bold leading-[64px]">
                            {slide.name}
                          </p>
                          <p className="text-[#7D7D7D] text-[15px]">
                            {slide.artist.name}
                          </p>
                        </div>
                        <Image
                          src={urlArtist}
                          width={100}
                          height={100}
                          priority
                          alt={slide.artist.name}
                          className="ml-[30px]"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <p className=" text-[200px] text-right font-bold leading-[150px] text-[#F3F3F3]">
                        {slide.year}
                      </p>
                      <div className="absolute top-[115px] right-[125px]">
                        <p className="text-[#7D7D7D] lg:leading-[28px] text-[14px] font-semibold w-[350px] mb-[81px]">
                          {slide.description}
                        </p>
                        <Link
                          href={slide.source}
                          target="_blank"
                          className="text-[#7D7D7D] font-bold text-[9px] leading-[1.929px] mt-[350px] underline cursor-pointer"
                        >
                          GO TO SOURCE
                        </Link>
                      </div>
                    </div>
                  </article>
                  {/* modal */}
                  {/* {openModal && <Modal slide={slide} />} */}
                  {/* end of modal */}
                  <div className="h-[1px] w-[1360px] bg-[black] max-w-full mx-auto mt-[75px] mb-[24px]"></div>
                  <div className="flex justify-between w-[1360px] items-center mx-auto">
                    <div className="text-black ">
                      <p className=" font-bold text-[18px] mb-2">
                        {slide.name}
                      </p>
                      <p className="text-[13px] opacity-[0.7528]">
                        {slide.artist.name}
                      </p>
                    </div>
                    <div className="w-[91px] flex justify-between">
                      <button onClick={prevSlide}>
                        <Image
                          src={PrevButton}
                          alt="previousButton"
                          width={26}
                          height={24}
                        />
                      </button>
                      <button onClick={nextSlide}>
                        {" "}
                        <Image
                          src={NextButton}
                          alt="nextButton"
                          width={26}
                          height={24}
                        />
                      </button>
                    </div>
                  </div>
                </section>
              )}
            </div>
          );
        })}
      </section>
      {/* end of desktop screen */}

      {/* tablet screen */}
      <section className="hidden md:block lg:hidden">
        {data.map((slide, index) => {
          const urlTabletScreen = slide.images.hero.large;
          const urlArtistTablet = slide.artist.image;
          return (
            <div
              key={index}
              className="animate__animated animate__fadeIn transition delay-150 duration-300 ease-in-out"
            >
              {index === current && (
                <section className="rel">
                  {/* modal */}
                  {openModal && (
                    <div className="box bg-black/90 z-30 h-screen w-screen flex flex-col justify-center items-center">
                      <div className="w-[700px] text-right mb-[41px]">
                        <button
                          onClick={() => setOpenModal(false)}
                          className=" font-bold text-[14px] uppercase text-white leading-[3px]"
                        >
                          close
                        </button>
                      </div>
                      <Image
                        src={urlTabletScreen}
                        width={700}
                        height={712}
                        alt={slide.name}
                        className="overflow-hidden object-contain"
                      />
                    </div>
                  )}
                  {/* end of modal */}
                  <article className="flex flex-col gap-y-[64px] place-items-center">
                    <div className="flex">
                      <div className="relative">
                        <Image
                          src={urlTabletScreen}
                          width={475}
                          height={560}
                          alt={slide.name}
                          className=""
                        />
                        <div className="w-[445px] h-[238px] bg-white absolute top-0 left-[243px] pl-[65px]">
                          <p className="text-[56px] font-bold leading-[64px]">
                            {slide.name}
                          </p>
                          <p className="text-[#7D7D7D] text-[15px]">
                            {slide.artist.name}
                          </p>
                        </div>
                        <button
                          onClick={() => setOpenModal(true)}
                          className="absolute bottom-[16px] left-5 w-[152px] h-[40px] bg-black text-white text-[10px] font-bold leading-[2.14px]"
                        >
                          <span className="flex justify-center gap-x-[14px] items-center">
                            <Image
                              src={View}
                              width={12}
                              height={12}
                              alt="view"
                            />
                            <p> VIEW IMAGE</p>
                          </span>
                        </button>
                      </div>

                      <Image
                        src={urlArtistTablet}
                        width={128}
                        height={128}
                        priority
                        alt={slide.artist.name}
                        className="object-contain ml-[30px]"
                      />
                    </div>
                    <div className="relative h-[431px] w-[572px]">
                      <p className="text-[200px] font-bold leading-[150px] text-left text-[#F3F3F3]">
                        {slide.year}
                      </p>
                      <div className="absolute top-[75px] right-[115px]">
                        <p className="text-[#7D7D7D] leading-[28px] text-[14px] font-semibold w-[350px] ">
                          {slide.description}
                        </p>
                        <a
                          href={slide.source}
                          target="_blank"
                          className="text-[#7D7D7D] font-bold text-[9px] leading-[1.929px] mt-[40px] underline cursor-pointer"
                        >
                          GO TO SOURCE
                        </a>
                      </div>
                    </div>
                  </article>

                  <div className="h-[1px] w-[768px] bg-[black] max-w-full mx-auto mt-[53px] mb-[25px]"></div>
                  <div className="flex justify-between w-[768px] items-center mx-auto">
                    <div className="text-black ">
                      <p className=" font-bold text-[18px] mb-2">
                        {slide.name}
                      </p>
                      <p className="text-[13px] opacity-[0.7528]">
                        {slide.artist.name}
                      </p>
                    </div>
                    <div className="w-[91px] flex justify-between">
                      <button onClick={prevSlide}>
                        <Image
                          src={PrevButton}
                          alt="previousButton"
                          width={26}
                          height={24}
                        />
                      </button>
                      <button onClick={nextSlide}>
                        {" "}
                        <Image
                          src={NextButton}
                          alt="nextButton"
                          width={26}
                          height={24}
                        />
                      </button>
                    </div>
                  </div>
                </section>
              )}
            </div>
          );
        })}
      </section>
      {/* end of tablet screen */}
      {/* mobile screen */}
      <section className="md:hidden">
        {data.map((slide, index) => {
          const urlMobileScreen = slide.images.hero.small;
          const urlArtistMobile = slide.artist.image;
          return (
            <div
              key={index}
              className="animate__animated animate__fadeIn transition delay-150 duration-300 ease-in-out"
            >
              {index === current && (
                <section className="">
                  {/* modal */}
                  {openModal && (
                    <div className="small-screen-box z-30 bg-black/90 ">
                      <div className="w-[327px] mx-auto mt-[35%]">
                        <button
                          onClick={() => setOpenModal(false)}
                          className="font-bold text-[14px] uppercase text-white leading-[3px] mb-[32px] w-full text-right"
                        >
                          close
                        </button>

                        <Image
                          src={urlMobileScreen}
                          width={327}
                          height={390}
                          alt={slide.name}
                          className="object-cover overflow-hidden w-[327px] h-[390px]"
                        />
                      </div>
                    </div>
                  )}
                  {/* end of modal */}
                  <article className="flex flex-col place-items-center">
                    <div className="flex flex-col">
                      <div className="relative">
                        <Image
                          src={urlMobileScreen}
                          width={327}
                          height={280}
                          alt={slide.name}
                          className=""
                        />
                        <div className="w-[280px] h-[104px] bg-white absolute top-[230px] left-o pl-[24px] pt-[24px] pr-[24px]">
                          <p className="text-[24px] font-bold leading-[29px] max-h-[232px]">
                            {slide.name}
                          </p>
                          <p className="text-[#7D7D7D] text-[15px]">
                            {slide.artist.name}
                          </p>
                        </div>
                        <button
                          onClick={() => setOpenModal(true)}
                          className="absolute top-[16px] left-[16px] w-[152px] h-[40px] bg-black text-white text-[10px] font-bold leading-[2.14px]"
                        >
                          <span className="flex justify-center gap-x-[14px] items-center">
                            <Image
                              src={View}
                              width={12}
                              height={12}
                              alt="view"
                            />
                            <p> VIEW IMAGE</p>
                          </span>
                        </button>
                      </div>

                      <Image
                        src={urlArtistMobile}
                        width={64}
                        height={64}
                        priority
                        alt={slide.artist.name}
                        className="object-contain mt-[54px]"
                      />
                    </div>
                    <div className="relative  h-[404px] w-[327px]">
                      <p className="text-[100px] font-bold leading-[100px] text-right text-[#F3F3F3]">
                        {slide.year}
                      </p>
                      <div className="absolute top-[74px] right-0">
                        <p className="text-[#7D7D7D] leading-[28px] text-[14px] font-semibold w-[327px] ">
                          {slide.description}
                        </p>
                        <Link
                          href={slide.source}
                          target="_blank"
                          className="text-[#7D7D7D] font-bold text-[9px] leading-[1.929px] mt-[40px] underline cursor-pointer"
                        >
                          GO TO SOURCE
                        </Link>
                      </div>
                    </div>
                  </article>

                  <div className="h-[1px] w-[327px] bg-[black] max-w-full mx-auto mt-[123px] mb-[27px]"></div>
                  <div className="flex justify-between w-[327px] items-center mx-auto">
                    <div className="text-black ">
                      <p className=" font-bold text-[18px] mb-[9px]">
                        {slide.name}
                      </p>
                      <p className="text-[13px] opacity-[0.7528]">
                        {slide.artist.name}
                      </p>
                    </div>
                    <div className="w-[57px] flex justify-between">
                      <button onClick={prevSlide}>
                        <Image
                          src={PrevButton}
                          alt="previousButton"
                          width={26}
                          height={16}
                        />
                      </button>
                      <button onClick={nextSlide}>
                        {" "}
                        <Image
                          src={NextButton}
                          alt="nextButton"
                          width={26}
                          height={16}
                        />
                      </button>
                    </div>
                  </div>
                </section>
              )}
            </div>
          );
        })}
      </section>
      {/* end of mobile screen */}
    </Layout>
  );
};

export default Page;
