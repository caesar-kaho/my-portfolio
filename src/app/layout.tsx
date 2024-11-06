import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";
import bgImageLight from "../../public/bg-image-light.jpg";
import bgImageDark from "../../public/bg-image-dark.jpg";
import { ThemeProvider } from "@/components/Theme-provider";
import { ModeToggle } from "@/components/ModeToggle";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-kahokwok.vercel.app/"),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "portfolio",
    "web developer",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER ",
    "programmer ",
  ],
  authors: [
    {
      name: "Ka ho Kwok",
      url: "https://github.com/caesar-kaho",
    },
  ],
  creator: "Ka ho Kwok",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <main
            className={cn(
              "flex relative break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 max-sm:pt-20"
            )} 
            // style={{
            //   backgroundImage: `url(${bgImageLight.src})`,
            //   backgroundSize: 'cover',
            //   backgroundRepeat: 'no-repeat',
            //   backgroundPosition: 'center',
            // }}
          >
            {/* NAVBAR ->  */}
            <Navbar />
            <div className="absolute top-7 left-10">
              <ModeToggle />
            </div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
