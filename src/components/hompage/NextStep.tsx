import { nextStepInfo } from "@/lib/helper/homepage/firstStep";
import InfoCard from "@/components/custom/InfoCard";

const NextStep = () => {
  return (
    <div className="px-[173px] ">
      <div className="flex flex-col py-6 px-[128px] justify-center items-center gap-6">
        <span className="text-[32px] font-bold text-black-1 dark:text-white-2">
          <span className="text-orange-1">اولین</span> قدمتان را در مسیر
          حمل‌ونقل کالا با اوستا
          <span className="text-orange-1">هوشمندانه</span> بردارید
        </span>
        <span className="text-[20px] text-black-1 dark:text-white-2 px-6 h-[119px] flex justify-center items-center text-center">
          انتخاب یک شریک مطمئن، تأثیر مستقیمی بر موفقیت کسب‌وکار شما دارد. اوستا
          هوش‌یار با ارائه راهکارهای هوشمند، شفاف و کارآمد، بهترین انتخاب برای
          حمل‌ونقل شما فراهم می‌آورد.
        </span>
      </div>
      <div className="flex gap-x-6 mt-8 justify-center items-center">
        {nextStepInfo.map((item, index) => {
          return (
            <InfoCard
              key={index}
              src={item.src}
              title={item.title}
              info={item.info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NextStep;
