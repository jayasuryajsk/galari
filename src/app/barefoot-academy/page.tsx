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
                subtitle="A ground-breaking educational support initiative empowering Indigenous primary school children with knowledge about diverse industries."
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
                            Understanding the importance of early exposure to different industries, the Barefoot Program introduces Indigenous children to vocational fields including technology, agriculture, arts and crafts, hospitality, and more.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                            Through engaging and interactive learning experiences, the program broadens horizons and ignites a passion for learning, with the goal of opening doors of opportunity beyond school years.
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
                            src="https://images.squarespace-cdn.com/content/v1/65d43588ddcb5b7876a3823e/119e2ed2-d15a-4ecf-a861-1599dad80d87/WhatsApp+Image+2024-02-21+at+11.50.04+AM.jpeg"
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
                        <span className="text-accent text-xs font-bold tracking-[0.18em] uppercase">Featured Journey</span>
                        <h2 className="text-5xl font-bold uppercase tracking-tighter">The Barefoot Pilot<span className="text-accent">.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-4 order-2 lg:order-1">
                            <div className="p-10 border border-white/10 space-y-6 bg-white/5 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold uppercase tracking-tight text-accent">Tyeisha Clark</h3>
                                <p className="text-white/70 italic text-lg leading-relaxed">
                                    "Mastering her aircraft is only the start; her next ambition is to become Australia's first First Nations astronaut."
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
                                    This journey begins in Tyeisha's hometown of Kowanyama, QLD. Under the guidance of her instructor, Lauren, she learned to fly in difficult conditions, from controlled stalls at 6,000 feet to strong crosswind landings.
                                </p>
                                <p>
                                    With theory and flight training complete, Tyeisha undertook a 13-hour flight to Cape York, passing landmarks including the Sydney Harbour Bridge, stopping at Longreach and local schools, and finally touching down on her ancestral lands.
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
