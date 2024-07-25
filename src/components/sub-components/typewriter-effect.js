"use client";

import TypewriterComponent from "typewriter-effect";

export default function TypewriterEffect({ words }) {
  return (
    <span
      aria-hidden
      className="select-none inline-flex py-1.5 bg-clip-text text-transparent bg-gradient-to-r from-primary-600/80 dark:from-primary-400/80 via-primary-600 dark:via-primary-400 to-primary-600/80 dark:to-primary-600/80 w-fit overflow-hidden"
    >
      <TypewriterComponent
        options={{
          strings: words,
          autoStart: true,
          loop: true,
          cursorClassName: "typing-cursor",
        }}
      />
    </span>
  );
}
