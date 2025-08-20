import Image from "next/image";
import { memo } from "react";
import { FaArrowDownLong } from "react-icons/fa6";

function Itinerary() {
  const data = [
    { id: 1, title: "Welcome", houre: "4:00 PM", img: "/icons/mano.webp" },
    {
      id: 2,
      title: "Ceremony",
      houre: "5:00 PM",
      img: "/icons/ceremonia.svg",
    },
    {
      id: 3,
      title: "Cocktail",
      houre: "6:00 PM",
      img: "/icons/coctel.svg",
    },
    {
      id: 4,
      title: "Dinner",
      houre: "7:30 PM",
      img: "/icons/cena.svg",
    },
    {
      id: 5,
      title: "Dancing",
      houre: "9:00 PM",
      img: "/icons/baile.svg",
    },
  ];
  return (
    <section
      className="animation-scroll relative w-screen  h-full bg-[#b19671] flex overflow-hidden  
   max-md:flex-col
     "
    >
      <div className="itinerary-section absolute top-0 left-0 w-screen h-screen max-md:h-[50vh] max-md:relative ">
        <Image
          src="/img/10.jpg"
          alt="Foto"
          width={1920}
          height={1080}
          className="itinerary-image w-full h-full object-cover"
          priority
        />
      </div>
      <div className="p-6 w-7/12  h-full m-auto py-10 max-md:w-full bg-black">
        <div
          className=" animate-on-scroll  bg-[url(/img/hoja.webp)]   bg-fixed bg-cover bg-no-repeat bg-start pt-10 text-[#b19671] text-center z-10
      max-lg:w-full max-lg:pt-4 max-lg:mt-0 max-lg:px-0
      "
        >
          <h2 className="animate-on-scroll font-[extraCursive] text-8xl max-lg:text-6xl ">
            Itinerary
          </h2>
          <div className="h-full flex  flex-col  items-center gap-6 py-10">
            {data.map((item) => (
              <article
                key={item.id}
                className="w-full  animate-on-scrollflex flex-col items-center  justify-center gap-2"
              >
                <div className="w-[550px]  m-auto relative grid grid-cols-3  items-center  gap-2 max-md:w-[300px]">
                  <h3 className=" font-[extraCursive] row-start-1 text-5xl max-lg:text-2xl text-end">
                    {item.title}
                  </h3>
                  <Image
                    className="max-lg:w-[50px]  max-lg:h-[50px] row-span-1 m-auto "
                    src={item.img}
                    alt="asas"
                    width={90}
                    height={90}
                  />

                  <p className="text-start text-2xl max-lg:text-lg text-nowrap row-span-2">
                    {item.houre}
                  </p>
                </div>
                <span className="relative w-[2px] h-[30px] bg-[#b19671]" />
              </article>
            ))}
          </div>
          <div className="animate-on-scroll w-full p-4 bg-[#b19671]  text-white">
            <h3 className="text-center text-xl max-lg:text-lg  flex items-center justify-center gap-2">
              &quot; The ceremony will be held at the same venue &quot;
            </h3>
            <FaArrowDownLong className="m-auto mt-2 animate-bounce text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Itinerary);
