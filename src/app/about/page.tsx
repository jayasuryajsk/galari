"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHeader from "@/components/sections/page-header";

const AboutPage = () => {
    return (
        <div className="bg-white">
            <PageHeader
                title="Our Identity"
                category="Corporate Profile"
                breadcrumb="About Us"
                subtitle="Indigenous-owned excellence merging modern technology with Aboriginal culture and land management expertise."
            />

            {/* Founder's Vision */}
            <section className="py-24 max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase underline underline-offset-8">Founder's Quote</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter uppercase leading-tight italic">
                                "I want to inspire young Aboriginal kids to get excited about school."
                            </h2>
                            <p className="text-sm font-bold text-primary/60 uppercase tracking-widest">— John Sayers, Director</p>
                        </div>

                        <div className="space-y-6 text-lg text-muted-foreground font-medium leading-relaxed">
                            <p>
                                We’re often asked why we’re called 18fifty3 Group. The answer is that it was chosen to honor Rosanna Mooney, the great, great-grandmother of our CEO John Sayers. Rosanna was born in Tasmania in 1853.
                            </p>
                            <p>
                                Little is known of her life; only that she was the daughter of an Indigenous woman and a white man and that she survived the brutal treatment of the island’s Indigenous population in the late 19th century to raise her own family. Five generations later, Rosanna’s legacy lives on through our commitment to Indigenous excellence.
                            </p>
                            <p>
                                John Sayers, a descendant of the Bundawang (Yuin) Mob, merges modern technology with Aboriginal culture to create employment opportunities in remote Australia, bringing leadership and vision to the 18FiFTY3 Group team.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative aspect-[4/5] lg:aspect-square overflow-hidden border border-border group"
                    >
                        <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/63c7bdbd-d00c-44be-ae06-2dd50a81e08a-7.jpg"
                            alt="John Sayers - Director"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-primary/20 pointer-events-none"></div>
                    </motion.div>
                </div>
            </section>

            {/* Core Values / Stats */}
            <section className="py-24 bg-primary text-white border-y border-white/5">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        <div className="space-y-8">
                            <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase">Commitment</span>
                            <h3 className="text-4xl font-bold uppercase tracking-tighter leading-none">
                                Bridging the gap through <br /> specialized expertise.
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 gap-12">
                            <div className="pb-12 border-b border-white/10">
                                <span className="block text-accent text-sm font-bold uppercase tracking-widest mb-4">Remote Solutions</span>
                                <p className="text-white/60 text-lg leading-relaxed">
                                    Creating jobs for those in remote areas across Australia by applying innovative land management and civil techniques.
                                </p>
                            </div>
                            <div className="pb-12 border-b border-white/10">
                                <span className="block text-accent text-sm font-bold uppercase tracking-widest mb-4">Cultural Heritage</span>
                                <p className="text-white/60 text-lg leading-relaxed">
                                    Maintaining a deep connection to the land and the history of our ancestors while building the infrastructure of tomorrow.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
