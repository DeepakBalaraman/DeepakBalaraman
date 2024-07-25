import Link from "next/link";
import TypewriterEffect from "./sub-components/typewriter-effect";
import { RiArrowRightSLine } from "react-icons/ri";

const works = [
  "Build Websites",
  "Design Logos",
  "Edit Videos",
  "Create Animations",
  "Build Apps",
  "Design Icons",
  "Design Posters",
  "Design Social Posts",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full flex min-h-screen flex-col items-center bg-slate-50 dark:bg-slate-950 pt-24"
    >
      <Link
        href="#contact"
        data-aos="intro-animate"
        className="rounded-full px-2 py-1 flex items-center gap-x-2 text-slate-900 dark:text-slate-100 font-medium [background:linear-gradient(45deg,theme(colors.slate.200),theme(colors.slate.100)_50%,theme(colors.slate.200))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.300/.48)_80%,_theme(colors.primary.500)_86%,_theme(colors.primary.700)_90%,_theme(colors.primary.500)_94%,_theme(colors.slate.300/.48))_border-box] dark:[background:linear-gradient(45deg,theme(colors.slate.800),theme(colors.slate.900)_50%,theme(colors.slate.800))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.primary.500)_86%,_theme(colors.primary.300)_90%,_theme(colors.primary.500)_94%,_theme(colors.slate.600/.48))_border-box] border-[1.5px] border-transparent animate-border relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.primary.50/.7)_50%,transparent_75%,transparent_100%)] before:dark:bg-[linear-gradient(45deg,transparent_25%,theme(colors.primary.50/.2)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
      >
        Want to work with me? Let&apos;s talk business!{" "}
        <RiArrowRightSLine className="size-5" />
      </Link>

      <h1 className="pt-20 font-semibold text-3xl md:text-4xl lg:text-6xl text-balance flex flex-col gap-y-5 text-center">
        <span data-aos="intro-animate">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800/80 dark:from-slate-400/80 to-slate-800 dark:to-slate-200">
            Hi, I&apos;m{" "}
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600/80 dark:from-primary-400/80 via-primary-600 dark:via-primary-400 to-primary-600/80 dark:to-primary-600/80 w-fit">
            Deepak
          </span>
          <span className="text-slate-800/80 dark:text-slate-400/80">.</span>{" "}
        </span>
        <span data-aos="intro-animate" data-aos-delay="100">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800/80 dark:from-slate-400/80 to-slate-800 dark:to-slate-200">
            I can
          </span>{" "}
          <span className="sr-only">
            {works.map((work, i) => (
              <div key={work}>
                {work}
                {i < works.length - 2
                  ? ", "
                  : i === works.length - 1
                  ? ""
                  : " and "}
              </div>
            ))}
          </span>
          <TypewriterEffect words={works} />{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-l from-slate-800/80 dark:from-slate-400/80 to-slate-800 dark:to-slate-200">
            for you.
          </span>
        </span>
      </h1>
    </section>
  );
}
