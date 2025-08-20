import Image from "next/image";
import { memo } from "react";
import { TbCameraHeart } from "react-icons/tb";

function ShareMoments() {
  return (
    <section
      className="relative w-screen h-screen flex bg-[#b19671] overflow-hidden
    max-lg:flex-col-reverse max-lg:justify-end max-lg:h-auto"
    >
      <div
        className="animation-scroll w-4/10 h-full p-4 flex items-center z-10
      max-lg:w-full max-lg:items-start max-lg:-mt-10 max-lg:h-auto"
      >
        <div className="animate-on-scroll w-full h-auto text-[#b19671] bg-[url(/img/hoja.webp)] bg-cover bg-no-repeat bg-center text-center p-4 space-y-2">
          <h2 className="animate-on-scroll text-4xl max-lg:text-2xl">
            Share your best
          </h2>
          <h3 className="animate-on-scroll font-[extraCursive] text-8xl max-lg:text-6xl">
            Moments
          </h3>
          <TbCameraHeart className="hidden m-auto text-5xl max-lg:flex" />

          <h4 className="animate-on-scroll text-3xl mt-2 max-lg:mt-4">
            #Laura&Santos2025
          </h4>
        </div>
      </div>

      <Image
        className="w-6/10 h-full sticky top-0 max-lg:w-full max-lg:h-[50vh]"
        src="/img/IMG_4319.jpg"
        alt="Photo"
        width={1000}
        height={1000}
      />
    </section>
  );
}

export default memo(ShareMoments);
