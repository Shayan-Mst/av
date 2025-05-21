"use client"
import { useEffect, useState } from "react";

interface IProps {
  src: string;
  title: string;
  info: string;
}

const InfoCard: React.FC<IProps> = ({ info, src, title }) => {

  const [isDark, setIsDark] = useState<Boolean>();
  
    useEffect(() => {
      const observer = new MutationObserver(() => {
        setIsDark(document.documentElement.classList.contains('dark'));
      });
  
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  
      return () => observer.disconnect();
    }, []);
  
  return (
    <div className={`w-[267px] h-[316px] p-6 bg-pink-1 dark:bg-background-card  rounded-3xl border-r border-r-purpel-4 flex flex-col gap-y-4 ${isDark?"background-card":""}`}>
      <div className="flex flex-col justify-center items-center gap-y-6">
        <div className="bg-white dark:bg-background-card rounded-full p-2">
          <img src={src} alt={title} />
        </div>
        <span className="text-[20px] text-black-1 dark:text-white-2">{title}</span>
      </div>
      <span className="ps-[35px] text-[18px] text-black-1 dark:text-white-2">{info}</span>
    </div>
  );
};

export default InfoCard;
