import React from "react";
import Image from "next/image";

const Modal = ({ slide, setOpenModal }) => {
  const urlBigScreen = slide.images.hero.large;
  return (
    <div className="absolute top-0 left-0 z-10 h-screen w-screen bg-black/90 flex justify-center items-center">
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
  );
};

export default Modal;
