import Navbar from "@/components/custom/navbar/Navbar";
import ShipingCard from "@/components/custom/ShipingCard";
const Hero = () => {
  return (
    <div className="size-full pt-8 relative flex flex-col gap-y-6">
      <div>
        <div className=" absolute top-0 left-0 ">
          <img src="/lines-left.png" alt="lines" />
        </div>
        <div className="px-[153px]">
          <Navbar />
        </div>
        <div className=" absolute top-0 right-0 ">
          <img src="/lines-right.png" alt="lines" />
        </div>
      </div>
      <div className="flex flex-col gap-y-6 justify-center items-center pt-16 px-[305px]">
        <p className="flex flex-col justify-between items-center h-[136px] ">
          <span className="text-5xl font-extrabold text-purpel-1 dark:text-white-1">
            سامانه مدیریت الکترونیکی و هوشمند{" "}
            <span className="text-orange-2 text-5xl font-extrabold">
              اَوستا
            </span>
          </span>
          <span className="text-4xl text-purpel-1 dark:text-white-1 font-bold ">
            ارائه خدمات پیشرفته حمل و نقل کالا و لجستیک
          </span>
        </p>

        <span className="text-purpel-2 dark:text-white-2 text-base font-normal leading-[26px]">
        نخستین شرکت خلاق در دفتر معاونت علمی و فناوری ریاست جمهوری
        </span>
        <span className="text-orange-3 text-base font-normal leading-[26px]">
          عارضه‌یابی، تولید، مشاوره ، پیاده‌سازی و پشتیبانی
        </span>
      </div>
      <div className="size-full px-[345px] dark:text-white-2 z-10 flex flex-col gap-y-2">
        <div className="flex justify-center">
          <div className="flex flex-col justify-between dark:text-white-2">
            <ShipingCard  src="/aiplane.png" text="حمل هوایی" />
            <ShipingCard src="/train.png" text="حمل ریلی" />
          </div>
          <div className="flex justify-center items-center ">
            <img src="/AvestaCpu.svg" alt="avestaCpu" />
          </div>
          <div className="flex flex-col justify-between dark:text-white-2">
            <ShipingCard src="/ship.png" text="حمل دریایی" />
            <ShipingCard src="/car.png" text="حمل جاده‌ای" />
          </div>
        </div>
        <ShipingCard  src="/ai.png" text="هوش مصنوعی" />
      </div>
    </div>
  );
};

export default Hero;
