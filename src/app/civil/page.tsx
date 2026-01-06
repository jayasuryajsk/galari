"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, HardHat, Drill, Settings } from "lucide-react";
import PageHeader from "@/components/sections/page-header";

const CivilPage = () => {
    const sections = [
        {
            title: "Strategic Operations",
            description: "18FiFTY3 Group are civil earthworks, rural and remote earthworks and management specialists. Our team of specialists are highly experienced in civil operations in urban and remote areas.",
            features: [
                "Increased production and reduced program time",
                "Savings for larger projects",
                "Better site safety and public perception",
                "Innovative work techniques"
            ],
            icon: HardHat
        },
        {
            title: "Civil Construction",
            description: "Delivering a range of landscaping and maintenance services, our team provides planning, ground maintenance, grounds and tree services. From small cemeteries to large airports, we develop self-sustaining solutions.",
            icon: Drill
        },
        {
            title: "Planning & IPM",
            description: "Environmental Management planning is essential for creating practical and economical solutions. We provide Integrated Pest Management (IPM) as an environmentally sensitive way of managing pests.",
            icon: Settings
        }
    ];

    return (
        <div className="bg-white">
            <PageHeader
                title="Civil Infrastructure"
                category="Technical Services"
                breadcrumb="Infrastructure"
                subtitle="Specialized civil and remote earthworks management focusing on efficiency, safety, and environmental integration."
            />

            {/* Core Capabilities */}
            <section className="py-24 max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group p-10 border border-border hover:border-accent transition-colors duration-500"
                        >
                            <div className="w-12 h-12 bg-primary text-white flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-primary transition-colors duration-500">
                                <section.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary uppercase tracking-tighter mb-6">
                                {section.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                {section.description}
                            </p>
                            {section.features && (
                                <ul className="space-y-3">
                                    {section.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center gap-3 text-sm font-bold text-primary uppercase tracking-tight">
                                            <div className="w-1.5 h-1.5 bg-accent"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Detailed Content Section */}
            <section className="py-24 bg-primary text-white overflow-hidden">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase">Operations</span>
                            <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-none">
                                Precision <br /> Delivery<span className="text-accent">.</span>
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                                18FiFTY3 Group Civil arm seeks out challenges and views difficult and unique projects as opportunities. We use skills gained during decades of experience to achieve program objectives and pass on cost savings to clients through innovative work techniques and cutting-edge machinery.
                            </p>
                            <div className="pt-8">
                                <Link href="/contact" className="inline-flex items-center gap-6 py-5 px-10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary hover:border-accent transition-all duration-500 group">
                                    Enquire Today
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative aspect-square lg:aspect-video overflow-hidden border border-white/10"
                        >
                            <Image
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/SYD-AIR-Aerial-10.jpg"
                                alt="Civil Infrastructure"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CivilPage;
