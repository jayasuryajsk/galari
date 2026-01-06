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
  color?: string;
}

import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const StatItem = ({ stat }: { stat: StatData }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const countValue = useMotionValue(0);
  const rounded = useTransform(countValue, (latest) => Math.floor(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(countValue, stat.endValue, {
        duration: 2.5,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, stat.endValue, countValue]);

  // Sync motion value to state for rendering (or use motion.h2 directly)
  useEffect(() => {
    return rounded.on("change", (latest) => setDisplayValue(latest));
  }, [rounded]);

  const IconComponent = stat.icon;

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: stat.id * 0.1 }}
      className="group relative flex flex-col items-start gap-8 p-12 transition-all duration-500 hover:bg-primary border-r border-border first:border-l"
    >
      <div className="flex flex-col gap-6 w-full">
        <div className="flex justify-between items-start">
          <div className={`p-3 border border-border group-hover:border-accent group-hover:bg-accent/10 transition-colors duration-500`}>
            <IconComponent
              className={`h-6 w-6 ${stat.color || 'text-primary'} group-hover:text-accent transition-colors duration-500`}
              aria-hidden="true"
            />
          </div>
          <span className="text-[10px] font-bold text-muted-foreground group-hover:text-white/30 tracking-[0.3em] uppercase">
            Data.Ref_{stat.id}
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-baseline gap-1">
            <h2 className="text-7xl font-bold tracking-tighter text-primary group-hover:text-white transition-colors duration-500 tabular-nums">
              {displayValue}
            </h2>
            <span className={`text-2xl font-bold ${stat.color || 'text-accent'}`}>{stat.suffix}</span>
          </div>
          <p className={`text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-accent transition-colors duration-500 max-w-[150px]`}>
            {stat.label}
          </p>
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-accent transition-all duration-500 m-4"></div>
    </motion.li>
  );
};

export default function AchievementStats() {
  const statsData: StatData[] = [
    {
      id: 1,
      icon: Cog,
      endValue: 10,
      suffix: "/YRS",
      label: "Operational Experience",
      color: "text-accent" // Orange
    },
    {
      id: 2,
      icon: HardHat,
      endValue: 124,
      suffix: "/UNIT",
      label: "Critical Projects Completed",
      color: "text-info" // Blue
    },
    {
      id: 3,
      icon: Users,
      endValue: 1500,
      suffix: "/HRS",
      label: "Indigenous Community Engagement",
      color: "text-success" // Green
    },
  ];

  return (
    <section className="bg-white overflow-hidden border-b border-border">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col lg:flex-row items-center border-t border-border">
          <div className="lg:w-1/4 p-12 bg-secondary/50 border-r border-border h-full flex flex-col justify-between self-stretch">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-accent tracking-[0.4em] uppercase">Metrics</span>
              <h3 className="text-3xl font-bold text-primary tracking-tighter uppercase leading-tight">
                Operational <br /> Excellence<span className="text-accent">.</span>
              </h3>
            </div>
            <p className="text-xs font-medium text-muted-foreground tracking-wide mt-8">
              Driving performance through technical precision and aboriginal leadership across Australia.
            </p>
          </div>
          <ul className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 w-full self-stretch">
            {statsData.map((stat) => (
              <StatItem key={stat.id} stat={stat} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}