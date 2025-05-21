
"use client"
import About from "@/components/hompage/About";
import Achivement from "@/components/hompage/Achivement";
import Certificates from "@/components/hompage/Certificates";
import Events from "@/components/hompage/Events";
import Footer from "@/components/hompage/Footer";
import Hero from "@/components/hompage/Hero";
import NextStep from "@/components/hompage/NextStep";
import Services from "@/components/hompage/Services";
import Trust from "@/components/hompage/Trust";
import Image from "next/image";
import { useEffect, useState } from "react";
import Collab from "../../public/Collaborations.png"
import collabDark from "../../public/Collaborations-dark.png"

export default function Home() {
  const [isDark, setIsDark] = useState<Boolean>();

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="size-full flex flex-col gap-y-[144px] bg-cover bg-center bg-repeat  dark:bg-[url('./../../public/BG1.png')]">
      <div>
        <Hero />
        <Services />
      </div>
      <About />
      <Achivement />
      <NextStep />
      <div>
        <Image src={isDark? collabDark : Collab} alt="gg"/>
      </div>
      <Trust/>
      <Events/>
      <Certificates />
      
      <Footer />
    </div>
  );
}
