"use client";

import React from "react";
import { Shield, Users, Leaf, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { motion } from "framer-motion";

const SafetyResponsibility = () => {
    const pillars = [
        {
            icon: Shield,
            title: "HSEQ Integrity",
            description: "Our uncompromising approach to Health, Safety, Environment, and Quality ensures zero-harm operations across every technical deployment.",
            label: "Safety First",
            color: "text-accent" // Orange
        },
        {
            icon: Users,
            title: "Aboriginal Leadership",
            description: "Driving economic empowerment through high-level Indigenous ownership and leadership in the Australian infrastructure sector.",
            label: "Social Impact",
            color: "text-info" // Blue
        },
        {
            icon: Leaf,
            title: "Environmental Stewardship",
            description: "Implementing regenerative environmental practices and specialized land management to protect Australia's ecological future.",
            label: "Sustainability",
            color: "text-success" // Green
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" as any }
        },
    };

    return (
        <section className="bg-primary pt-32 pb-24 relative overflow-hidden">
            {/* Decorative vertical lines */}
            <div className="absolute inset-0 max-w-[1600px] mx-auto px-6 md:px-12 pointer-events-none opacity-[0.05]">
                <div className="w-px h-full bg-white absolute left-6 md:left-12 top-0"></div>
                <div className="w-px h-full bg-white absolute right-6 md:right-12 top-0"></div>
            </div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-b border-white/10 pb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        <div className="space-y-4">
                            <span className="text-[10px] font-bold text-accent tracking-[0.5em] uppercase">Core Values</span>
                            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.9]">
                                Governance & <br /> Integrity<span className="text-accent">.</span>
                            </h2>
                        </div>

                        <p className="text-lg text-white/60 leading-relaxed font-medium max-w-lg">
                            As a leading Australian contractor, we operate with a level of precision and accountability required to deliver $1B+ integrated projects.
                        </p>

                        <div className="flex gap-8 pt-4">
                            <Link href="/contact" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white hover:text-accent transition-all duration-300">
                                Performance Reports
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                            <Link href="/name" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white hover:text-accent transition-all duration-300">
                                Ethical Framework
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 gap-12"
                    >
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group flex items-start gap-8 p-8 border border-white/10 hover:border-accent transition-colors duration-500"
                            >
                                <div className="p-4 bg-white/5 border border-white/10 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                                    <pillar.icon className={`w-6 h-6 ${pillar.color} group-hover:text-primary transition-colors duration-500`} />
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <span className={`text-[10px] font-bold ${pillar.color} uppercase tracking-widest`}>{pillar.label}</span>
                                        <div className="h-px w-8 bg-white/20"></div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight uppercase">{pillar.title}</h3>
                                    <p className="text-sm font-medium text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                                        {pillar.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Footnote */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-12 gap-6">
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase">ISO Certified 2024</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                        <span className="text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase">AS/NZS Standards Compliance</span>
                    </div>
                    <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em]">Advancing Australia's Future</span>
                </div>
            </div>
        </section>
    );
};

export default SafetyResponsibility;
