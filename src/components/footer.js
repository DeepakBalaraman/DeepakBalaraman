"use client";

import { useEffect, useState } from "react";
import {
  RiFacebookLine,
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTelegramLine,
  RiThreadsLine,
  RiTwitterLine,
  RiYoutubeLine,
} from "react-icons/ri";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear());
  }, []);

  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/DeepakBalaraman",
      icon: RiGithubLine,
    },
    {
      name: "Telegram",
      url: "https://t.me/dpakb",
      icon: RiTelegramLine,
    },
    {
      name: "LinkedIn",
      url: "https://www.linked.com/in/DeepakBalaraman",
      icon: RiLinkedinLine,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ExultTechTV",
      icon: RiTwitterLine,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/ExultTechTV",
      icon: RiInstagramLine,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@ExultTechTV",
      icon: RiYoutubeLine,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/ExultTechTV/",
      icon: RiFacebookLine,
    },
    {
      name: "Threads",
      url: "https://www.threads.net/@ExultTechTV",
      icon: RiThreadsLine,
    },
  ];

  return (
    <footer className="relative w-full bg-slate-50 dark:bg-slate-950 p-2">
      <div className="max-w-screen-2xl mx-auto py-4 flex flex-col gap-y-8 sm:flex-row items-center justify-between shadow-md shadow-slate-500/20 dark:shadow-black/30 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-3xl lg:rounded-full px-5">
        <ul className="flex-1 flex flex-row h-full text-lg gap-x-8">
          {socials.map((s) => (
            <li
              key={s.name}
              className="transition-transform duration-300 ease-out hover:-translate-y-0.5 active:transform-none has-[a:focus-visible]:-translate-y-0.5"
            >
              <a
                target="_blank"
                href={s.url}
                className={`transition-colors duration-300 ease-out rounded-sm text-slate-600 dark:text-slate-500 hover:text-primary-600 hover:dark:text-primary-400 outline-none focus-visible:text-primary-600 focus-visible:dark:text-primary-400`}
              >
                <s.icon className="size-6" />
                <span className="sr-only">Link to {s.name}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex-1 text-slate-600 dark:text-slate-400 text-sm text-center sm:text-right">
          &copy; Deepak Balaraman {year} | All rights reserved
        </div>
      </div>
    </footer>
  );
}
