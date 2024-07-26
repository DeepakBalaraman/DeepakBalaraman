"use client";

import { useEffect, useRef, useState } from "react";
import { RiVolumeUpLine } from "react-icons/ri";

export default function LiveClock() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    let timer = setInterval(
      () => setCurrentTime(new Date().toLocaleTimeString("en-US", {timeZone: "Asia/Kolkata"})),
      1000
    );

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return <span>{currentTime} IST</span>;
}

export function NameSound() {
  const audioRef = useRef();
  return (
    <span>
      <RiVolumeUpLine
        className="size-4 hover:cursor-pointer"
        onClick={() => audioRef.current.play()}
      />
      <audio ref={audioRef} className="hidden" src="/audio/name.mp3" />
    </span>
  );
}
