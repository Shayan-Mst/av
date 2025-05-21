"use client";

import {
  CertificateImages,
  certificates,
} from "@/lib/helper/homepage/certificates";
import Image from "next/image";
import { useState } from "react";


const Certificates = () => {
  const [certificateSelected, setCertificateSelected] = useState<number>(2);
  return (
    <div className="px-[173px] h-[886px]">
      <div className="size-full bg-pink-1 dark:bg-transparent py-[112px] px-[50px] rounded-3xl">
        <div className="rounded-t-3xl bg-pink-3 dark:bg-background-dark w-full h-[482px]">
          {certificates.map((item, index) => {
            return (
              item.id === certificateSelected && (
                <div key={item.id} className="flex px-[96px] relative gap-x-6">
                  <div
                    key={index}
                    className="size-full flex flex-col pt-[96px] text-black-1 dark:text-white-2 gap-y-6"
                  >
                    <span className="text-[26px] font-medium">
                      بخشی از گواهینامه‌ها و افتخارات اوستاهوشیار
                    </span>
                    <div className="text-[20px] text-black-1 dark:text-white-2">
                      <p>{item.info.textOne}</p>
                      <p>{item.info.textTwo}</p>
                      <p>{item.info.textThree}</p>
                    </div>
                  </div>
                  <div className="min-w-[360px] min-h-[512px]  rounded-2xl -mt-[15px] overflow-hidden z-20">
                    <Image src={item.src} alt="certificates" width={100} height={100} className="object-cover size-full " />
                  </div>
                  <img
                    src="/Ellipse.png"
                    className="absolute left-1/4 top-3/4 transform -translate-x-1/2 z-10 pointer-events-none "
                  />
                </div>
              )
            );
          })}
        </div>
        <div className="flex">
          {CertificateImages.map((item) => {
            return (
              <img
                key={item.id}
                src={item.src}
                className="cursor-pointer"
                onClick={() => setCertificateSelected(item.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
