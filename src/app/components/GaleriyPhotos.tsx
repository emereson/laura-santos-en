"use client";
import Image from "next/image";
import { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

function GaleriyPhotos() {
  const images = [
    { id: 1, src: "/img/IMG_4319.jpg" },
    { id: 2, src: "/img/2.webp" },
    { id: 3, src: "/img/IMG_4156.jpg" },
    { id: 4, src: "/img/9.jpg" },
    { id: 5, src: "/img/5.jpg" },
    { id: 6, src: "/img/IMG_4261-Edit.jpg" },
    { id: 7, src: "/img/7.jpg" },
    { id: 8, src: "/img/8.jpg" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <section
      className="relative w-screen min-h-screen bg-[#b19671] text-white flex flex-col items-center p-10
    max-lg:px-6"
    >
      <h2 className="font-[extraCursive] text-9xl max-lg:text-6xl">Gallery</h2>
      <h3 className="text-5xl uppercase max-lg:text-3xl">Photos</h3>

      {/* Galería */}
      <div
        className="w-4/10 h-[500px] grid grid-cols-3 grid-rows-3 gap-2 mt-10
      max-lg:w-full animation-scroll"
      >
        {images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => openModal(index)}
            className={`w-full h-full relative overflow-hidden  animate-on-scroll ${
              index === 1 ? "col-span-2" : ""
            }`}
          >
            <Image
              className="w-full h-full object-cover object-center hover:scale-110 transition duration-300"
              src={img.src}
              alt={`Foto ${img.id}`}
              width={1000}
              height={1000}
            />
          </button>
        ))}
      </div>

      {/* Logo */}
      <Image
        className="m-auto mt-4 max-lg:w-[70px] max-lg:h-[70px]"
        src="/img/logo.png"
        alt="logo"
        width={120}
        height={120}
      />

      {/* Modal con Swiper */}
      {isOpen && (
        <div className="fixed  inset-0 bg-black/80 flex items-center justify-center z-50 ">
          {/* Cerrar */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl z-50"
          >
            ✕
          </button>

          <div className="relative w-full flex items-center p-10">
            <button className="swiper-button-prev-custom absolute left-10 cursor-pointer z-10  max-lg:left-2">
              <IoIosArrowDropleftCircle className="text-[#b19671] text-3xl" />
            </button>
            <button className="swiper-button-next-custom absolute right-10 cursor-pointer z-10 max-lg:right-2">
              <IoIosArrowDroprightCircle className="text-[#b19671] text-3xl" />
            </button>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              className="h-[80vh]"
              spaceBetween={4}
              slidesPerView={1}
              initialSlide={currentIndex}
              autoplay
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
            >
              {images.map((img) => (
                <SwiperSlide
                  key={img.id}
                  className="flex items-center justify-center"
                >
                  <div className="relative  h-full w-full flex items-center justify-center">
                    <Image
                      src={img.src}
                      alt={`Foto ${img.id}`}
                      width={500}
                      height={500}
                      className=" w-auto h-full "
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
}

export default memo(GaleriyPhotos);
