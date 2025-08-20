import { Swiper, SwiperSlide } from "swiper/react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Image from "next/image";
import { memo } from "react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

// JSON array with story data
const storyData = [
  {
    img: "/img/ourStories/a01.png",
    icon: "/img/ourStories/01.png",
    title: "WE MET",
    description: "September, 29th, 2018",
  },
  {
    img: "/img/ourStories/02.jpg",
    icon: "/img/ourStories/A02.png",
    title: "FIRST DATE",
    description: "October, 20th, 2018",
  },
  {
    year: "2020",
    img: "/img/ourStories/03.png",
    icon: "/img/ourStories/A03.png",
    title: "PROPOSAL",
    description: "January, 22nd, 2022. \n October, 6th 2024",
  },
];

function OurStory() {
  return (
    <section className="relative w-screen min-h-screen bg-[#b19671] pt-20 max-lg:pt-10 max-lg:px-6">
      <div
        className="animation-scroll w-8/10 flex justify-end items-center text-[#b19671] bg-[url(/img/hoja.webp)] bg-cover text-center p-4 space-y-2
        max-lg:m-auto max-lg:w-full max-lg:flex-col max-lg:h-min"
      >
        <article className="w-4/10 max-lg:w-full">
          <h2 className="animate-on-scroll text-7xl max-lg:text-4xl">OUR</h2>
          <h3 className="animate-on-scroll font-[extraCursive] text-9xl max-lg:text-7xl">
            Story
          </h3>
        </article>
        <div
          className="w-6/10 pl-10 py-10 text-[#b19671] text-center z-10
          max-lg:w-full max-lg:pl-0 max-lg:pt-0"
        >
          <div className="relative w-full flex items-center pb-4 max-lg:h-min">
            <button className="swiper-button-prev-custom absolute left-2 cursor-pointer z-10 max-lg:-left-2">
              <IoIosArrowDropleftCircle className="text-[#b19671] text-3xl" />
            </button>
            <button className="swiper-button-next-custom absolute right-2 cursor-pointer z-10 max-lg:-right-2">
              <IoIosArrowDroprightCircle className="text-[#b19671] text-3xl" />
            </button>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              className="animate-on-scroll w-full mt-10 max-lg:mt-2"
              spaceBetween={0}
              slidesPerView={1}
              autoplay
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
            >
              {storyData.map((item, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="flex flex-col items-center justify-center gap-4 px-10 max-lg:px-6">
                    <Image
                      className="w-[250px] h-[250px] rounded-sm shadow-md shadow-neutral-800 max-lg:w-full"
                      src={item.img}
                      alt={item.title}
                      width={500}
                      height={500}
                    />
                    <Image
                      className="w-[80px] h-[80px]"
                      src={item.icon}
                      alt={item.title}
                      width={500}
                      height={500}
                    />
                    <h4 className="text-4xl max-lg:text-2xl">{item.title}</h4>
                    <p className="text-xl max-lg:text-lg">{item.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(OurStory);
