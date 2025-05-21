"use client"
import Navbar from '@/components/custom/navbar/Navbar'
import Footer from '@/components/hompage/Footer';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import historyFrame from "../../../public/Frame 237.svg"

const Page = () => {

  const [side,setSide] = useState(true);

   const [isDark, setIsDark] = useState<boolean>();

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <div className={`${isDark? "about-background-dark" : "about-background-light"}`}>
    <div className="px-[153px] pt-8">
      <Navbar/>
    </div>
     </div>

     <div className='px-[173px] dark:bg-background-dark'>
      <button className={`w-1/2 bg-pink-4 dark:bg-purpel-3 py-4 rounded-tr-[24px] transition ease-in duration-200  ${side?"opacity-100":"opacity-50"}`}
     onClick={()=>setSide(true)} >درباره <span className={`${side?"text-orange-1":""}`}>اوستا</span> هوشبار
      
      </button>
      <button className={`w-1/2 bg-pink-4 dark:bg-purpel-3 py-4 rounded-tl-[24px] transition ease-in duration-200 ${side?"opacity-50":"opacity-100"}`} 
      onClick={()=>setSide(false)}>تاریخچه <span className={`${side?"":"text-orange-1"}`}>اوستا</span> هوشبار</button>

     {side? 
     <div className='p-12 pb-24 mb-[32px] bg-white-1 dark:bg-background-dark'>
        <h6 className='text-orange-1 text-[22px] py-4'>معرفی شرکت </h6>
        <p className='leading-loose'>شرکت اوستا بار بندر به عنوان یکی از پیشگامان حوزه حمل و نقل و لجستیک در ایران، با تکیه بر دانش بومی و بهره‌گیری از تکنولوژی‌های نوین، خدمات هوشمندسازی حمل و نقل چندوجهی را در بالاترین سطح ارائه می‌دهد. این شرکت با سابقه‌ای درخشان که ریشه در تاسیس شرکت تخلیه و بارگیری قرمیز در سال ۱۳۵۷ دارد، فعالیت خود را در سال ۱۳۹۵ با رویکردی خلاقانه و دانش‌بنیان در زمینه مدیریت الکترونیکی و هوشمندسازی حمل و نقل آغاز کرد. اوستا بار بندر با سرمایه‌گذاری در زیرساخت‌های شبکه، تولید نرم‌افزار، تامین تجهیزات و آموزش نیروی انسانی متخصص، نقش مهمی در توسعه بنادر و ارتقای سطح خدمات لجستیکی کشور ایفا نموده است. با تمرکز بر حمل و نقل چندوجهی و استفاده از فناوری‌هایی همچون اینترنت اشیا (IoT) و هوش مصنوعی (AI)، این شرکت توانسته مجتمع بندری امام خمینی را به یکی از بنادر نسل چهارم نزدیک سازد و به بهبود امنیت کالا، شفافیت و چابکی در فرآیندهای حمل و نقل کمک نماید.
</p>

 <h6 className='text-orange-1 text-[22px] py-4'> ماموریت </h6>
       <p className='leading-loose'>ارائه خدمات یکپارچه و پیشرفته لجستیکی برای صادرات محصولات کشاورزی و پتروشیمی، با تمرکز بر هماهنگی میان بخش دولتی و خصوصی، استفاده از فناوری‌های نوین و سیستم‌های ردیابی پیشرفته، به منظور بهینه‌سازی حمل‌ونقل و گمرک، و ارائه راه‌حل‌های سفارشی برای انواع مختلف کالاها، به ویژه محصولات کشاورزی فاسدشدنی.

</p>
 <h6 className='text-orange-1 text-[22px] py-4'> چشم‌انداز </h6>
       <p className='leading-loose'>تبدیل شدن به پیشروترین ارائه‌دهنده خدمات لجستیک و حمل‌ونقل برای صادرات محصولات کشاورزی و پتروشیمی در سطح کشور و منطقه، با بهره‌گیری از نوآوری‌های فناوری و ایجاد سیستم‌های هوشمند که کارایی و سرعت عملیات را به طور قابل توجهی افزایش دهد، و با ایجاد راه‌حل‌های سفارشی برای هر نوع کالا، از جمله محصولات حساس به زمان و شرایط</p>
      </div>
     :
     <div className='px-[173px] my-12'>
      <Image src={historyFrame} alt='frame'/>
     </div>
    
     } 
     </div>

     <Footer/>
    
    </>
  )
}

export default Page