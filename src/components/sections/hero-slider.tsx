"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Controller } from "swiper/modules";
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';

const slideData = [
  {
    id: "01",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/REDbank_Feb25_73-scaled-2.jpg",
    heading: "Integrated Service Provider",
    category: "Infrastructure",
    description: "18fifty3 Group prides itself on its diverse group of team members. Aboriginal leadership, defence veterans and senior expertise drive our success.",
    link: "/name",
  },
  {
    id: "02",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/DJI_20240809174150_0052_D-scaled-3.jpg",
    heading: "Indigenous Environmental Services",
    category: "Environment",
    description: "Providing top-tier environmental and civil services in Canberra and across Australia.",
    link: "/#services",
  },
  {
    id: "03",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/DJI_20240619144056_0073_rdc-scaled-4.jpg",
    heading: "Quality, Safety & Sustainability",
    category: "Values",
    description: "We prioritize quality, safety, and sustainability in every project we undertake.",
    link: "/contact",
  },
  {
    id: "04",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/DJI_0004B-scaled-5.jpg",
    heading: "Equal Opportunity Employer",
    category: "Careers",
    description: "We strive to provide work opportunities and job outcomes to Indigenous Australians.",
    link: "/team",
  },
];

import { motion, AnimatePresence } from "framer-motion";

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const handleSlideChange = (s: SwiperType) => {
    setActiveSlide(s.realIndex);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      clipPath: "inset(0 100% 0 0)"
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0% 0 0)",
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9] as any
      }
    },
  };

  return (
    <section className="relative w-full bg-white overflow-hidden border-b border-border">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
        {/* Large Decorative Number */}
        <div className="absolute -right-20 -bottom-20 text-[40rem] font-bold text-gray-100/50 leading-none select-none">
          {slideData[activeSlide].id}
        </div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">

          {/* Left: Content Area */}
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 lg:py-0 border-r border-border">
            <div className="max-w-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-8"
                >
                  <motion.div variants={itemVariants} className="flex items-center gap-4">
                    <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase">
                      {slideData[activeSlide].category}
                    </span>
                    <div className="h-[1px] w-16 bg-accent"></div>
                  </motion.div>

                  <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-[4.5rem] xl:text-[5rem] font-bold text-primary tracking-tighter leading-[0.85] uppercase"
                  >
                    {slideData[activeSlide].heading.split(' ').map((word, i) => (
                      <span key={i} className="block">
                        {word}
                        {i === 1 && <span className="text-accent-orange" style={{ color: 'hsl(var(--accent))' }}>.</span>}
                      </span>
                    ))}
                  </motion.h1>

                  <motion.p
                    variants={itemVariants}
                    className="text-base text-muted-foreground max-w-sm leading-relaxed tracking-wide font-medium"
                  >
                    {slideData[activeSlide].description}
                  </motion.p>

                  <motion.div variants={itemVariants} className="pt-8">
                    <Link href={slideData[activeSlide].link} className="inline-flex items-center gap-4 py-4 px-8 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-500 group">
                      Explore Capabilities
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Precise Navigation */}
              <div className="mt-20 pt-10 border-t border-border flex items-center justify-between">
                <div className="flex gap-10">
                  <button
                    onClick={() => swiper?.slidePrev()}
                    className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Previous
                  </button>
                  <button
                    onClick={() => swiper?.slideNext()}
                    className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    Next <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>

                <div className="flex items-end gap-1">
                  <span className="text-3xl font-bold leading-none text-info tracking-tighter">{slideData[activeSlide].id}</span>
                  <span className="text-[10px] font-bold text-muted-foreground mb-1">/ 04</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Immersive Media */}
          <div className="relative bg-gray-50 h-[50vh] lg:h-auto overflow-hidden group">
            <Swiper
              onSwiper={setSwiper}
              onSlideChange={handleSlideChange}
              modules={[Autoplay, EffectFade, Controller]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              speed={1500}
              loop={true}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              className="h-full w-full"
            >
              {slideData.map((slide, index) => (
                <SwiperSlide key={index} className="h-full w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src={slide.image}
                      alt={slide.heading}
                      fill
                      className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                      priority={index === 0}
                      quality={100}
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-1000"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Corner Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-accent/30 z-20 m-12 pointer-events-none lg:block hidden"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-accent/30 z-20 m-12 pointer-events-none lg:block hidden"></div>

            {/* Slide Index Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-border z-30">
              <div
                className="h-full bg-accent transition-all duration-[6000ms] ease-linear"
                style={{ width: `${((activeSlide + 1) / 4) * 100}%` }}
                key={activeSlide}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSlider;