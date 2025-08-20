"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <section className=" relative h-[100vh] w-screen">
      <div className="banner-section">
        <Image
          src="/img/2.webp"
          alt="Foto"
          width={1920}
          height={1080}
          className="banner-image w-full h-screen object-cover"
          priority
        />
      </div>
      <span></span>
    </section>
  );
}
