import { servicesInfo } from "@/lib/helper/homepage/services";
import Image from "next/image";
import ServiceIcon from "../../../public/serviceIcon.png"
import Laptop from "../../../public/laptop.png"

const Services = () => {
  return (
    <>
      <div className="mt-[104px] px-[173px] ">
        <div className="dark:bg-background-dark  px-[55px] py-[98px] flex flex-col gap-y-12 justify-center items-center rounded-2xl ">
          <span className="text-[32px] font-bold text-black-1 dark:text-white-2  py-6">
            خدمات جامع و چندوجهی <span className="text-orange-1"> اَوستا </span>
            هوش‌یار در حوزه حمل‌ونقل
          </span>
          <div className="flex">
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-row gap-x-6">
                <div className="w-[7px] h-[115px] bg-orange-4 rounded-lg"></div>
                <div className="flex flex-col justify-between ">
                  <div className="flex flex-row gap-x-[25px]">
                    <Image src={ServiceIcon} alt="service"  />
                    <span className="text-[22px] text-black-1 dark:text-white-2 font-bold">
                      سامانه ترخیص کالا
                    </span>
                  </div>
                  <span className="flex text-base text-black-1 dark:text-white-2">
                    با سامانه ترخیص کالا، می‌توانید کلیه مراحل از ثبت سفارش تا
                    دریافت کالا را به صورت شفاف، آسان و مطمئن مدیریت کنید.
                  </span>
                </div>
              </div>
              {servicesInfo.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`flex flex-row gap-x-6`}
                    style={{
                      opacity: item.opacity,
                    }}
                  >
                    <div
                      className={`w-[4px] h-[39px] rounded-lg `}
                      style={{ backgroundColor: item.listColor }}
                    ></div>
                    <div className="flex flex-col justify-between ">
                      <div className="flex ">
                        <span
                          className={`text-[20px] dark:text-white-2`}
                         
                        >
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Image src={Laptop} alt="laptop" className="object-contain" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
