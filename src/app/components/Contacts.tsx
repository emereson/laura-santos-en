import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { FaWhatsapp } from "react-icons/fa";

function Contacts() {
  return (
    <section
      className="relative w-screen h-screen flex bg-[#b19671] 
      max-lg:flex-col max-lg:h-auto
    "
    >
      <Image
        className="w-6/10 max-lg:w-full max-lg:h-[50vh]"
        src={"/img/1.webp"}
        alt="cover"
        width={1000}
        height={1000}
      />

      <div
        className="relative w-4/10 flex items-center animation-scroll
        max-lg:w-full max-lg:p-4 max-lg:-mt-10
      "
      >
        <div
          className="relative -left-10 bg-[url(/img/hoja.webp)] bg-cover bg-center p-10 text-[#b19671] text-center space-y-4 z-10 animate-on-scroll
          max-lg:-left-0 max-lg:w-full
        "
        >
          <h2 className="font-[extraCursive] text-7xl animate-on-scroll max-lg:text-5xl">
            Contacts
          </h2>

          <div className="w-full flex items-center justify-center gap-10">
            <article className="flex flex-col items-center animate-on-scroll">
              <Image
                className="m-auto h-[120px] w-[120px] max-lg:h-[100px] max-lg:w-[100px]"
                style={{ objectFit: "fill" }}
                src="/icons/p1.png"
                alt="Bride"
                width={150}
                height={150}
              />
              <Link
                href="https://wa.me/16619040518"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp to LAURA GONZÁLEZ"
                className="h-[50px] flex items-center gap-2 bg-[#b19671] text-white text-2xl rounded-xl px-6
                  max-lg:text-xl
                "
              >
                <FaWhatsapp />
                Bride
              </Link>
            </article>

            <article className="flex flex-col items-center animate-on-scroll">
              <Image
                className="m-auto h-[120px] w-[120px] max-lg:h-[100px] max-lg:w-[100px]"
                style={{ objectFit: "fill" }}
                src="/icons/p2.png"
                alt="Groom"
                width={150}
                height={150}
              />
              <Link
                href="https://wa.me/16615927141"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp to SANTOS"
                className="h-[50px] flex items-center gap-2 bg-[#b19671] text-white text-2xl rounded-xl px-6
                  max-lg:text-xl
                "
              >
                <FaWhatsapp />
                Groom
              </Link>
            </article>
          </div>

          <p className="text-2xl mt-6 max-lg:text-xl">
            If in doubt, you can contact us!
          </p>
        </div>
      </div>
    </section>
  );
}

export default memo(Contacts);
