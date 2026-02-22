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
            description: "The 18fifty3 team delivers weed management and control solutions across remote and urban landscapes, using integrated pest management and a tailored mix of cultural methods, selective herbicide application, broad-acre spraying, aerial treatments, and knapsack application.",
            icon: Sprout
        },
        {
            title: "Bushfire Risk Reduction",
            description: "Our team provides property evaluations, bushfire site assessments, mapping and analysis, fuel load control, prescribed burns, patrols, and aerial surveillance and suppression operations to scientifically reduce bushfire risk.",
            icon: Tractor
        },
        {
            title: "Equipment and Fleet Capability",
            description: "18fifty3 operates tractors and slashers, articulated flail mulchers, remote-controlled multi-terrain flail mulchers, posi-track slashers, and forestry mulchers to reduce fire risk, control weeds, and maintain assets across ACT and NSW.",
            icon: Trees
        }
    ];

    return (
        <div className="bg-white">
            <PageHeader
                title="Land Management"
                category="Technical Services"
                breadcrumb="Asset Care"
                subtitle="18fifty3 Group specialises in comprehensive environmental management consultancy and service solutions, from strategic planning to practical implementation."
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
                                src="https://images.squarespace-cdn.com/content/v1/65d43588ddcb5b7876a3823e/a5fbf396-0f55-43a5-b095-7635002fe675/9a5995d9-d27d-4338-8130-915e1b20ef18.jpg"
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
                            <span className="text-accent text-xs font-bold tracking-[0.18em] uppercase">Excellence</span>
                            <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-none">
                                Precision Care <br /> for Australia<span className="text-accent">.</span>
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed font-medium">
                                We leverage cutting-edge science and technology alongside extensive operational experience to ensure optimal environmental and economic outcomes for clients. Our commitment extends to empowering Aboriginal employees through meaningful employment, knowledge sharing, and favorable project outcomes.
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
