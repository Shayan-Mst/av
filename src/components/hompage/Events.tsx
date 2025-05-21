import { eventInfo } from '@/lib/helper/homepage/events'
import React from 'react'
import EventCard from '../custom/ٍEventCard/EventCard'
import Image from 'next/image'
import senf from "../../../public/senf.jpg"
import kargar from "../../../public/kargar.jpg"

const Events = () => {
  return (
     <div className="px-[173px] relative">
      <div className="flex flex-col py-6 px-[128px] justify-center items-center gap-6">
        <span className="text-[32px] font-bold text-black-1 dark:text-white-2">
          نگاهی به 
          <span className="text-orange-1"> رویدادهای  </span>
          مهم اوستا هوشیار
        </span>
      </div>

       <div className="flex  mt-8 justify-between  items-center transition-all duration-300">

{/*FIRST side news */}
        <div className='flex items-center self-center align-center'>
          <div className='w-[70px] h-[407px] pr-4  writing-vertical text-center bg-pink-3 dark:bg-purpel-3  rounded-tr-[16px] rounded-br-[16px]'>اخذ مجوز از سازمان نظام صنفی</div>
          <div><Image src={senf} alt='whatever' className='w-[159px] h-100 object-cover'/></div>
        </div>

{/*main news */}
        {eventInfo?.map((item, index) => (
          <EventCard
            key={index}
            src={item.src}
            title={item.title}
            description={item.description}
          />
        ))}
        {/*second side news*/}
        <div className='flex justify-center items-center'>


          <div><Image src={kargar} alt='whatever' className='w-[159px] h-100 object-cover'/></div>
          <div className='w-[70px] h-[407px] pr-4 writing-vertical text-center bg-pink-3 dark:bg-purpel-3  rounded-tl-[16px] rounded-bl-[16px]'>مراسم بزرگداشت روز کارگر</div>

        </div>
      </div>

    </div>
  )
}

export default Events









