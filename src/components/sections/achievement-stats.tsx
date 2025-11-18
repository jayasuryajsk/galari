"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Cog, HardHat, Users } from "lucide-react";

interface StatData {
  id: number;
  icon: React.ElementType;
  endValue: number;
  suffix?: string;
  label: React.ReactNode;
  isSpecial?: boolean;
}

const StatItem = ({ stat }: { stat: StatData }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let startTimestamp: number | null = null;
      const duration = 2000;

      const animationFrame = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentCount = Math.floor(progress * stat.endValue);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animationFrame);
        } else {
          setCount(stat.endValue);
        }
      };
      requestAnimationFrame(animationFrame);
    }
  }, [inView, stat.endValue]);

  const IconComponent = stat.icon;

  return (
    <li ref={ref} className="flex flex-row items-center gap-6">
      <IconComponent
        className="h-12 w-12 flex-shrink-0 text-primary lg:h-[60px] lg:w-[60px]"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <div>
        {stat.isSpecial ? (
          <>
            <div className="flex items-end gap-3">
              <h2 className="text-[56px] font-bold leading-none text-primary lg:text-[72px]">
                {count}
              </h2>
              <div className="pb-1 text-[24px] font-bold leading-tight text-primary lg:pb-2">
                <p>LTIs</p>
                <p>LTRIF</p>
              </div>
            </div>
            <p className="mt-1 text-base font-normal leading-[1.4] text-[#333333] lg:text-lg">
              {stat.label}
            </p>
          </>
        ) : (
          <>
            <h2 className="text-[56px] font-bold leading-none text-primary lg:text-[72px]">
              {count}
              {stat.suffix}
            </h2>
            <p className="mt-1 text-base font-normal leading-[1.4] text-[#333333] lg:text-lg">
              {stat.label}
            </p>
          </>
        )}
      </div>
    </li>
  );
};

export default function AchievementStats() {
  const statsData: StatData[] = [
    {
      id: 1,
      icon: Cog,
      endValue: 13,
      suffix: "+",
      label: "Years in The Field",
    },
    {
      id: 2,
      icon: HardHat,
      endValue: 0,
      label: "over the last 13 years",
      isSpecial: true,
    },
    {
      id: 3,
      icon: Users,
      endValue: 40,
      suffix: "%",
      label: (
        <>
          Women in Senior
          <br />
          Leadership roles
        </>
      ),
    },
  ];

  return (
    <section className="bg-[#f8f9fa] py-12 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <ul className="flex flex-col items-center justify-around gap-12 lg:flex-row lg:items-start lg:gap-8">
          {statsData.map((stat) => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </ul>
      </div>
    </section>
  );
}