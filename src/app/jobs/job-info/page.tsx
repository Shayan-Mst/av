import Navbar from '@/components/custom/navbar/Navbar'
import Footer from '@/components/hompage/Footer'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
   <>
   
     <div className='px-[153px] pt-8'>
        <Navbar/>
    </div>

    <div dir="rtl" className="px-6 py-[48px] my-[10vh] rounded-sm max-w-4xl mx-auto text-gray-800 dark:bg-white-2">
      <h2 className="text-md sm:text-lg font-medium mb-4 border-b-2 border-purple-300 pb-1">
        اطلاعات موقعیت شغلی <span className="font-semibold text-gray-900">کارشناس Devops</span>
      </h2>

      {/* شاخص‌های کلیدی */}
      <h3 className="text-sm sm:text-base font-semibold text-purpel-5 mb-2">شاخص‌های کلیدی</h3>
      <ul className="text-sm space-y-1 mb-6 list-disc pr-5">
        <li>۳ سال سابقه کار در گروه شغلی مشابه</li>
        <li>شرح شغل و وظایف</li>
        <li>شرح موقعیت شغلی</li>
        <li>مشخصات عمومی</li>
        <li>توانایی رویت‌گری، ارزیابی</li>
        <li>تعهد و اخلاق حرفه‌ای</li>
        <li>مسئولیت پذیری، پیگیری و حصول نتیجه وظایف</li>
        <li>داشتن روحیه علاقه‌مندی به رشد علمی و توسعه فردی</li>
      </ul>

      {/* مشخصات تخصصی */}
      <h3 className="text-sm sm:text-base font-semibold text-purpel-5 mb-2">مشخصات تخصصی</h3>
      <ul className="text-sm space-y-1 mb-6 list-disc pr-5">
        <li>مسلط به لینوکس در حد LPIC1 و LPIC2</li>
        <li>مسلط به مفاهیم و ابزارهای CI/CD مانند GitLab CI</li>
        <li>مسلط به Docker و راه‌حل‌های Containerization</li>
        <li>آشنا با راه‌حل‌های Container Orchestration مانند OpenShift و Kubernetes</li>
        <li>آشنا با مفاهیم و ابزارهای مانیتورینگ مانند Prometheus/Grafana</li>
        <li>آشنا با مفاهیم و ابزارهای Log Management</li>
        <li>آشنا با مفاهیم امنیت و نحوه امن‌سازی سرویس‌ها</li>
        <li>آشنا با مفاهیم اولیه برنامه‌نویسی و به‌ویژه تجربه برنامه‌نویسی با Python یا Shell Script</li>
      </ul>

      {/* شرایط احراز شغل */}
      <h3 className="text-sm sm:text-base font-semibold text-purpel-5 mb-2">شرایط احراز شغل</h3>
      <ul className="text-sm space-y-1 mb-8 list-disc pr-5">
        <li>سن: ۲۲ - ۴۰ سال</li>
        <li>جنسیت: فرقی ندارد</li>
        <li>خدمت سربازی: اتمام خدمت سربازی یا معافیت از آن الزامی است</li>
        <li>تحصیلات: کارشناسی/کارشناسی‌ارشد در کامپیوتر / فناوری اطلاعات</li>
      </ul>

      {/* Button */}
      <div className="text-left">
        <Link href="/jobs/job-info/job-hire" className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-6 py-2 rounded text-sm">
          ثبت درخواست
        </Link>
      </div>
    </div>

<Footer/>
   </>
  )
}

export default page