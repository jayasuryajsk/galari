"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, GraduationCap, Compass } from "lucide-react";
import PageHeader from "@/components/sections/page-header";

const BarefootAcademyPage = () => {
    return (
        <div className="bg-white">
            <PageHeader
                title="Barefoot Academy"
                category="Community & Education"
                breadcrumb="Initiatives"
                subtitle="Empowering Indigenous youth by sparking curiosity in technology, agriculture, and the arts."
            />

            {/* Mission Section */}
            <section className="py-24 max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary uppercase tracking-tighter leading-none">
                            Broadening <br /> Horizons<span className="text-accent">.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                            The Barefoot Academy is a ground-breaking educational support initiative dedicated to empowering Indigenous primary school children with knowledge about diverse industries.
                        </p>
                        <div className="space-y-6 pt-8">
                            <div className="flex gap-6 pb-8 border-b border-border">
                                <Rocket className="w-8 h-8 text-accent shrink-0" />
                                <div>
                                    <h4 className="font-bold text-primary uppercase text-sm mb-2">Early Exposure</h4>
                                    <p className="text-muted-foreground text-sm">Introducing vocational fields such as tech, agriculture, and hospitality through interactive learning.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <GraduationCap className="w-8 h-8 text-accent shrink-0" />
                                <div>
                                    <h4 className="font-bold text-primary uppercase text-sm mb-2">Bridging the Gap</h4>
                                    <p className="text-muted-foreground text-sm">Equipping young minds with valuable skills to open doors beyond their school years.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square overflow-hidden"
                    >
                        <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/IMEX-Container-Beams-9.jpg"
                            alt="Education Initiative"
                            fill
                            className="object-cover grayscale"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Feature Story: The Barefoot Pilot */}
            <section className="py-24 bg-primary text-white">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="text-center space-y-6 mb-20">
                        <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase">Featured Journey</span>
                        <h2 className="text-5xl font-bold uppercase tracking-tighter">The Barefoot Pilot<span className="text-accent">.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-4 order-2 lg:order-1">
                            <div className="p-10 border border-white/10 space-y-6 bg-white/5 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold uppercase tracking-tight text-accent">Tyeisha Clark</h3>
                                <p className="text-white/70 italic text-lg leading-relaxed">
                                    "Mastering her aircraft is only the start—her next ambition? To become Australia's first First Nations astronaut."
                                </p>
                                <div className="h-[1px] w-12 bg-accent"></div>
                            </div>
                        </div>
                        <div className="lg:col-span-8 order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6 text-lg text-white/80 font-medium leading-relaxed"
                            >
                                <p>
                                    Beginning in her hometown of Kowanyama, QLD, Tyeisha's journey is one of resilience and ambition. Under the guidance of her instructor, she mastered landing in strong crosswinds and stalls at 6,000 feet.
                                </p>
                                <p>
                                    Her 13-hour epic flight to the Cape took her over the Sydney Harbour Bridge and through regional Australia, serving as an inspiration to every child she met stop along the way.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BarefootAcademyPage;
