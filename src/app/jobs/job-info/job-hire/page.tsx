"use client"
import DoneModal from '@/components/custom/Modals/Done/DoneModal';
import Navbar from '@/components/custom/navbar/Navbar'
import Footer from '@/components/hompage/Footer';
import React, { useState } from 'react'

const page = () => {

 const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    degree: '',
    experience: '',
    description: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // You can replace this with an actual API call
    setShowModal(true)
  };

  return (
    <>
    
      <div className='px-[153px] pt-8'>
        <Navbar/>
    </div>


      <div dir="rtl" className="max-w-4xl mx-auto p-16 rounded-md my-[15vh] text-gray-800 dark:bg-background-dark">
      <h2 className="text-md sm:text-lg font-medium mb-6 border-b-2 border-purple-300  dark:text-white-2 pb-1">
        فرم استخدام <span className="font-semibold text-gray-900 dark:text-white-2">کارشناس Devops</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-white-2">نام و نام‌خانوادگی <span className="text-red-500">*</span></label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              className="w-full dark:bg-white-2 dark:text-black-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="وارد نمایید"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1  dark:text-white-2">ایمیل <span className="text-red-500">*</span></label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              required
              className="w-full dark:bg-white-2 dark:text-black-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="وارد نمایید"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1  dark:text-white-2">شماره موبایل <span className="text-red-500">*</span></label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full dark:bg-white-2 dark:text-black-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="وارد نمایید"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1  dark:text-white-2">آخرین مدرک تحصیلی <span className="text-red-500">*</span></label>
            <input
              name="degree"
              value={form.degree}
              onChange={handleChange}
              required
              className="w-full dark:bg-white-2 dark:text-black-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="وارد نمایید"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1  dark:text-white-2">میزان سابقه <span className="text-red-500">*</span></label>
            <input
              name="experience"
              value={form.experience}
              onChange={handleChange}
              required
              className="w-full dark:bg-white-2 dark:text-black-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="وارد نمایید"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-1  dark:text-white-2">
              درباره خود و تجربیات شغلی‌تان بنویسید <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              className="w-full dark:bg-white-2 dark:text-black-1 border border-gray-300 rounded px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="وارد نمایید"
            />
          </div>
        </div>

        <div className="text-left">
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-6 py-2 rounded text-sm"
          >
            ارسال درخواست
          </button>
        </div>
      </form>
    </div>
 {showModal && <DoneModal messageTitle='اطلاعات شما با موفقیت ثبت شد.' messageBody='پس از بررسی و تأیید، نتیجه از طریق تماس یا پیامک به شما اطلاع داده خواهد شد.' onClose={() => setShowModal(false)} />}
<Footer/>

    </>
  )
}

export default page