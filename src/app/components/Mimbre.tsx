import Image from "next/image";
import { SiGooglemaps } from "react-icons/si";
import { memo } from "react";
import Link from "next/link";

function Mimbre() {
  return (
    <section
      className="relative w-screen h-[80vh] flex bg-[#b19671] py-10 z-10 
      max-lg:h-auto
    
    "
    >
      <div
        className="animation-scroll  w-10/12 h-full m-auto bg-[url(/img/hoja.webp)]   bg-cover bg-repeat bg-center p-10 text-[#b19671] text-center  flex
      max-lg:flex-col
      "
      >
        <article className="w-6/10 h-full flex flex-col items-center justify-center max-lg:w-full max-lg:h-auto">
          <h2 className="animate-on-scroll text-6xl max-lg:text-4xl">
            Villa Punta
          </h2>
          <h3 className="animate-on-scroll text-7xl max-lg:text-5xl">
            del Cielo
          </h3>
        </article>
        <article
          className="animate-on-scroll w-4/10 h-full py-4  pr-12  flex flex-col gap-4 items-center justify-center
        max-lg:w-full max-lg:p-0 max-lg:py-2
        "
        >
          <Image
            className=" w-full"
            src="/img/villa3.jpg"
            alt="asas"
            width={800}
            height={400}
          />
          <Link
            className="w-full  flex items-center justify-center gap-2 text-3xl border border-[#b19671]  px-4 py-2 hover:bg-[#b19671] hover:text-white cursor-pointer transition
          max-lg:text-xl
          "
            href="https://www.google.com/maps/@35.317405,-118.9278717,15z?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            <span role="img" aria-label="calendar">
              <SiGooglemaps />
            </span>
            Ir a Google Maps
          </Link>
        </article>
      </div>
    </section>
  );
}

export default memo(Mimbre);
