"use client";

import Banner from "./components/Banner";
import Chronometer from "./components/Chronometer";
import Title from "./components/Title";
import Mimbre from "./components/Mimbre";
import Godparents from "./components/Godparents";
import Blessing from "./components/Blessing";
import Itinerary from "./components/Itinerary";
import SuggestionH from "./components/SuggestionH";
import GiftTable from "./components/GiftTable";
import GaleriyPhotos from "./components/GaleriyPhotos";
import ShareMoments from "./components/ShareMoments";
import GoodWishes from "./components/GoodWishes";
import OurStory from "./components/OurStory";
import Contacts from "./components/Contacts";
import Phrase from "./components/Phrase";
import FloatingAudioPlayer from "./components/FloatingAudioPlayer"; // Nuevo import
import {
  MemoScrollAnimations,
  MemoScrollFixedImage,
} from "@/utils/ScrollAnimations";
import FormBoda from "./components/FormBoda";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" w-screen  overflow-x-hidden overflow-y-visible ">
      <div>
        <Link href={"https://laura-y-santos.creativeartvideo.com/"}>ES</Link>
        <Link href={"https://laura-y-santos-en.creativeartvideo.com/"}>En</Link>
      </div>
      <MemoScrollAnimations />
      <MemoScrollFixedImage />

      {/* Reproductor de audio flotante */}
      <FloatingAudioPlayer
        audioSrc="/love.mp3"
        title="Nuestra canción especial"
      />

      <Title />
      <article className="w-screen p-8 bg-[#b19671] animation-scroll">
        <h2 className="text-center font-[free] text-white text-4xl animate-on-scroll max-lg:text-2xl">
          Our love is the greatest adventure
        </h2>
      </article>
      <Banner />
      <Chronometer />
      <Blessing />
      <Godparents />
      <Itinerary />
      <Mimbre />
      <SuggestionH />
      <GiftTable />
      <GaleriyPhotos />
      <ShareMoments />
      <GoodWishes />
      <OurStory />
      <Contacts />
      <Phrase />
      <FormBoda />
    </main>
  );
}
