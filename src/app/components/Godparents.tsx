import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { memo } from "react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

interface GodparentSlide {
  title: string;
  icon: string;
  names: string[];
}

const godparentsData: GodparentSlide[] = [
  {
    title: "Veil Ceremony",
    icon: "/icons/mano.webp",
    names: ["Gaby Zuñiga", "Ruben Curiel"],
  },
  {
    title: "Rings",
    icon: "/icons/anillos.svg",
    names: ["Nadya Curiel", "José López"],
  },
  {
    title: "Unity Coins",
    icon: "/icons/arras.svg",
    names: ["Kathya Curiel", "Ricardo Limon"],
  },
  {
    title: "Wedding Lasso",
    icon: "/icons/lazo.svg",
    names: ["Reyna", "Miguel del Toro"],
  },
  {
    title: "Bible",
    icon: "/icons/mano.webp",
    names: ["Lulu Zuñiga"],
  },
  {
    title: "Rosary",
    icon: "/icons/mano.webp",
    names: ["Carmen Mondragon"],
  },
  {
    title: "Bouquet",
    icon: "/icons/mano.webp",
    names: ["Maricela Olvera"],
  },
];

function Godparents() {
  return (
    <section className="goodParents-section relative w-screen h-screen flex bg-[#b19671] max-lg:flex-col max-sm:pb-6">
      <Image
        className="goodParents-image w-6/10 max-lg:h-[50vh] max-lg:w-full object-cover object-top-right"
        src="/img/8.jpg"
        alt="sasas"
        width={1000}
        height={1000}
      />

      <div className="animation-scroll relative w-4/10 flex items-center justify-start max-lg:w-full max-lg:px-6 ">
        <div
          className="animate-on-scroll  -ml-20 w-[390px] h-[490px] bg-[url(/img/hoja.webp)] bg-fixed bg-cover bg-no-repeat bg-center py-10 text-[#b19671] text-center z-10
        max-lg:ml-0 max-lg:w-full max-lg:-mt-10 max-lg:h-auto
         "
        >
          <h2 className="animate-on-scroll font-[extraCursive] text-7xl max-lg:text-5xl">
            Sponsors
          </h2>

          <div className="relative w-full flex items-center">
            <button className="swiper-button-prev-custom absolute left-2 cursor-pointer z-10 ">
              <IoIosArrowDropleftCircle className="text-[#b19671] text-3xl" />
            </button>
            <button className="swiper-button-next-custom absolute right-2 cursor-pointer z-10">
              <IoIosArrowDroprightCircle className="text-[#b19671] text-3xl" />
            </button>

            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              className="animate-on-scroll w-full mt-10"
              spaceBetween={0}
              slidesPerView={1}
              autoplay
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
            >
              {godparentsData.map((slide, index) => (
                <SwiperSlide key={index} className="w-full cursor-pointer">
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      className="m-auto"
                      src={slide.icon}
                      alt={slide.title}
                      width={100}
                      height={100}
                    />
                    <h3 className="font-[extraCursive] text-6xl mt-6 max-lg:text-4xl">
                      {slide.title}
                    </h3>
                    <ul className="text-xl mt-4">
                      {slide.names.map((name, idx) => (
                        <li key={idx}>{name}</li>
                      ))}
                    </ul>
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

export default memo(Godparents);
