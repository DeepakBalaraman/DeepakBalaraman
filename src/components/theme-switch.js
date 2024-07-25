"use client";

import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { PiMoonDuotone, PiSunDuotone } from "react-icons/pi";
import { RiMoonClearLine, RiPaletteLine, RiSunLine } from "react-icons/ri";

export default function ThemeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 1); //workaround to enable AOS transitions on initial document load
  }, []);

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    setIsDark(currentTheme === "dark");

    //disable transitions on theme change, except for the initial document loading time
    if (mounted) {
      const css = document.createElement("style");
      css.appendChild(
        document.createTextNode(
          `*:not(.theme-switch, .icon--sun, .icon--moon){-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
        )
      );
      document.head.appendChild(css);

      // force restyle
      () => window.getComputedStyle(document.body)();

      // wait for next tick before removing
      setTimeout(() => {
        document.head.removeChild(css);
      }, 1);
    }
  }, [theme, systemTheme]);

  return (
    <div className="group flex items-center gap-3" data-aos="intro-animate">
      <button
        onClick={() => {
          if (theme !== "system") {
            setTheme("system");
          } else setTheme(isDark ? "dark" : "light");
        }}
        className={`transition-all duration-300 ease-out relative flex items-center justify-center text-sm font-medium w-12 lg:w-0 h-6 lg:group-hover:w-12 lg:group-focus-within:w-12 order-2 lg:order-none overflow-hidden rounded-lg shadow-md opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 ${
          mounted && theme === "system"
            ? "text-primary-100 bg-gradient-to-b bg-[length:200%_200%] bg-bottom hover:bg-top active:bg-center from-primary-500 via-primary-700 to-primary-900"
            : "bg-slate-400/50 dark:bg-slate-700/50 text-slate-950/50 dark:text-slate-100/50"
        } outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100 dark:focus-visible:ring-offset-slate-900 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-400 hover:-translate-y-0.5 active:transform-none`}
      >
        Auto
      </button>

      <Switch.Group>
        <>
          <Switch.Label className="sr-only">Change Theme</Switch.Label>
          <Switch
            checked={isDark}
            onChange={() => setTheme(!isDark ? "dark" : "light")}
            className={`transition-all duration-300 ease-out ${
              isDark ? "is-dark" : "is-light"
            } size-9 overflow-hidden rounded-xl shadow-md flex items-center justify-center cursor-pointer leading-none text-primary-100 bg-gradient-to-b bg-[length:200%_200%] bg-bottom hover:bg-top active:bg-center from-primary-500 via-primary-700 to-primary-900 border-2 border-primary-600 dark:border-primary-800 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100 dark:focus-visible:ring-offset-slate-900 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-400 hover:-translate-y-0.5 active:transform-none`}
          >
            <div
              className={`grid grid-cols-1 grid-rows-1 size-6 theme-switch ${
                mounted ? "opacity-100" : "opacity-50"
              }`}
            >
              <div
                className={`icon--moon transition duration-300 ease-in-out row-[1/1] col-[1/1] ${
                  !isDark ? "scale-0 -rotate-[360deg]" : ""
                }`}
              >
                <RiMoonClearLine className="size-6" />
              </div>

              <div
                className={`icon--sun transition duration-300 ease-in-out row-[1/1] col-[1/1] ${
                  isDark ? "scale-0 -rotate-[360deg]" : " "
                }`}
              >
                <RiSunLine className="size-6" />
              </div>
            </div>
          </Switch>
        </>
      </Switch.Group>
    </div>
  );
}

export function PaletteSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 1); //workaround to enable AOS transitions on initial document load
  }, []);

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    setIsDark(currentTheme === "dark");

    //disable transitions on theme change, except for the initial document loading time
    if (mounted) {
      const css = document.createElement("style");
      css.appendChild(
        document.createTextNode(
          `*:not(.theme-switch, .icon--sun, .icon--moon){-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
        )
      );
      document.head.appendChild(css);

      // force restyle
      () => window.getComputedStyle(document.body)();

      // wait for next tick before removing
      setTimeout(() => {
        document.head.removeChild(css);
      }, 1);
    }
  }, [theme, systemTheme]);

  return (
    <div className="group flex items-center gap-3" data-aos="intro-animate">
      <button
        onClick={() => {
          if (theme !== "system") {
            setTheme("system");
          } else setTheme(isDark ? "dark" : "light");
        }}
        className={`transition-all duration-300 ease-out relative flex items-center justify-center text-sm font-medium w-12 lg:w-0 h-6 lg:group-hover:w-12 lg:group-focus-within:w-12 order-2 lg:order-none overflow-hidden rounded-lg shadow-md opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 ${
          mounted && theme === "system"
            ? "text-primary-100 bg-gradient-to-b bg-[length:200%_200%] bg-bottom hover:bg-top active:bg-center from-primary-500 via-primary-700 to-primary-900"
            : "bg-slate-400/50 dark:bg-slate-700/50 text-slate-950/50 dark:text-slate-100/50"
        } outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100 dark:focus-visible:ring-offset-slate-900 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-400 hover:-translate-y-0.5 active:transform-none`}
      >
        Auto
      </button>

      <Switch.Group>
        <>
          <Switch.Label className="sr-only">Change Theme</Switch.Label>
          <Switch
            checked={isDark}
            onChange={() => setTheme(!isDark ? "dark" : "light")}
            className={`transition-all duration-300 ease-out ${
              isDark ? "is-dark" : "is-light"
            } size-9 overflow-hidden rounded-xl shadow-md flex items-center justify-center cursor-pointer leading-none text-primary-100 bg-gradient-to-b bg-[length:200%_200%] bg-bottom hover:bg-top active:bg-center from-primary-500 via-primary-700 to-primary-900 border-2 border-primary-600 dark:border-primary-800 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100 dark:focus-visible:ring-offset-slate-900 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-400 hover:-translate-y-0.5 active:transform-none`}
          >
            <div
              className={`grid grid-cols-1 grid-rows-1 size-6 theme-switch ${
                mounted ? "opacity-100" : "opacity-50"
              }`}
            >
              <div
                className="transition duration-300 ease-in-out row-[1/1] col-[1/1]"
              >
                <RiPaletteLine className="size-6" />
              </div>
            </div>
          </Switch>
        </>
      </Switch.Group>
    </div>
  );
}
