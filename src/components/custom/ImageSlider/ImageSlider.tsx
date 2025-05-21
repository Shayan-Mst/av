
import Image from "next/image";
import { useState } from "react";
import arrow_right from "../../../../public/arrow-right.svg"
import arrow_left from "../../../../public/arrow-left.svg"


export const ImageSlider = ({ imageUrls , subtitle }: { imageUrls: string[] , subtitle : string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? imageUrls.length - 1 : prev - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === imageUrls.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-[337px] h-[225px]">
      <Image
        fill
        src={imageUrls[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="rounded-md object-cover"
      />
       {subtitle && (
                          <p className="absolute bottom-0 w-full bg-purpel-3 opacity-80 text-white text-sm p-2 py-6 text-center rounded-b-md">
                            {subtitle}
                          </p>
                        )}
      {imageUrls.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white/70 text-black px-2 py-1 rounded"
          >
            <Image src={arrow_left} alt="arrow-left"/>
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-10 top-1/2 -translate-y-1/2 bg-white/70 text-black px-2 py-1 rounded"
          >
            <Image src={arrow_right} alt="arrow-right"/>
          </button>
        </>
      )}
    </div>
  );
};