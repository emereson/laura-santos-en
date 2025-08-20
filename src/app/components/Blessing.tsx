import Image from "next/image";
import { memo } from "react";

function Blessing() {
  return (
    <section className="relative w-screen h-screen bg-[#b19671] flex overflow-hidden max-lg:flex-col-reverse max-lg:h-auto">
      <div className="animation-scroll z-10 w-1/2 flex items-center justify-center p-14 max-lg:h-auto max-lg:w-full max-lg:px-4">
        <article
          className="animate-on-scroll w-full max-w-xl bg-[url(/img/hoja.webp)] bg-fixed bg-cover bg-no-repeat bg-center px-6 py-10 font-[freeBold] text-center text-[#b19671]
        max-lg:mt-[-100px]"
        >
          <h2 className="animate-on-scroll text-5xl max-lg:text-2xl">
            WITH THE{" "}
            <strong className="font-[extraCursive] text-7xl max-lg:text-5xl">
              Blessing
            </strong>{" "}
            <br />
            OF OUR PARENTS
          </h2>

          <h3 className="animate-on-scroll font-[extraCursive] text-5xl mt-10 max-lg:text-3xl">
            Parents of the bride
          </h3>
          <ul className="animate-on-scroll text-2xl max-lg:text-xl">
            <li>RODRIGO GONZALES  ✝️</li>
            <li>CRISTINA ZUÑIGA</li>
          </ul>

          <h3 className="animate-on-scroll font-[extraCursive] text-5xl mt-10 max-lg:text-3xl">
            Parents of the groom
          </h3>
          <ul className="animate-on-scroll text-2xl max-lg:text-xl">
            <li>EMEDENCIO SANTOS DE LA CRUZ ✝️</li>
            <li>PATRICIA DUARTE</li>
          </ul>
        </article>
      </div>
      <div className="blessing-section w-1/2 h-full max-lg:h-[50vh] max-lg:w-full">
        <Image
          className="blessing-image w-full h-full object-cover object-top-left"
          src={"/img/4.webp"}
          alt="Blessing Image"
          width={1000}
          height={1000}
        />
      </div>
      <section className="w-screen p-6 bg-[#b19671] animation-scroll hidden max-lg:flex">
        <h2 className="text-center font-[free] text-white text-4xl animate-on-scroll max-lg:text-2xl">
          Parents of the groom
        </h2>
      </section>
    </section>
  );
}

export default memo(Blessing);
