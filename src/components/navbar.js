"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import ThemeSwitch, { PaletteSwitch } from "./theme-switch";
import Link from "next/link";
import { PiChatCircleDotsDuotone } from "react-icons/pi";
import { RiMessage3Line, RiQuestionAnswerLine } from "react-icons/ri";

const navigation = [
  { name: "Home", href: "/#" },
  { name: "Services", href: "/#services" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Reviews", href: "/#reviews" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [animateNav, setAnimateNav] = useState(false);

  useEffect(() => {
    const listener = () => {
      setAnimateNav(window.scrollY > 10);
    };

    listener(); //check if the page is scrolled to a section on initial load

    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-2 mx-2 z-50 flex justify-center">
      <Menu
        as="nav"
        className={`transition-all duration-300 ease-out relative max-w-screen-2xl flex flex-col items-center justify-between w-full px-5 before:rounded-full rounded-full before:transition before:duration-300 before:ease-out before:absolute before:top-0 before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-b before:from-primary-100/50 before:to-primary-200/50 before:dark:from-primary-900/50 before:dark:to-primary-950/50 before:ring-1 before:ring-primary-200/75 before:dark:ring-primary-950/75 ${
          animateNav || open
            ? "py-2 lg:py-4 shadow-md shadow-slate-500/20 dark:shadow-black/30 before:opacity-100 backdrop-brightness-150 dark:backdrop-brightness-50 backdrop-blur-lg"
            : "before:opacity-0 py-4 lg:py-6"
        }`}
      >
        <div className="relative max-w-screen-2xl mx-auto flex flex-row items-center justify-between w-full">
          <div className="flex-1">
            <div className="flex items-center" data-aos="intro-animate">
              <Link
                href="#"
                className="transition-all duration-300 ease-out text-primary-800 dark:text-primary-400 font-bold text-lg sm:text-xl drop-shadow-[0_0px_0.5px_rgb(211,205,171,0.5)] dark:drop-shadow-[0_1px_0.5px_rgb(78,62,50,0.5)] outline-none rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100 dark:focus-visible:ring-offset-slate-900 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-400 hover:-translate-y-0.5 active:transform-none"
              >
                {/* Deepak{" "}
                <span className="text-slate-800 dark:text-slate-400">
                  Balaraman
                </span> */} DB
              </Link>
            </div>
          </div>
          <Menu.Button
            className={"lg:hidden inline-flex items-center justify-center"}
            data-aos="intro-animate"
          >
            <span className="sr-only">Navigation Menu</span>
            <label className="hamburger *:transition-all *:duration-500 *:ease-out relative size-4 cursor-pointer flex flex-col items-end justify-center gap-1">
              <div
                className={`w-full h-0.5 rounded-md ${
                  animateNav || open
                    ? "bg-primary-700 dark:bg-primary-400"
                    : "bg-primary-900 dark:bg-primary-200"
                } ${open && "-rotate-45 "}`}
              />

              <div
                className={`w-full h-0.5 rounded-md ${
                  animateNav || open
                    ? "bg-primary-700 dark:bg-primary-400"
                    : "bg-primary-900 dark:bg-primary-200"
                } ${open ? "rotate-45 -translate-y-1.5" : ""}`}
              />
            </label>
          </Menu.Button>

          <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
            {navigation.map((item, i) => (
              <div
                key={item.name}
                data-aos="intro-animate"
                data-aos-delay={i * 50}
              >
                <Link
                  href={item.href}
                  className="transition-all duration-300 ease-out relative text-sm font-bold leading-4 text-slate-700 dark:text-slate-300 hover:text-primary-700 hover:dark:text-primary-400 after:transition-[width] after:duration-300 after:ease-out after:bg-primary-500 after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 hover:after:w-full outline-none focus-visible:after:w-full focus-visible:text-primary-700 dark:focus-visible:text-primary-400 active:after:w-2/3"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex-1 hidden lg:flex items-center justify-end gap-x-3 relative">
            <div data-aos="intro-animate" data-aos-delay="50">
              <Link
                href="/#contact"
                className="transition-all duration-300 ease-out flex items-center gap-x-2 text-sm font-semibold leading-6 text-primary-100 bg-gradient-to-b from-primary-400 via-primary-600 to-primary-800 dark:from-primary-600 dark:via-primary-800 dark:to-primary-950 rounded-full px-4 py-2 group shadow-md outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100 dark:focus-visible:ring-offset-slate-900 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-400 hover:-translate-y-0.5 active:transform-none"
              >
                <RiQuestionAnswerLine className="size-6" />
                Contact
              </Link>
            </div>
            <PaletteSwitch />
            <ThemeSwitch />
          </div>
        </div>

        <div className="relative w-full lg:hidden">
          <Transition
            as={Fragment}
            beforeEnter={() => setOpen(true)}
            enter="transition-all ease-in-out duration-700"
            enterFrom="h-0 opacity-50 pt-0 blur-sm"
            enterTo="h-72 opacity-100 pt-3 blur-none"
            leave="transition-all ease-in-out duration-700"
            leaveFrom="h-72 opacity-100 pt-3 blur-none"
            leaveTo="h-0 opacity-50 pt-0 blur-sm"
            beforeLeave={() => setOpen(false)}
          >
            <Menu.Items
              static
              className="relative h-72 pt-3 w-full overflow-scroll outline-none"
            >
              <div>
                <div className="flex flex-col justify-between w-full text-xl px-2 gap-y-5">
                  {navigation.map((item, i) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <Link
                          href={item.href}
                          className={`${
                            active
                              ? "text-primary-700 dark:text-primary-400 after:w-full"
                              : "text-slate-700 dark:text-slate-300 after:w-0"
                          } transition-all duration-300 ease-out w-fit relative text-sm font-bold leading-6 after:transition-[width] after:duration-300 after:ease-out after:bg-primary-500 after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/#contact"
                        className={`${
                          active
                            ? "ring-2 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900 ring-primary-600 dark:ring-primary-400"
                            : ""
                        } transition-all duration-300 ease-out w-fit flex items-center text-sm font-medium leading-6 text-primary-100 bg-gradient-to-b bg-[length:200%_200%] bg-bottom hover:bg-top active:bg-center from-primary-500 via-primary-700 to-primary-900 border-2 border-primary-600 dark:border-primary-800 rounded-xl px-4 py-1 group shadow-md outline-none hover:-translate-y-0.5 active:transform-none`}
                      >
                        <PiChatCircleDotsDuotone
                          className="size-4 mr-1"
                          aria-hidden="true"
                        />
                        Contact
                      </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={
                          (active
                            ? "ring-2 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900 ring-primary-600 dark:ring-primary-400"
                            : "") + " w-fit rounded-xl"
                        }
                      >
                        <ThemeSwitch />
                      </div>
                    )}
                  </Menu.Item>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </div>
      </Menu>
    </header>
  );
}
