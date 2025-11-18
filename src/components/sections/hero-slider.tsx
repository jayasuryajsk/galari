"use client";

import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { ChevronLeft, ChevronRight } from 'lucide-react';

const slideData = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/REDbank_Feb25_73-scaled-2.jpg",
    heading: "We work in partnership with our clients and project stakeholders to enhance outcomes and ensure satisfaction.",
    buttonText: "Our Story",
    buttonLink: "https://vaughancivil.com.au/our-story/",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/DJI_20240809174150_0052_D-scaled-3.jpg",
    heading: "Delivering complex infrastructure across Metropolitan & Regional Australia.",
    buttonText: "View Civil & Rail Projects",
    buttonLink: "https://vaughancivil.com.au/expertise/civil-infrastructure/",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/DJI_20240619144056_0073_rdc-scaled-4.jpg",
    heading: "Providing high quality engineering construction services and support to maximise our client's deliverables.",
    buttonText: "View Water & Wastewater Projects",
    buttonLink: "https://vaughancivil.com.au/expertise/water-wastewater-infrastructure/",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/DJI_0004B-scaled-5.jpg",
    heading: "Design & Construction across a range of sectors.",
    buttonText: "Come Work With Us",
    buttonLink: "https://vaughancivil.com.au/careers/",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/Crop-for-Website-scaled-6.jpg",
    heading: "Vaughan Civil take a proactive approach to environment and sustainability initiatives. We reinstated 4000 native plants on this Ausgrid project.",
    buttonText: "See project",
    buttonLink: "https://vaughancivil.com.au/projects/ausgrid-picnic-point-132kv-overhead-feeder-pole-replacement-access-track/",
  },
];

const HeroSlider = () => {
  return (
    <>
      <style>
        {`
          .hero-swiper-container .swiper-pagination-bullet {
            background-color: #ffffff;
            opacity: 0.5;
            width: 8px;
            height: 8px;
            transition: opacity 0.3s;
          }
          .hero-swiper-container .swiper-pagination-bullet-active {
            opacity: 1;
          }
        `}
      </style>
      <section className="hero_section relative w-full h-screen min-h-[100vh]">
        <Swiper
          className="hero-swiper-container h-full"
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.heading}
                  fill
                  className="object-cover object-center z-10"
                  priority={index === 0}
                  quality={100}
                />
                <div className="absolute inset-0 bg-black/30 z-20" />
                <div className="absolute inset-0 z-30 flex items-center justify-center text-white">
                  <div className="max-w-[900px] text-center px-4">
                    <h2 className="text-white text-[28px] md:text-[36px] lg:text-[48px] font-bold leading-[1.2] mb-8">
                      {slide.heading}
                    </h2>
                      <a href={slide.buttonLink} className="inline-block border-2 border-white text-white bg-transparent rounded-[4px] py-[14px] px-[32px] text-base font-medium transition-colors duration-300 hover:bg-white hover:text-black">
                        {slide.buttonText}
                      </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-4 md:left-10 z-40 cursor-pointer w-[50px] h-[50px] flex items-center justify-center bg-white rounded-full text-black hover:bg-gray-200 transition-colors duration-300">
          <ChevronLeft size={24} />
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-4 md:right-10 z-40 cursor-pointer w-[50px] h-[50px] flex items-center justify-center bg-white rounded-full text-black hover:bg-gray-200 transition-colors duration-300">
          <ChevronRight size={24} />
        </div>
      </section>
    </>
  );
};

export default HeroSlider;