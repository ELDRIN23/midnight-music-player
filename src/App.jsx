import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import Navbar from "./Navbar";

const playlist = [
  {
    title: "My Life is Going On",
    artist: "Cecilia Krull",
    cover: "/moneyhiest.jpg",
    file: "/La casa de papel Soundtrack  Cecilia Krull - My life is going on (Lyric Video).mp3",
  },
  {
    title: "dark night",
    artist: "Lofi Beats",
    cover: "/darknight.jpg",
    file: "/Alan Walker - Darkside (Lyrics) ft. AuRa and Tomine Harket.mp3",
  },
  {
    title: "Midnight Rain",
    artist: "Chillhop",
    cover: "/rain.jpg",
    file: "/rain.mp3",
  },
];

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const audioRef = useRef(new Audio(playlist[0].file));

  // Load new song when currentSong changes
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(playlist[currentSong].file);
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSong]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    setCurrentSong((prev) => (prev + 1) % playlist.length);
  };

  const playPrev = () => {
    setCurrentSong((prev) =>
      prev === 0 ? playlist.length - 1 : prev - 1
    );
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#0a0e17] to-[#1e293b] text-white p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
        Midnight Music
      </h1>

      {/* Album Card */}
      <div className="card w-full max-w-xs sm:max-w-sm glass shadow-2xl">
        <figure className="p-4">
          <img
            src={playlist[currentSong].cover}
            alt="Album Cover"
            className="rounded-xl w-48 h-48 object-cover mx-auto sm:w-56 sm:h-56"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{playlist[currentSong].title}</h2>
          <p className="text-sm opacity-80">{playlist[currentSong].artist}</p>

          {/* Controls */}
          <div className="flex items-center gap-6 mt-4">
            <button className="btn btn-circle btn-outline" onClick={playPrev}>
              <SkipBack />
            </button>
            <button
              className="btn btn-circle btn-primary"
              onClick={togglePlay}
            >
              {isPlaying ? <Pause /> : <Play />}
            </button>
            <button className="btn btn-circle btn-outline" onClick={playNext}>
              <SkipForward />
            </button>
          </div>
        </div>
      </div>
    </div>
    < Navbar />
    </>
  );
}

export default App;
