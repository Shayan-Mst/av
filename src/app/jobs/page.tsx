"use client"
import Navbar from '@/components/custom/navbar/Navbar'
import React, { useState } from 'react'
import { job_opp } from '@/lib/helper/job/job'
import Link from 'next/link'
import Footer from '@/components/hompage/Footer'

const page = () => {

  
  return (
    <>
     <div className='px-[153px] pt-8'>
        <Navbar/>
    </div>

    <div dir="rtl" className=" pt-[10vh] pb-[50vh] px-[173px]">
      <div className='px-16'>
      <h2 className="text-lg font-semibold text-gray-800  dark:text-white-2 mb-6 border-b-2 border-purple-300 inline-block pb-1">
        فرصت‌های شغلی
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {job_opp.map((job, idx) => (
          <Link href="/jobs/job-info"
            key={idx}
            
            className={`border dark:bg-white-2 dark:text-black-1 rounded px-4 py-2 text-sm text-center transition-all dark:hover:text-purpel-4 hover:text-purpel-3 hover:border-purpel-4`}
          >
            {job}
          </Link>
        ))}
      </div>
      </div>
    </div>

    <Footer/>
    </>
  )
}

export default page