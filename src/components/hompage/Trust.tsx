"use client"
import { useState } from 'react';
import { trustInfo } from '@/lib/helper/homepage/trust';
import TrustCard from '../custom/TrustCard/TrustCard';

interface CardTrust {
  src: string;
  job: string;
  name: string;
  description: string;
}

const Trust = () => {
  const [page, setPage] = useState(0);

  const groupedCards: CardTrust[][] = [];
  for (let i = 0; i < trustInfo.length; i += 3) {
    groupedCards.push(trustInfo.slice(i, i + 3));
  }

  return (
    <div className="px-[173px]">
      <div className="flex flex-col py-6 px-[128px] justify-center items-center gap-6">
        <span className="text-[32px] font-bold text-black-1 dark:text-white-2">
          <span className="text-orange-1">اعتماد </span>
          شما سرمایه ارزشمند ما
        </span>
      </div>

      <div className="flex gap-x-6 mt-8 justify-center items-center transition-all duration-300">
        {groupedCards[page]?.map((item, index) => (
          <TrustCard
            key={index}
            src={item.src}
            job={item.job}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>

{/*paginations*/}
      <div className="flex justify-center gap-2 mt-6">
        {groupedCards.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-colors duration-300 ${
              page === i ? 'bg-gray-700' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Trust;
