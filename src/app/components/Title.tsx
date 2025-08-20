import Image from "next/image";
import { memo } from "react";

function Title() {
  return (
    <section
      className="relative w-screen h-screen  p-20
    max-lg:pt-20 max-lg:px-6"
    >
      <div className=" absolute top-0 left-0 w-screen h-screen  ">
        <Image
          src="/img/5.jpg"
          alt="Foto"
          width={1920}
          height={1080}
          className=" w-full h-full object-cover"
          priority
        />
      </div>
      <h1 className="relative z-10 font-[extraCursive]  text-9xl text-white text-center max-lg:text-5xl">
        Laura & Santos
      </h1>
    </section>
  );
}

export default memo(Title);
