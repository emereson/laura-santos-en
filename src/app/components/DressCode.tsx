import Image from "next/image";
import { SiGooglemaps } from "react-icons/si";
import { memo } from "react";
import Link from "next/link";

function DressCode() {
  return (
    <section
      className="relative w-screen h-[80vh] flex bg-[#b19671] py-10 z-10 
      max-lg:h-auto
    "
    >
      <div
        className="animation-scroll w-10/12 h-full m-auto bg-[url(/img/hoja.webp)] bg-cover bg-repeat bg-center p-10 text-[#b19671] text-center flex
      max-lg:flex-col
      "
      >
        <article className="w-full h-full flex flex-col items-center justify-center max-lg:w-full max-lg:h-auto">
          <h2 className="animate-on-scroll text-8xl max-lg:text-6xl font-[extraCursive]">
            Dress
          </h2>
          <h3 className="animate-on-scroll text-5xl max-lg:text-3xl ">Code</h3>
          <h4 className="animate-on-scroll mt-16 text-7xl max-lg:text-5xl font-[extraCursive]">
            Black Formal
          </h4>

          <div className="flex gap-10 mt-6 animate-on-scroll">
            <Image
              className="w-20"
              src={"/icons/dress1.svg"}
              alt="men's outfit"
              width={500}
              height={500}
            />
            <Image
              className="w-20"
              src={"/icons/dress2.svg"}
              alt="women's outfit"
              width={500}
              height={500}
            />
          </div>
        </article>
      </div>
    </section>
  );
}

export default memo(DressCode);
