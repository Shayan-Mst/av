import Image from "next/image";
import React, { useState, useEffect } from "react";
import closed from '../../../../../public/close.svg';
import arrow_left from "../../../../../public/arrow-left.svg"
import arrow_right from "../../../../../public/arrow-right.svg"


interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  description: string;
  subtitle: string;
  imageUrl: string[];
}

const ArchiveModal = ({ isOpen, onClose, description, subtitle, imageUrl }: NewsModalProps) => {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setVisible(true), 50); // Delay for a smoother effect
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageUrl.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === imageUrl.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center  bg-opacity-40 backdrop-blur-[5px] z-50 overflow-auto transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-white rounded-lg shadow-xl p-6 w-full max-w-[1200px] h-auto relative flex flex-col items-center overflow-y-auto max-h-[90vh] transform transition-transform duration-300 ${visible ? 'scale-100' : 'scale-95'}`}>
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 cursor-pointer">
          <Image src={closed} alt="close" width={24} height={24} />
        </button>

        {/* Subtitle */}
        {subtitle &&
         <p className="text-[18px] text-white-2 bg-purpel-3 py-3 px-5 rounded-md text-center w-full max-w-[550px] my-4">
          {subtitle}
        </p>
        }
       

        {/* Image Carousel */}
        {imageUrl.length > 0 && (
          <div className="relative w-full flex justify-center items-center mb-4">
            <div className="relative w-[550px] h-[375px]">
            <Image
              fill
              src={imageUrl[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className="object-cover rounded-lg mx-auto shadow-md  h-auto"
            />
            </div>
            {imageUrl.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute top-1/2 left-12 transform -translate-y-1/2  text-white px-2 py-1 rounded-full"
                >
                  <Image src={arrow_left} alt="left"/>
                </button>
                <button
                  onClick={handleNext}
                  className="absolute top-1/2 right-12 transform -translate-y-1/2  text-white px-2 py-1 rounded-full "
                >
                  <Image src={arrow_right} alt="right"/>
                </button>
              </>
            )}
          </div>
        )}

        {/* Description - Proper line wrapping & scrolling */}
        <h2 className="text-lg font-semibold text-gray-700 pb-16  w-full max-w-[800px] leading-loose break-words">
          {description}
        </h2>
      </div>
    </div>
  );
};

export default ArchiveModal;
