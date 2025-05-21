"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

interface IProps {
  src: string;
  job: string;
  name: string;
  description : string;
}
 
const TrustCard: React.FC<IProps> = ({ src,job,name,description }) => {

 const [isDark, setIsDark] = useState<boolean>();

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`w-[394px] h-[316px] p-6 bg-pink-1  rounded-3xl border-r dark:border-r-white-2 border-r-purpel-4 flex flex-col gap-y-4 ${isDark?"background-card":""}`}>
      <div className="flex justify-start items-start gap-y-6 gap-x-6">
        <div className="p-2 relative w-[72px] h-[72px]">
          <Image className="rounded-full object-cover" src={src} alt={name} fill/>
        </div>
        <div className=" flex flex-col gap-y-4">
            <p className="text-[16px] text-black-1 dark:text-white-2">{job}</p>
             <p className="text-[14px] text-black-1 dark:text-white-2 "> جناب آقای <span className="text-orange-1"> {name}</span> </p>
            </div>
        
      </div>

      <div className="w-9/10 bg-purpel-5  h-[1px]"></div>

      <div>
       <p className="text-black-1 dark:text-white-2">
        "{description}"
       </p>
      </div>
     
    </div>
  );
};

export default TrustCard;
