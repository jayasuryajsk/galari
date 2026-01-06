"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, Zap, Droplets, Box } from "lucide-react";
import PageHeader from "@/components/sections/page-header";

const HousingPage = () => {
    const systems = [
        { title: "Solar Power", icon: Zap, detail: "Integrated PV arrays and battery storage." },
        { title: "Water Solutions", icon: Droplets, detail: "On-site tanks and filtration systems." },
        { title: "Modular Design", icon: Box, detail: "Quality Australian steel configurations." },
    ];

    return (
        <div className="bg-white">
            <PageHeader
                title="Sustainable Housing"
                category="Infrastructure"
                breadcrumb="Modular"
                subtitle="Innovative, transportable, and off-grid housing solutions designed for remote Australian conditions."
            />

            <section className="py-24 max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary uppercase tracking-tighter leading-none">
                            Adaptable <br /> Dwellings<span className="text-accent">.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                            Designed and manufactured in the ACT and NSW, our dwellings use structural insulated panels for superior thermal and acoustic integrity, ensuring a lower carbon footprint.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
                            {systems.map((s, i) => (
                                <div key={i} className="space-y-4">
                                    <s.icon className="w-6 h-6 text-accent" />
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{s.title}</h4>
                                        <p className="text-[10px] text-muted-foreground uppercase">{s.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square border border-border overflow-hidden"
                    >
                        <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/block-12.png"
                            alt="Sustainable Housing Module"
                            fill
                            className="object-cover grayscale"
                        />
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-secondary">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 text-center">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase">Off-Grid Excellence</span>
                        <h3 className="text-3xl font-bold text-primary uppercase tracking-tighter">
                            Ready for town-connected <br /> or completely remote settings.
                        </h3>
                        <div className="w-20 h-1 bg-accent mx-auto"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HousingPage;
