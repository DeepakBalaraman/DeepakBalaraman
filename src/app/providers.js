"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export function Providers({ children }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 350,
    });
  }, []);

  return (
    <ThemeProvider
      enableSystem={true}
      attribute="class"
      // disableTransitionOnChange
      /* Solution is written in theme-switch.js to enable transition for AOS initialization*/
    >
      {children}
    </ThemeProvider>
  );
}
