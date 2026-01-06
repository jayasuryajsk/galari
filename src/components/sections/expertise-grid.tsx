"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceItem {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const servicesData: ServiceItem[] = [
  {
    title: "Land Management",
    description: "Comprehensive environmental consultancy services and expertise to benefit clients, employees, and the environment.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/63c7bdbd-d00c-44be-ae06-2dd50a81e08a-7.jpg",
    link: "/land-management",
  },
  {
    title: "Environmental Advisory",
    description: "Specialised and adaptable weed management solutions in diverse environments, ensuring lasting control and biodiversity support.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/istockphoto-1562427585-612x612-1-8.jpg",
    link: "/environmental-advisory",
  },
  {
    title: "The Barefoot Academy",
    description: "Sparking curiosity in Indigenous children by exposing them to careers in tech, agriculture, and arts, guiding them towards a bright future.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/IMEX-Container-Beams-9.jpg",
    link: "/barefoot-academy",
  },
  {
    title: "Civil Infrastructure",
    description: "Expertise in civil and remote earthworks with environmental management, ensuring efficient and safe project execution in any setting.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/SYD-AIR-Aerial-10.jpg",
    link: "/civil",
  },
  {
    title: "Aviation",
    description: "Learn 2 Fly is 18fifty3 Group's sister company operating over 10 aircraft, combining flight training and charters based in Canberra and Bathurst.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/Cover-Photo_Electrical-Infrastructure-11.jpg",
    link: "https://www.learn2fly.com.au/",
  },
  {
    title: "Housing",
    description: "Expertise in project management and construction of on-site and remote buildings throughout Australia.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/block-12.png",
    link: "/housing",
  },
];

const ServiceCard = ({ item, index }: { item: ServiceItem, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <Link href={item.link} className="group relative aspect-square overflow-hidden border border-border bg-white transition-all duration-700 block">
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/10 transition-colors duration-700"></div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 border-t font-mono text-[10px] p-2 text-white/50 z-20">
        0{index + 1}
      </div>

      <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-white tracking-tighter uppercase leading-tight group-hover:text-accent transition-colors duration-500">
            {item.title}
          </h3>
          <p className="text-sm font-medium text-white/70 leading-relaxed max-w-[280px] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            {item.description}
          </p>
          <div className="pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <div className="w-12 h-12 bg-accent flex items-center justify-center text-primary group-hover:rotate-45 transition-transform duration-500">
              <ArrowUpRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const ServicesGrid = () => {
  return (
    <section id="services" className="bg-white py-24 border-b border-border">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-[10px] font-bold text-accent tracking-[0.4em] uppercase">Capabilities</span>
            <h2 className="text-5xl md:text-6xl font-bold text-primary tracking-tighter uppercase leading-none">
              Technical <br /> Services<span className="text-accent">.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-base text-muted-foreground max-w-md font-medium"
          >
            Providing end-to-end infrastructure and environmental solutions with specialized expertise across multi-disciplinary sectors.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((item, index) => (
            <ServiceCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;