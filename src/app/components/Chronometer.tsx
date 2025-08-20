import { JSX, useEffect, useMemo, useState } from "react";
import { BsCalendarHeartFill } from "react-icons/bs";
import { memo } from "react";
import Image from "next/image";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimeBoxProps {
  label: string;
  value: number;
}

function Chronometer(): JSX.Element {
  const targetDate = useMemo(() => new Date("2025-09-27T00:00:00"), []);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer: NodeJS.Timeout = setInterval(() => {
      const now: Date = new Date();
      const diff: number = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days: number = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours: number = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes: number = Math.floor((diff / (1000 * 60)) % 60);
      const seconds: number = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formattedDate: string = (() => {
    const day = targetDate.getDate().toString().padStart(2, "0");
    const month = targetDate
      .toLocaleString("en-US", { month: "long" })
      .toUpperCase();
    const year = targetDate.getFullYear();

    return `${day} ${month} ${year}`;
  })();

  return (
    <section className="relative w-screen h-screen font-[freeBold] animation-scroll">
      <div className="cro-section top-0 left-0 w-screen min-h-screen">
        <Image
          src="/img/7.jpg"
          alt="Photo"
          width={1920}
          height={1080}
          className="cro-image w-full h-screen object-cover"
          priority
        />
      </div>
      <div className="absolute w-full top-0 z-10 px-10 pt-20 flex flex-col items-center justify-start max-lg:px-4 max-sm:pt-32">
        <h2 className="text-4xl text-[#b19671] animate-on-scroll max-lg:text-3xl">
          {formattedDate}
        </h2>

        <div className="flex gap-4 mt-4 font-bold animate-on-scroll z-10">
          <TimeBox label="Days" value={timeLeft.days} />
          <TimeBox label="Hrs" value={timeLeft.hours} />
          <TimeBox label="Mins" value={timeLeft.minutes} />
          <TimeBox label="Secs" value={timeLeft.seconds} />
        </div>
        <a
          href="/evento.ics"
          download="evento.ics"
          className="animate-on-scroll mt-6 flex items-center gap-2 border border-[#b19671] text-[#b19671] px-4 py-2 hover:bg-[#b19671] hover:text-white cursor-pointer transition"
        >
          <span role="img" aria-label="calendar">
            <BsCalendarHeartFill />
          </span>
          Add to Calendar
        </a>
      </div>
    </section>
  );
}

function TimeBox({ label, value }: TimeBoxProps): JSX.Element {
  return (
    <div className="bg-[#b19671] text-white px-6 py-4 text-center max-lg:px-4 max-lg:py-3">
      <div className="text-3xl font-bold max-lg:text-xl">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-lg max-lg:text-base">{label}</div>
    </div>
  );
}

export default memo(Chronometer);
