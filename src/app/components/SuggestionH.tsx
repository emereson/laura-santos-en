import { Swiper, SwiperSlide } from "swiper/react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
import { memo } from "react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

function SuggestionH() {
  return (
    <section className="relative w-screen h-screen flex bg-[#b19671] max-lg:flex-col max-sm:h-auto">
      <Image
        className="w-6/10 h-screen sticky top-0 max-lg:w-full max-lg:h-[50vh] object-top-right"
        src="/img/4.webp"
        alt="Image"
        width={1000}
        height={1000}
      />

      <div
        className="animation-scroll w-4/10 h-screen flex items-center justify-center
      max-lg:relative max-lg:w-full max-lg:justify-start max-lg:items-start max-lg:p-6 max-sm:h-auto"
      >
        <div
          className="-ml-20 w-[500px] bg-[url(/img/hoja.webp)] bg-cover bg-no-repeat bg-center py-10 text-[#b19671] text-center z-10
        max-lg:-mt-14 max-lg:w-full max-lg:ml-0 max-lg:py-4"
        >
          <h2 className="animate-on-scroll text-[50px] max-lg:text-3xl">
            SUGGESTION OF
          </h2>
          <h3 className="animate-on-scroll font-[extraCursive] text-8xl max-lg:text-6xl">
            Accommodation
          </h3>

          <div className="relative w-full flex items-center pb-4">
            <button className="swiper-button-prev-custom absolute left-2 cursor-pointer">
              <IoIosArrowDropleftCircle className="text-[#b19671] text-3xl" />
            </button>
            <button className="swiper-button-next-custom absolute right-2 cursor-pointer">
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
              <SwiperSlide className="w-full">
                <div className="w-full flex flex-col items-center justify-center gap-2">
                  <Image
                    className="w-8/10 h-[250px] rounded-lg"
                    src="/img/hotel1.avif"
                    alt="Hotel Photo"
                    width={200}
                    height={200}
                    priority
                  />
                  <h3 className="w-8/10 text-xl mt-6 uppercase text-center">
                    HAMPTON BY HILTON
                  </h3>
                  <Link
                    href="https://www.google.com/maps/place/7941+E+Brundage+Ln,+Bakersfield,+CA+93307,+EE.+UU./@35.353824,-118.915633,20.23z/data=!4m6!3m5!1s0x80ea6cf987a91f45:0x160c82cf37c7398b!8m2!3d35.3536987!4d-118.9156067!16s%2Fg%2F11b8v4wzp0?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
                    className="w-fit flex items-center justify-center gap-2 text-3xl border border-[#b19671] px-4 py-2 hover:bg-[#b19671] hover:text-white cursor-pointer transition
                  max-lg:text-xl"
                    target="_blank"
                  >
                    <span role="img" aria-label="map">
                      <SiGooglemaps />
                    </span>
                    Go to Google Maps
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full">
                <div className="w-full flex flex-col items-center justify-center gap-2">
                  <Image
                    className="w-8/10 h-[250px] rounded-lg"
                    src="/img/hotel2.jpg"
                    alt="Hotel Photo"
                    width={200}
                    height={200}
                    priority
                  />
                  <h3 className="w-8/10 text-xl mt-6 uppercase text-center">
                    WoodSpring Suites
                  </h3>
                  <Link
                    href={
                      "https://www.google.com/maps/place/WoodSpring+Suites+Bakersfield+East/@35.353535,-118.911319,19.09z/data=!4m17!1m7!3m6!1s0x80ea6d0006aa88bd:0x77bc5f499a9ff39b!2sMilan+Events+Center!8m2!3d35.3529845!4d-118.9107028!16s%2Fg%2F11wj5xqz9z!3m8!1s0x80ea6cfc14ce8fe1:0xb19598d9153e7366!5m2!4m1!1i2!8m2!3d35.3535614!4d-118.9116592!16s%2Fg%2F11c1s2px80?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
                    }
                    className="w-fit flex items-center justify-center gap-2 text-3xl border border-[#b19671] px-4 py-2 hover:bg-[#b19671] hover:text-white cursor-pointer transition
                  max-lg:text-xl"
                    target="_blank"
                  >
                    <span role="img" aria-label="map">
                      <SiGooglemaps />
                    </span>
                    Go to Google Maps
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(SuggestionH);
