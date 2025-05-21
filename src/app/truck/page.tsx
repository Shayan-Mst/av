"use client"
import Navbar from '@/components/custom/navbar/Navbar'
import Image from 'next/image'
import React, { useState } from 'react'
import Truck from "../../../public/truck.svg"
import app_reg from "../../../public/app_registration.svg"
import ballot from "../../../public/ballot.svg"
import note from "../../../public/info.svg"
import CaptchaInput from '@/components/custom/Captcha/CaptchaInput'
import Footer from '@/components/hompage/Footer'
import DoneModal from '@/components/custom/Modals/Done/DoneModal'

const page = () => {  

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
    <div className='px-[153px] pt-8'>
        <Navbar/>
    </div>
    <div className='px-[173px] m-[10vh] py-16 dark:bg-background-dark rounded-sm'>
         
         {/*introducing truck section*/}
         <div className='flex justify-between gap-x-6'>
            <div className='w-1/2'>
           <h1 className='text-[24px] leading-loose'><span className='text-orange-1'>فراخوان</span> ثبت نام کامیون ها</h1>
           
           <h1 className='text-[24px]'>برای فعالیت در منطقه ویژه بندر امام خمینی</h1>

<p className='text-[16px] pt-6 leading-loose'>به سامانه فراخوان کامیون‌های منطقه ویژه خوش آمدید!</p>
           <p className='text-[16px] leading-loose tracking-wide '>
            
با افتخار اعلام می‌کنیم که شرکت اوستا، به عنوان بهره‌بردار سامانه مدیریت الکترونیکی و هوشمندسازی حمل‌ونقل درون‌بندری اداره کل بنادر و دریانوردی استان خوزستان، فرصتی را برای کامیون‌داران محترم فراهم کرده است تا از ظرفیت‌های موجود در منطقه ویژه بهره‌مند شوند.
در صورتی که قصد فعالیت در این منطقه را دارید، لطفاً فرم زیر را تکمیل و ارسال نمایید. این فرم برای ثبت‌نام غیرحضوری شما طراحی شده است. پس از بررسی و دریافت تأییدیه‌های لازم، نتیجه به شما اطلاع داده خواهد شد.
ما در تلاش هستیم تا با ایجاد بستری هوشمند، شفاف و کارآمد، تجربه‌ای حرفه‌ای و رضایت‌بخش برای شما فراهم کنیم. از همراهی شما سپاسگزاریم و امیدواریم همکاری پرباری داشته باشیم.
           </p>
           </div>
       
        <div className='py-10 my-10 w-1/2'>
            <Image src={Truck} alt='truck'/>
        </div>

         </div>
 <div className='m-6'> 
            <span onClick={()=>setTruck(true)} className={`mx-12 p-6 text-[24px] cursor-pointer ${truck? "border-b-2 border-purpel-6 border-solid" : "opacity-50"}`}> کامیون های <span className={`${truck?"text-orange-1" : ""} `}>پلاک منطقه ویژه </span></span>
            <span onClick={()=>setTruck(false)} className={`mx-12 p-6  text-[24px] cursor-pointer ${truck? "opacity-50" : "border-b-2 border-purpel-6 border-solid"}`}>کامیون‌های <span className={`${truck? "" : "text-orange-1"} `}>پلاک ملی </span></span>
          </div>
 {/*requirements and form VIP truck and national truck section*/}

{truck? 
 <div className='my-8'>
         
          <div className='px-6 py-8 mx-4'>
            <span><Image className='inline mx-2' src={app_reg} alt='register icon'/>شرایط و نحوه ثبت نام</span>
          </div>
          <div className='px-6 mx-6 tracking-wide leading-loose'>
            <p><span className='font-semibold'>مرحله اول :‌</span> ابتدا فرم زیر را تکمیل کرده و اطلاعات را ثبت نمایید.</p>
             <p><span className='font-semibold'>مرحله دوم :‌</span> پس از تايید نهایی توسط دستگاه های نظارتی شرکت اوستا جهت تکمیل فرآیند ثبت نام و تحویل مدارک با مالک کامیون تماس خواهد گرفت </p>
             <p><span className='font-semibold'>مرحله سوم :‌</span> پس از دریافت تاییدیه مدارک مورد نیاز را به دفتر شرکت تحویل دهید. (لیست مدارک در ادامه ذکر شده است.)</p>
            
            <div className='py-4'>
                <span className='text-orange-1'>توجه : </span>

                پلاک کامیون الزامی است و می بایست به نام شرکتی باشد که دارای مجوز از اداره کل بنادر و دریانوردی استان خوزستان است.
            </div>
          </div>
           <div className='px-6 py-8 mx-4'>
            <span><Image className='inline mx-2' src={ballot} alt='required icon'/> مدارک مورد نیاز </span>
          </div>

          <ul className='px-6 list-disc mr-10 leading-loose tracking-wide'>
            <li>کارت پلاک منطقه ویژه (اصل و کپی)</li>
            <li> مدارک اثبات مالکیت شرکت  (اصل و کپی)</li>
            <li> بیمه نامه معتبر شخص ثالث (اصل و کپی)</li>
            <li> نامه درخواست فعالیت به منطقه ویژه  ( کپی)</li>
            <li> گواهی صلاحیت و ایمنی کامیون (اصل و کپی)</li>
            <li> مجوز بهره برداری منطقه ویژه مربوط به کامیون (اصل و کپی)</li>
            <li> اسناد و مدارک شرکت : اساسنامه آگهی تاسیس شرکت و آخرین آگهی تغییرات  (اصل و کپی)</li>
          </ul>

          {/* registeration form */}

         <div className="w-full max-w-6xl mx-auto px-4 py-8  text-right" dir="rtl">
  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    <div>
      <label className="block mb-1 text-sm font-medium">نام شرکت <span className="text-red-500">*</span></label>
      <input required type="text" placeholder="وارد نمایید" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none" />
    </div>
    <div>
      <label className="block mb-1 text-sm font-medium">شناسه ملی شرکت <span className="text-red-500">*</span></label>
      <input required type="text" placeholder="وارد نمایید" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none" />
    </div>

   
    <div>
      <label className="block mb-1 text-sm font-medium">نام و نام‌خانوادگی مدیرعامل <span className="text-red-500">*</span></label>
      <input required type="text" placeholder="وارد نمایید" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none" />
    </div>
    <div>
      <label className="block mb-1 text-sm font-medium">کدملی <span className="text-red-500">*</span></label>
      <input required type="text" placeholder="وارد نمایید" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none" />
    </div>

   
    <div>
      <label className="block mb-1 text-sm font-medium">شماره کارت هوشمند <span className="text-red-500">*</span></label>
      <input required type="text" placeholder="وارد نمایید" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none" />
    </div>
    <div>
      <label className="block mb-1 text-sm font-medium">شماره مجوز بهره‌برداری <span className="text-red-500">*</span></label>
      <input required type="text" placeholder="وارد نمایید" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none" />
    </div>

   
    <div>
      <label className="block mb-1 text-sm font-medium">تاریخ شروع مجوز بهره‌برداری <span className="text-red-500">*</span></label>
      <div className="relative">
        <input required type="date" placeholder='انتخاب نمایید' className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none appearance-none" />
      
      </div>
    </div>
    <div>
      <label className="block mb-1 text-sm font-medium">تاریخ پایان مجوز بهره‌برداری <span className="text-red-500">*</span></label>
      <div className="relative">
        <input required type="date" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none appearance-none" />
      
      </div>
    </div>


 <div>
      <label className="block mb-1 text-sm font-medium">نوع کامیون <span className="text-red-500">*</span></label>
      <select required className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md">
        <option>انتخاب نمایید</option>
        <option>ولوو</option>
        <option>رنو</option>
        <option>ولوو fh500</option>
        <option> اسکانیا </option>
        <option> دانگ فنگ </option>
        <option> سایر موارد </option>
      </select>
    </div>

    
    <div>
      <label className="block mb-1 text-sm font-medium">شماره پلاک کامیون <span className="text-red-500">*</span></label>
      <div className="grid grid-cols-6 gap-2">
        <input type="text" className="dark:bg-white-2 dark:text-black-1 col-span-1 border border-purple-200 p-2 rounded-md" placeholder="---- منطقه ویژه" />
        <input type="text" className="dark:bg-white-2 dark:text-black-1 col-span-1 border border-purple-200 p-2 rounded-md" placeholder="۲۱" />
        <input type="text" className="dark:bg-white-2 dark:text-black-1 col-span-1 border border-purple-200 p-2 rounded-md" placeholder="P.M.O" />
        <input type="text" className="dark:bg-white-2 dark:text-black-1 col-span-3 border border-purple-200 p-2 rounded-md" placeholder="شماره پلاک" />
      </div>
    </div>
   
   
    <div className='col-span-2'>
   <CaptchaInput onChange={setIsCaptchaValid}/>
</div>
     <p className="mt-4 text-sm text-gray-500">
        <Image className='inline mx-2' src={note} alt='note'/>
    خواهشمند است در تکمیل فرم دقت لازم را به عمل آورید و نوع پلاک را به درستی وارد نمایید.
  </p>
    <div className="col-span-2 flex justify-end">

      <button type="submit" className="bg-purple-500 text-white px-6 py-2  rounded-md hover:bg-purple-600">
        ثبت اطلاعات
      </button>
    </div>
  </form>

 
</div>

         </div>

: 


<div className='my-8'>
    
      <div className='px-6 py-8 mx-4'>
            <span><Image className='inline mx-2' src={app_reg} alt='register icon'/>شرایط و نحوه ثبت نام</span>
          </div>
          <div className='px-6 mx-6 tracking-wide leading-loose'>
            <p><span className='font-semibold'>مرحله اول :‌</span> ابتدا فرم زیر را تکمیل کرده و اطلاعات را ثبت نمایید.</p>
             <p><span className='font-semibold'>مرحله دوم :‌</span> پس از تايید نهایی توسط دستگاه های نظارتی شرکت اوستا جهت تکمیل فرآیند ثبت نام و تحویل مدارک با مالک کامیون تماس خواهد گرفت </p>
             <p><span className='font-semibold'>مرحله سوم :‌</span> پس از دریافت تاییدیه مدارک مورد نیاز را به دفتر شرکت تحویل دهید. (لیست مدارک در ادامه ذکر شده است.)</p>
            
            <div className='py-4'>
                <span className='text-orange-1'>توجه : </span>

                پلاک کامیون الزامی است و می بایست به نام شرکتی باشد که دارای مجوز از اداره کل بنادر و دریانوردی استان خوزستان است.
            </div>
          </div>
           <div className='px-6 py-8 mx-4'>
            <span><Image className='inline mx-2' src={ballot} alt='required icon'/> مدارک مورد نیاز </span>
          </div>

          <ul className='px-6 list-disc mr-10 leading-loose tracking-wide'>
            <li> سند مالکیت خودرو (اصل و کپی)</li>
            <li> کارت هوشمند مالک (اصل و کپی)</li>
            <li> کارت هوشمند کامیون (اصل و کپی)</li>
            <li> کارت کامیون ( اصل و کپی پشت و رو )</li>
            <li> گواهی معاینه فنی معتبر (اصل و کپی)</li>
            <li> بیمه نامه معتبر شخص ثالث (اصل و کپی تمام صفحات)</li>
            <li> شناسنامه و کارت ملی مالک (اصل و کپی)</li>
             <li> درخواست فعالیت به اداره کل بنادر و دریانوردی استان خوزستان ( کپی )</li>
          </ul>
 <div className="w-full max-w-6xl mx-auto px-4 py-8  text-right" dir="rtl">
           <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    <div>
      <label className="block mb-1 text-sm font-medium">نام و نام خانوادگی مالک <span className="text-red-500">*</span></label>
      <input required type="text" placeholder="وارد نمایید" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none" />
    </div>
    <div>
      <label className="block mb-1 text-sm font-medium">کد ملی مالک <span className="text-red-500">*</span></label>
      <input required type="text" placeholder="وارد نمایید" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none" />
    </div>

   
    <div>
      <label className="block mb-1 text-sm font-medium">شماره کارت هوشمند کامیون<span className="text-red-500">*</span></label>
      <input required type="text" placeholder="وارد نمایید" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none" />
    </div>
    <div>
      <label className="block mb-1 text-sm font-medium">شماره کارت هوشمند مالک <span className="text-red-500">*</span></label>
      <input required type="text" placeholder="وارد نمایید" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none" />
    </div>



 <div>
      <label className="block mb-1 text-sm font-medium">نوع کامیون <span className="text-red-500">*</span></label>
      <select required className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md">
        <option>انتخاب نمایید</option>
        <option>ولوو</option>
        <option>رنو</option>
        <option>ولوو fh500</option>
        <option> اسکانیا </option>
        <option> دانگ فنگ </option>
        <option> سایر موارد </option>
      </select>
    </div>

    
    <div>
      <label className="block mb-1 text-sm font-medium">شماره پلاک کامیون <span className="text-red-500">*</span></label>
      <div className="grid grid-cols-6 gap-2">
        <input type="text" className="dark:bg-white-2 dark:text-black-1 col-span-1 border border-purple-200 p-2 rounded-md" placeholder="---- منطقه ویژه" />
        <input type="text" className="dark:bg-white-2 dark:text-black-1 col-span-1 border border-purple-200 p-2 rounded-md" placeholder="۲۱" />
        <input type="text" className="dark:bg-white-2 dark:text-black-1 col-span-1 border border-purple-200 p-2 rounded-md" placeholder="P.M.O" />
        <input type="text" className="dark:bg-white-2 dark:text-black-1 col-span-3 border border-purple-200 p-2 rounded-md" placeholder="شماره پلاک" />
      </div>
    </div>
    <div>
      <label className="block mb-1 text-sm font-medium">شماره موبایل مالک <span className="text-red-500">*</span></label>
      <input required type="text" placeholder="وارد نمایید" className="w-full dark:bg-white-2 dark:text-black-1 border border-purple-200 p-2 rounded-md focus:outline-none" />
    </div>
   

   
    
   <CaptchaInput onChange={setIsCaptchaValid}/>

     <p className="mt-4 text-sm text-gray-500">
        <Image className='inline mx-2' src={note} alt='note'/>
    خواهشمند است در تکمیل فرم دقت لازم را به عمل آورید و نوع پلاک را به درستی وارد نمایید.
  </p>
    <div className="col-span-2 flex justify-end">

      <button type="submit" className="bg-purple-500 text-white px-6 py-2  rounded-md hover:bg-purple-600">
        ثبت اطلاعات
      </button>
    </div>
  </form>
  </div>
</div>
}
        
    </div>
     {showModal && <DoneModal messageTitle='اطلاعات شما با موفقیت ثبت شد.' messageBody='پس از بررسی و تأیید، نتیجه از طریق تماس یا پیامک به شما اطلاع داده خواهد شد.' onClose={() => setShowModal(false)} />}
    <Footer/>
    </>
  )
}

export default page