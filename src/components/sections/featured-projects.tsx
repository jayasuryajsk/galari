"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturedProjects = () => {
  return (
    <section className="bg-white py-24 border-b border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -skew-x-12 translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-[10px] font-bold text-accent tracking-[0.4em] uppercase">Portfolio</span>
            <h2 className="text-5xl md:text-6xl font-bold text-primary tracking-tighter uppercase leading-none">
              Strategic <br /> Infrastructure<span className="text-accent">.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/projects" className="text-xs font-bold uppercase tracking-widest border-b-2 border-primary pb-2 hover:text-accent hover:border-accent transition-all duration-300">
              View All Critical Assets
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-border group"
        >
          {/* Project Image */}
          <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-[650px] overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/Aerial-Image_LER-UST-13.png"
              alt="Strategic Infrastructure Project"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[1500ms] scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-1000"></div>

            {/* Tech Specs Overlay */}
            <div className="absolute top-10 left-10 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="bg-primary/90 backdrop-blur-md px-4 py-2 border-l-2 border-accent">
                <span className="block text-[10px] font-bold text-accent tracking-widest uppercase">Location</span>
                <span className="block text-sm font-bold text-white tracking-tight uppercase">Sydney, NSW</span>
              </div>
              <div className="bg-primary/90 backdrop-blur-md px-4 py-2 border-l-2 border-accent delay-100 transition-all">
                <span className="block text-[10px] font-bold text-accent tracking-widest uppercase">Scope</span>
                <span className="block text-sm font-bold text-white tracking-tight uppercase">Civil & Remediation</span>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-5 flex flex-col justify-center p-12 lg:p-20 bg-white border-l border-border relative">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase">Phase 04_In-Progress</span>
                <div className="h-px flex-grow bg-border"></div>
              </div>

              <h3 className="text-4xl lg:text-5xl font-bold text-primary tracking-tighter uppercase leading-tight">
                National <br /> Gateway <br /> Infrastructure<span className="text-accent">.</span>
              </h3>

              <p className="text-base text-muted-foreground leading-relaxed font-medium">
                18fifty3 Group is delivering critical civil infrastructure and environmental remediation for the National Gateway project, ensuring long-term sustainability and operational excellence.
              </p>

              <div className="pt-8">
                <Link href="/contact" className="inline-flex items-center gap-6 py-5 px-10 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-all duration-500 group/btn">
                  Technical Case Study
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Scale background text */}
            <div className="absolute right-0 bottom-0 opacity-[0.03] select-none pointer-events-none">
              <span className="text-[12rem] font-bold text-primary leading-none uppercase tracking-tighter">NGI</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;