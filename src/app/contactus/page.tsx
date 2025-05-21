"use client"
import Navbar from "@/components/custom/navbar/Navbar";
import Footer from "@/components/hompage/Footer";
import Image from "next/image";
import { useState } from "react";
import note from "../../../public/info.svg"
import CaptchaInput from '@/components/custom/Captcha/CaptchaInput'
import location from "../../../public/location.png"
import DoneModal from "@/components/custom/Modals/Done/DoneModal";

const ContactUs: React.FC = () => {
    const [truck,setTruck] = useState(true);
     const [isCaptchaValid, setIsCaptchaValid] = useState(false);
     const [showModal, setShowModal] = useState(false);
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isCaptchaValid) {
          alert('کد امنیتی صحیح نیست.');
          return;
        }
    
        // Proceed with form submission
        
        setShowModal(true)
      };
    

  return (
    <>
     <div className="px-[153px] pt-8">
        <Navbar />
      </div>

   <div className='px-[173px] my-16 mx-[10vh] rounded-sm py-16 dark:bg-background-dark'>
         
       
 <div className='mb-6'> 
            <span onClick={()=>setTruck(true)} className={`mx-12 p-6 text-[24px] cursor-pointer ${truck? "border-b-2 border-purpel-6 border-solid" : "opacity-50"}`}> ارتباط با شرکت </span>
            <span onClick={()=>setTruck(false)} className={`mx-12 p-6  text-[24px] cursor-pointer ${truck? "opacity-50" : "border-b-2 border-purpel-6 border-solid"}`}>ارتباط با مدیر عامل</span>
          </div>
 {/*requirements and form VIP truck and national truck section*/}

{truck? 
 <div className='my-8'>
         
          
          {/* registeration form */}

         <div className="grid grid-cols-3 gap-x-6 w-full max-w-6xl mx-auto px-4 py-8 bg-white dark:bg-background-dark text-right" dir="rtl">
  <form onSubmit={handleSubmit} >
    
    <div className="my-2">
      <label className="block mb-1 text-sm font-medium">نام و نام خانوادگی <span className="text-red-500">*</span></label>
      <input required type="text" placeholder="وارد نمایید" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none" />
    </div>
    <div className="my-2">
      <label className="block mb-1 text-sm font-medium"> آدرس ایمیل </label>
      <input  type="text" placeholder="وارد نمایید" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none" />
    </div>

   
    <div className="my-2">
      <label className="block mb-1 text-sm font-medium">شماره همراه<span className="text-red-500">*</span></label>
      <input required type="text" placeholder="وارد نمایید" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none" />
    </div>
    
  
   <div className="my-2">
      <label className="block mb-1 text-sm font-medium">متن پیام<span className="text-red-500">*</span></label>
      <textarea rows={4}  placeholder="وارد نمایید" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none" />
    </div>
   

   
    <div >
   <CaptchaInput onChange={setIsCaptchaValid}/>
</div>
    
    <div className="flex w-full my-8">

      <button type="submit" className="bg-purple-500 text-white px-6 py-2 w-full  rounded-md hover:bg-purple-600">
       ارسال پیام
      </button>
    </div>
  </form>
<div className="col-span-2 relative">
  <Image className="max-h-[510px]   object-contain" src={location} alt="location"/>
  <div className="absolute right-28 bottom-12 text-[14px] leading-loose">
    <p>دفتر تهران</p>
    <p>
طرشت ، مترو دانشگاه شریف خ تیموری</p>

<p>
   نرسیده به اتوبان یادگار امام کوچه عموزاده،  پ ۸ واحد ۲  
</p>

<div>

<span> تلفن : 021-66055124</span>
<span className="mr-8"> فکس : 021-66055124</span>

</div>
  </div>
</div>
</div>

         </div>

: 
<div className='my-8'>

          <div className='px-6 mx-6 py-6 tracking-wide leading-loose'>
           <p className="font-semibold"> مجموعه اوستا هوشیار همواره بر ارائه خدمات با کیفیت و جلب رضایت همکاران و مشتری تاکید دارد. </p>
             <p> 
             
 در همین راستا، مدیرعامل شرکت آماده دریافت پیشنهادات، انتقادات و نظرات ارزشمند شماست.شما می‌توانید پیام خود را جهت اطلاع‌رسانی به مدیریت شرکت ارسال نمایید. 

             </p> 

             <p className="mt-8">
             
             <Image className="inline ml-2" src={note} alt="note"/>

     در صورت عدم وارد کردن اطلاعات تماس، پیام شما به‌صورت ناشناس ارسال خواهد شد.
             </p>
             <p>
        <Image className="inline ml-2" src={note} alt="note"/>
          در صورت وارد کردن اطلاعات تماس، پیام شما جنبه ارتباط مستقیم خواهد داشت و در اسرع وقت بررسی و پاسخ داده خواهد شد.
             </p>
          
          </div>
        

         
 <div className="w-full max-w-6xl mx-auto px-4 py-8 bg-white dark:bg-background-dark text-right" dir="rtl">
           <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    <div>
      <label className="block mb-1 text-sm font-medium">نام  <span className="text-gray-500 mr-1">(اختیاری)</span></label>
      <input  type="text" placeholder="وارد نمایید" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none" />
    </div>
    <div>
      <label className="block mb-1 text-sm font-medium"> نام خانوادگی<span className="text-gray-500 mr-1">(اختیاری)</span></label>
      <input  type="text" placeholder="وارد نمایید" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none" />
    </div>

   
    <div>
      <label className="block mb-1 text-sm font-medium"> شماره موبایل<span className="text-gray-500 mr-1">(اختیاری)</span></label>
      <input  type="text" placeholder="وارد نمایید" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none" />
    </div>
    <div>
      <label className="block mb-1 text-sm font-medium"> آدرس ایمیل <span className="text-gray-500 mr-1">(اختیاری)</span></label>
      <input  type="text" placeholder="وارد نمایید" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none" />
    </div>


    <div className="col-span-2">
      <label className="block mb-1 text-sm font-medium">متن پیام<span className="text-gray-500 mr-1">(اختیاری)</span></label>
      <textarea rows={4}  placeholder="وارد نمایید" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none" />
    </div>
   

   
    <div className="col-span-2">
   <CaptchaInput onChange={setIsCaptchaValid}/>
</div>
   
    <div className="col-span-2 flex justify-end">

      <button type="submit" className="bg-purple-500 text-white px-6 py-2  rounded-md hover:bg-purple-600">
         ارسال پیام
      </button>
    </div>
  </form>
  </div>
</div>
}
        
    </div>
    {showModal && <DoneModal messageTitle='اطلاعات شما با موفقیت ثبت شد.' messageBody='بابت پیام شما متشکریم! در اسرع وقت پیگیری خواهد شد.' onClose={() => setShowModal(false)} />}

    <Footer/>
    </>
  );
};

export default ContactUs;
