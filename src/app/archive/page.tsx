"use client";

import React, { useState } from "react";
import { archiveCards } from "@/lib/helper/archive/archive";
import Navbar from "@/components/custom/navbar/Navbar";
import { ImageSlider } from "@/components/custom/ImageSlider/ImageSlider";
import Footer from "@/components/hompage/Footer";
import ArchiveModal from "@/components/custom/Modals/Archive/ArchiveModal";



const Page = () => {

     const [isOpen, setIsOpen] = useState(false);
      const [selectedNews, setSelectedNews] = useState({
    description: "",
    subtitle: "",
    imageUrl: [] as string[],
  });

    const openModal = (item: typeof archiveCards[number]) => {
    setSelectedNews({
      description: item.description,
      subtitle: item.subtitle || "",
      imageUrl: item.imageUrls,
    });
    setIsOpen(true);
  };


  return (
    <>
      <div className="px-[153px] pt-8">
        <Navbar />
      </div>
      <section
        dir="rtl"
        className="max-w-5xl mx-auto p-16 my-[10vh] text-gray-800 dark:bg-background-dark"
      >
        <h2 className="text-md dark:text-white-2 sm:text-lg font-medium mb-6 border-b-2 border-purple-300 pb-1 w-fit">
          اوستا در قاب تصویر
        </h2>

        <div className="space-y-5">
          {archiveCards.map((item, idx) => (
            <div
              key={idx}
               onClick={() => openModal(item)}
              className="flex items-center dark:bg-white-1 justify-between border rounded-lg border-purple-300 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center w-full justify-between py-4 px-8">
               
                <div className="px-4">
                  <p className="font-medium text-sm sm:text-base">
                    {item.title}
                  </p>
                 
                </div>
                 <div className="relative">
                  <ImageSlider imageUrls={item.imageUrls} subtitle={item.subtitle} />
                  

                </div>
              </div>
              <div className="px-4 text-purple-600">{/* Link or action */}</div>
            </div>
          ))}
        </div>
      </section>

 <ArchiveModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        description={selectedNews.description}
        subtitle={selectedNews.subtitle}
        imageUrl={selectedNews.imageUrl}
      />
      <Footer/>
    </>
  );
};

export default Page;
