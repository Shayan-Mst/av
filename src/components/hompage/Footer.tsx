"use client"
import { menu } from "@/lib/helper/navbar";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
 const [isDark , setIsDark] = useState(false)
    useEffect(() => {
          const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains('dark'));
          });
      
          observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
      
          return () => observer.disconnect();
        }, []);
  

  return (
    <div>
      <div className="w-full  relative">
        <img src="/videoContainer.png" className="size-full " />
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[36px] text-black-1 custom-text-shadow">
          <span className="text-orange-1 ">مدیریت</span> با داده{" "}
          <span className="text-orange-1">جابجایی</span> با هوش
        </span>
      </div>
      <div
        className="h-[620px] w-full pt-12 px-[175px]"
        style={isDark?{backgroundImage: 'url("/footer-dark.svg")'}:{ backgroundImage: 'url("/footer.png")' }}
      >
        <div className="flex  gap-x-[424px] h-[427px]">
          <div className="flex flex-col gap-y-8 h-full">
            <div className="w-[132px] h-[76px] pl-[6px]">
              <img src="/logo.svg" className="size-full" />
            </div>
            <div className="flex  w-full gap-x-6">
              <div className="w-1/3 text-[18px] text-black-1 dark:text-white-2">
                <span className="text-orange-1">منو</span>
                <div className="flex flex-col mt-8">
                  {menu.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        href="/#"
                        className="hover:text-orange-1"
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="w-1/3  text-[18px] text-black-1 dark:text-white-2">
                <span className="text-orange-1">دفتر تهران</span>
                <div className="mt-8">
                  <p>
                    دفتر تهران طرشت ، مترو دانشگاه شریف خیابان تیموری نرسیده به
                    اتوبان یادگار امام کوچه عموزاده، پ۸ واحد۲
                  </p>
                  <span>تلفن : 66055124 - 021</span>
                </div>
              </div>
              <div className="w-1/3  text-[18px] text-black-1 dark:text-white-2">
                <span className="text-orange-1">دفتر خوزستان</span>
                <div className="mt-8">
                  <p>
                    دفتر خوزستان بندرامام خمینی (ره) اداره کل بنادر و دریانوردی
                    ، مجتمع بندری امام خمینی (ره) اسکله 20
                  </p>
                  <span>تلفن : 66055124 - 021</span>
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-[210px] relative ">
            <span className="text-orange-1 text-[22px] font-medium absolute -right-10 top-5">
              دفتر تهران
            </span>
            <span className="text-orange-1 text-[22px] font-medium absolute bottom-10 left-14">
              دفتر خوزستان
            </span>
          </div>
        </div>
        <div className="h-px bg-purpel-5 my-[49px]"></div>
        <div className="flex justify-between">
          <div className="flex flex-row-reverse gap-4">
            <img src="/youtube.png" className="cursor-pointer" />
            <img src="/instagram.png" className="cursor-pointer" />
            <img src="/linkedin.png" className="cursor-pointer" />
          </div>
          <span dir="ltr" className="">
            AvestaSmart @ 2025. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
