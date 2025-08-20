import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { FaAmazon } from "react-icons/fa";
import { SiMacys } from "react-icons/si";

function GiftTable() {
  return (
    <section
      className="relative w-screen min-h-screen bg-[#b19671] flex overflow-hidden animation-scroll
 max-md:flex-col"
    >
      <div className="gitTable-section absolute top-0 left-0 w-screen h-screen max-md:h-[50vh] max-md:relative">
        <Image
          src="/img/2.webp"
          alt="Photo"
          width={1920}
          height={1080}
          className="gitTable-image w-full h-full object-cover"
          priority
        />
      </div>
      <div className="p-6 w-7/12 h-full m-auto py-10 max-md:w-full bg-black">
        <div
          className="animate-on-scroll w-full h-full m-auto mt-0 bg-[url(/img/hoja.webp)] bg-cover bg-no-repeat bg-center p-10 text-[#b19671] text-center z-10
      max-lg:w-full max-lg:p-4 py-10"
        >
          <h2 className="animate-on-scroll font-[extraCursive] text-8xl max-lg:text-6xl">
            Gift
          </h2>
          <h3 className="animate-on-scroll text-4xl max-lg:text-2xl">TABLE</h3>
          <p className="animate-on-scroll text-xl mt-6 max-lg:text-base">
            If you wish to contribute to this new chapter of our lives, you can
            visit our gift table. Any gesture will be greatly appreciated and
            will help us build our goals.
          </p>
          <div className="w-[200px] m-auto mt-4">
            <div className="flex flex-col items-center gap-2">
              <FaAmazon className="text-5xl" />
              <Link
                className="w-full flex items-center justify-center gap-2 text-3xl border border-[#b19671] px-4 py-2 hover:bg-[#b19671] hover:text-white cursor-pointer transition
          max-lg:text-xl"
                href="https://www.amazon.com/wedding/registry/1GQVQ7ZAPUTBL"
                target="_blank"
              >
                Go to Amazon
              </Link>
            </div>
            <div className="flex flex-col items-center gap-2 mt-4">
              <SiMacys className="text-5xl" />
              <Link
                className="w-full flex items-center justify-center gap-2 text-3xl border border-[#b19671] px-4 py-2 hover:bg-[#b19671] hover:text-white cursor-pointer transition
          max-lg:text-xl"
                href="https://www.macys.com/registry/LAURA-GONZALEZ-Emedencio-Santos/1149992"
                target="_blank"
              >
                Go to Macy's
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(GiftTable);
