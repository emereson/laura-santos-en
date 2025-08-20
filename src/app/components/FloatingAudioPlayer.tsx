import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";

interface FloatingAudioPlayerProps {
  audioSrc: string;
  title?: string;
}

const FloatingAudioPlayer: React.FC<FloatingAudioPlayerProps> = ({
  audioSrc,
  title = "Nuestra canción",
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.7);
  const [showControls, setShowControls] = useState<boolean>(false);
  const [viewFixed, setViewFixed] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;

      const handleLoadStart = (): void => setIsLoading(true);
      const handleCanPlay = (): void => setIsLoading(false);
      const handleEnded = (): void => setIsPlaying(false);

      audio.addEventListener("loadstart", handleLoadStart);
      audio.addEventListener("canplay", handleCanPlay);
      audio.addEventListener("ended", handleEnded);

      return () => {
        audio.removeEventListener("loadstart", handleLoadStart);
        audio.removeEventListener("canplay", handleCanPlay);
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, [volume]);

  const togglePlay = async (): Promise<void> => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.error("Error playing audio:", error);
        }
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed bottom-3 right-3 z-50">
      <audio ref={audioRef} src={audioSrc} preload="auto" loop />

      {viewFixed ? (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-[#b19671] flex flex-col items-center justify-center">
          <button
            className="text-5xl text-white font-[extraCursive] hover:scale-105 transform transition-transform duration-300 relative cursor-pointer z-10"
            onClick={() => {
              togglePlay();
              setViewFixed(false);
            }}
          >
            <Image
              className="animate-bounce"
              src={"/img/logo.png"}
              alt="laura y santos"
              width={100}
              height={100}
              priority
            />{" "}
          </button>
          <div className="mb-2 text-center">
            <div className="flex flex-col items-center">
              <p className="text-white text-xl font-light tracking-wide">
                Enter
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="relative"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          {/* Controls panel */}
          <div
            className={`absolute bottom-16 right-0 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 min-w-[200px] transition-all duration-300 ${
              showControls
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <div className="text-sm font-medium text-gray-800 mb-3 text-center">
              {title}
            </div>

            {/* Volume control */}
            <div className="flex items-center gap-2 mb-2">
              <FaVolumeUp className="w-4 h-4 text-gray-600" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Play/Pause button in controls */}
            <button
              onClick={togglePlay}
              disabled={isLoading}
              className="w-full bg-[#b19671] hover:bg-[#9d8763] text-white px-3 py-2 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Cargando...
                </>
              ) : isPlaying ? (
                <>
                  <FaPause className="w-4 h-4" />
                  Pausar
                </>
              ) : (
                <>
                  <FaPlay className="w-4 h-4" />
                  Reproducir
                </>
              )}
            </button>
          </div>

          {/* Main floating button */}
          <button
            onClick={togglePlay}
            disabled={isLoading}
            className={`w-10 h-10 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
              isPlaying
                ? "bg-[#b19671] hover:bg-[#9d8763] animate-pulse"
                : "bg-white hover:bg-gray-50"
            } ${isLoading ? "opacity-30" : ""}`}
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-[#b19671] border-t-transparent rounded-full animate-spin"></div>
            ) : isPlaying ? (
              <FaPause className="w-4 h-4 text-white" />
            ) : (
              <FaPlay className="w-4 h-4 text-[#b19671]" />
            )}
          </button>

          {/* Sound waves animation */}
          {isPlaying && (
            <div className="absolute -top-2 -right-2 w-6 h-6">
              <div className="absolute inset-0 rounded-full bg-[#b19671] opacity-75 animate-ping"></div>
              <div
                className="absolute inset-0 rounded-full bg-[#b19671] opacity-50 animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FloatingAudioPlayer;
