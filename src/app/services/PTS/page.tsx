"use client"
import { servicesData } from '@/lib/helper/services/services';
import Navbar from '@/components/custom/navbar/Navbar';
import Footer from '@/components/hompage/Footer';
import Image from 'next/image';
import servicesSvg from "../../../../public/services.svg"
import { usePathname } from "next/navigation";

export default function page() {

    
const pathname = usePathname(); // e.g. "/services/PTS"
const activeType = pathname.split("/")[2]; // e.g. "PTS"
  
const targetType = "PTS";

const targetItem = servicesData.find(item => item.type === targetType);

const reordered = targetItem
  ? [targetItem, ...servicesData.filter(item => item.type !== targetType)]
  : servicesData; // fallback to original if not found


  return (
    <>
    <div className='px-[153px] pt-8'>
        <Navbar/>
    </div>

    <div className="px-[173px] flex flex-row gap-4 p-4 my-12 rounded-xl">
      {/* Right side menu */}
      <div className="w-2/5  pr-4 flex flex-col ">
    {reordered.map((item, index) => {
      const isActive = item.type === activeType;

      return (
        <button
          key={index}
          className={`text-right px-4  rounded-lg transition-all duration-300 `}
        >
          <div className={`flex items-center gap-x-2 ${isActive?"":"opacity-50"}`}>
            <Image
              src={isActive ? item.svg_pr : item.svg_sec}
              width={45}
              height={100}
              alt={item.type}
            />
            {isActive? <div className="mt-8">{item.label}</div>: <div className="mb-4">{item.label}</div>}
          </div>
        </button>
      );
    })}

      </div>

      {/* Left side content */}
      <div className="w-3/5 px-4 py-14">
        <ul className="list-disc pr-5 text-right space-y-2">
           { 
            reordered[0].content.map((item,index)=>(
                <li key={index}>{item}</li>
            ))
           
          } 
        </ul>
        {/* Illustration placeholder */}
        <div className="mt-16 flex items-center justify-center">
          <Image src={servicesSvg} width={503} height={283} alt='service'/>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
}
