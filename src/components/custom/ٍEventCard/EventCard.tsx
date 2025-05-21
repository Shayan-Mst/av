import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
interface IProps {
  src: string;
  title: string;
  description : string;
}
const EventCard :  React.FC<IProps> = ({ src,title,description })  => {
  return (
       <div className=" w-[741px] h-[483px]  flex flex-col gap-y-4">
          <div className="flex justify-center items-center gap-y-6">
            <div className="p-2 relative w-4/7 h-[454px]">
              <Image className="object-cover rounded-xl flex " src={src} alt={title} fill/>
            </div>
            <div className=" flex flex-col bg-pink-3 dark:bg-purpel-3  gap-y-4 w-3/7 h-[483px] p-12 rounded-xl shadow-2xl break-words">
                <p className="text-[22px] text-black-1 dark:text-white-2">{title}</p>
                 <div className=" bg-purpel-5  h-[1px]"></div>
                 
           <p className="text-[12px] text-black-1 dark:text-white-2 break-keep leading-relaxed text-justify mt-2 mb-6">
            {description}
           </p>
           {/*news detail*/}
         <Link href="/" className='bg-pink-3 dark:bg-purpel-3  dark:text-white-2 px-3 py-2 rounded-[32px] flex justify-center items-center gap-x-4 border border-purpel-6 text-purpel-6 cursor-pointer'>
            
             <svg className='dark:fill-white-2' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.8125 4.175H1.275C1.0875 4.175 0.925 4.1125 0.7875 3.9875C0.6625 3.85 0.6 3.6875 0.6 3.5C0.6 3.3125 0.6625 3.15625 0.7875 3.03125C0.925 2.89375 1.0875 2.825 1.275 2.825H8.8125L7.3125 1.325C7.175 1.1875 7.10625 1.03125 7.10625 0.85625C7.10625 0.66875 7.175 0.50625 7.3125 0.368749C7.45 0.231249 7.60625 0.162499 7.78125 0.162499C7.96875 0.162499 8.13125 0.231249 8.26875 0.368749L10.9313 3.03125C10.9938 3.09375 11.0375 3.16875 11.0625 3.25625C11.1 3.33125 11.1188 3.4125 11.1188 3.5C11.1188 3.5875 11.1 3.675 11.0625 3.7625C11.0375 3.8375 10.9938 3.90625 10.9313 3.96875L8.26875 6.63125C8.13125 6.76875 7.975 6.8375 7.8 6.8375C7.625 6.825 7.46875 6.75 7.33125 6.6125C7.19375 6.475 7.125 6.31875 7.125 6.14375C7.125 5.95625 7.19375 5.79375 7.33125 5.65625L8.8125 4.175Z" fill="#50007F"/>
</svg>

            
            مشاهده جزئیات خبر

           
         </Link>
                </div>
            
          </div>
    
         
    
         
         
        </div>
  )
}

export default EventCard