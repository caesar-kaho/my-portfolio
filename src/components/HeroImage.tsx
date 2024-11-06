"use client";

import logoLight from "public/logo-light.png";
import logoDark from "public/logo-dark.png";
import Image from "next/image"
import { useTheme } from "next-themes";



const HeroImage = ()  => {

  const {theme} = useTheme();

    return(
        <>
          <Image
          src={theme === 'dark' ? logoDark : logoLight} // Change image based on theme
          alt="logo"
          loading="eager"
          priority
          height={1000}
          width={1000}
        />
        </>
    )
}
export default HeroImage