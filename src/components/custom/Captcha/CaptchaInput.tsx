'use client';
import { useState, useEffect } from 'react';
import Refresh from "../../../../public/refresh.svg"
import Image from 'next/image';

const generateCaptcha = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 5; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

export default function CaptchaInput({ onChange }: { onChange: (value: boolean) => void }) {
  const [captcha, setCaptcha] = useState('');
  const [input, setInput] = useState('');

  const refreshCaptcha = () => {
    const newCaptcha = generateCaptcha();
    setCaptcha(newCaptcha);
    setInput('');
    onChange(false); // Reset validation
  };

  useEffect(() => {
    refreshCaptcha();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase();
    setInput(val);
    onChange(val === captcha);
  };

  return (

    
    <div className="relative w-full">
        <label className="block mb-1 text-sm font-medium"> کد امنیتی <span className="text-red-500">*</span></label>
      
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="وارد کنید"
        required
        className="w-full dark:bg-white-1 dark:text-black-1 border border-gray-300 rounded px-4 py-2  text-right"
      />
      <div className="absolute top-2/3 -translate-y-1/2 left-2 flex items-center gap-2">
       <button
          type="button"
          onClick={refreshCaptcha}
          className="text-blue-500 text-xs hover:underline"
        >
          <Image src={Refresh} alt='refresh'/>
        </button>
        <div className="px-4 py-1 bg-gray-200 dark:bg-purpel-8 dark:text-black-1 rounded text-sm tracking-widest select-none">
          {captcha}
        </div>
       
      </div>
    </div>
  );
}
