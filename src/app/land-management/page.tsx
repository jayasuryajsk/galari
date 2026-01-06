"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trees, Tractor, Sprout } from "lucide-react";
import PageHeader from "@/components/sections/page-header";

const LandManagementPage = () => {
    const pillars = [
        {
            title: "Advanced Weed Control",
            description: "Implementing sustainable and eco-friendly solutions to manage invasive species with precision across diverse Australian landscapes.",
            icon: Sprout
        },
        {
            title: "Remote Operations",
            description: "Executing large-scale projects in challenging rural environments using specialized machinery and Indigenous expertise.",
            icon: Tractor
        },
        {
            title: "Ecological Restoration",
            description: "Transforming impacted sites back to their natural state through scientific planning and native biodiversity support.",
            icon: Trees
        }
    ];

    return (
        <div className="bg-white">
            <PageHeader
                title="Land Management"
                category="Technical Services"
                breadcrumb="Asset Care"
                subtitle="Ensuring your land is cared for with precision, advanced technology, and eco-friendly solutions."
            />

            <section className="py-24 max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group space-y-8"
                        >
                            <div className="w-16 h-16 bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                                <pillar.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold uppercase tracking-tighter text-primary">
                                {pillar.title}
                            </h3>
                            <p className="text-muted-foreground font-medium leading-relaxed">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Feature Section */}
            <section className="py-24 bg-primary text-white">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-square border border-white/10 overflow-hidden"
                        >
                            <Image
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/63c7bdbd-d00c-44be-ae06-2dd50a81e08a-7.jpg"
                                alt="Land Management in Action"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase">Excellence</span>
                            <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-none">
                                Precision Care <br /> for Australia<span className="text-accent">.</span>
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed font-medium">
                                We combine decades of operational experience with modern Landcare techniques. Our commitment is to deliver high-quality, efficient, and safe outcomes while providing meaningful employment for our Aboriginal workforce.
                            </p>
                            <div className="pt-6">
                                <a href="/contact" className="inline-block py-5 px-12 border border-accent text-accent text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-all">
                                    Project Proposal
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandManagementPage;
