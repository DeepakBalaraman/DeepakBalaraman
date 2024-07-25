import { Lexend_Deca, Urbanist } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/footer";

const sans = Urbanist({ subsets: ["latin"], variable: "--font-sans" });

const serif = Lexend_Deca({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = {
  title: "Deepak Balaraman | Freelance Designer and Developer",
  description: "Freelance Designer and Developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} !scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-slate-50 dark:bg-slate-950 selection:bg-primary-600/50 selection:text-primary-950 selection:dark:text-primary-50">
        <Providers>
          <NextTopLoader height={2} showSpinner={false} color="#0078d7" />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
