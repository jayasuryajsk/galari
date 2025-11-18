"use client";

import Image from 'next/image';

// NOTE: The original website uses a Swiper.js slider for the featured projects.
// As we are not implementing client-side JavaScript libraries for this static clone,
// this component renders a single, static version of the first featured project.
// The layout is designed to be easily adapted into a slider component.

const FeaturedProjects = () => {
  return (
    <section className="bg-[#f8f9fa] py-12 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
        <h2 className="text-center text-primary font-bold text-[32px] sm:text-[36px] lg:text-[48px] mb-12">
          Featured Projects
        </h2>

        <div className="relative">
          {/* This container represents a single slide. */}
          <div className="group flex flex-col lg:flex-row items-stretch bg-card rounded-lg shadow-[0_4px_16px_rgba(0,0,0,0.1)] overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
            
            {/* Text Content */}
            <div className="w-full lg:w-1/2 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div>
                <p className="text-accent text-sm font-medium mb-2 uppercase tracking-[0.5px]">
                  Airports, NSW, Gas & Fuel
                </p>
                <h3 className="text-primary font-bold text-[28px] lg:text-[32px] leading-tight mb-4">
                  Sydney Airport LER & UST Replacement
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  The Lighting Equipment Room (LER) & Underground Storage Tanks (UST) Replacement project at Sydney Airport (SYD) consists of the replacement of 3 airside underground storage tanks with new above-ground tanks. SYD has 6 LERs located at the ends of each runway which supply power to the Aeronautic Ground Lighting electrical network. Each room has a…
                </p>
                <div className="flex">
                  <a
                    href="https://vaughancivil.com.au/projects/sydney-airport-ler-ust-replacement/"
                    className="bg-primary text-primary-foreground font-semibold px-7 py-3 rounded-[4px] inline-block transition-transform duration-300 ease-in-out hover:scale-102"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-[450px] overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/Aerial-Image_LER-UST-13.png"
                alt="Aerial view of Sydney Airport"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
          
          {/* Slider navigation arrows would be positioned absolutely here.
              Example:
              <button className="absolute top-1/2 -left-6 ..."><ChevronLeft /></button>
              <button className="absolute top-1/2 -right-6 ..."><ChevronRight /></button>
          */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;