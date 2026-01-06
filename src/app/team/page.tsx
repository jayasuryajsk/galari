"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHeader from "@/components/sections/page-header";

interface TeamMember {
    name: string;
    role: string;
    bio: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "John Sayers",
        role: "Director",
        bio: "A descendant of the Bundawang (Yuin) Mob, John is a passionate businessman with a background in aviation and property development. He focuses on joining modern technology with Aboriginal culture to drive remote solutions."
    },
    {
        name: "Ben Surawski",
        role: "General Manager",
        bio: "With a background in the Australian Army and as a commercial helicopter pilot, Ben excels in operational efficiency, safety programs, and stakeholder engagement in high-paced environments."
    },
    {
        name: "Danny McClelland",
        role: "Civil Manager",
        bio: "Over 17 years of experience in civil works across regional NSW and ACT. Danny manages high-value contracts with a focus on precision, safety, and client satisfaction."
    },
    {
        name: "Isobel Bender",
        role: "Environmental Specialist",
        bio: "Educated at ANU in Biodiversity Conservation, Isobel specializes in policy analysis and on-ground conservation, bringing research and field expertise to environmental projects."
    },
    {
        name: "Richard Baker",
        role: "Director / Pilot",
        bio: "An indigenous man from Borroloola and a commercial helicopter pilot. Richard supports environmental programs on Aboriginal lands and promotes educational/employment opportunities."
    },
    {
        name: "Mark Radford",
        role: "Safety / Project Manager",
        bio: "A veteran of the SAS Regiment and a qualified ships captain. Mark leads training and safety systems, managing complex projects with disciplined precision."
    }
];

const TeamPage = () => {
    return (
        <div className="bg-white">
            <PageHeader
                title="Leadership Team"
                category="Human Capital"
                breadcrumb="Our People"
                subtitle="A multidisciplinary team of veterans, industry specialists, and traditional owners delivering precision across Australia."
            />

            <section className="py-24 max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="space-y-8">
                                <div className="relative aspect-[4/5] bg-secondary overflow-hidden border border-border">
                                    {/* Bio on Hover */}
                                    <div className="absolute inset-0 bg-primary/90 p-10 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                                        <p className="text-white/80 text-sm leading-relaxed font-medium">
                                            {member.bio}
                                        </p>
                                    </div>

                                    {/* Placeholder / Decorative Element since we don't have individual headshots yet */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-8 z-10">
                                        <span className="text-primary/10 text-9xl font-bold uppercase tracking-tighter select-none">
                                            {member.name.split(' ')[0][0]}{member.name.split(' ')[1]?.[0] || ''}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-2 border-l-2 border-accent pl-6">
                                    <h3 className="text-2xl font-bold text-primary uppercase tracking-tighter">
                                        {member.name}
                                    </h3>
                                    <p className="text-xs font-bold text-accent uppercase tracking-widest">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-primary text-white">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="max-w-4xl space-y-8">
                        <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase">Culture</span>
                        <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9]">
                            Empowering <br /> Indigenous <br /> Excellence<span className="text-accent">.</span>
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed">
                            We are more than a contractor; we are a platform for knowledge sharing and sustainable career paths. Our team blends military discipline, technical certification, and cultural heritage to solve complex national challenges.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamPage;
