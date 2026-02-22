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
        bio: "John Sayers is desendent from the Bundawang (Yuin) Mob and brings deep leadership experience across aviation, land development, and business. He is passionate about Indigenous employment and joining modern technology, Aboriginal culture, and land management to drive remote solutions."
    },
    {
        name: "Ben Surawski",
        role: "General Manager",
        bio: "Ben Surawski has a background in Australian Army service, commercial piloting and firefighting, with strengths in stakeholder engagement, contract management, operational efficiency, and safety systems."
    },
    {
        name: "Peter Chia",
        role: "Community & Project Lead",
        bio: "Peter Chia has worked in construction, civil and landscape sectors across NSW over a 32-year career, including major projects and Aboriginal procurement outcomes that generated significant local Aboriginal employment."
    },
    {
        name: "Richard Baker",
        role: "Director / Pilot",
        bio: "Richard Baker, from Borroloola, is a trained NT National Park Ranger and commercial helicopter pilot with over 5,000 flight hours. He supports environmental programs on Aboriginal lands and creates employment pathways through practical operations."
    },
    {
        name: "Isobel Bender",
        role: "Environmental Specialist",
        bio: "Isobel Bender combines policy analysis, biodiversity conservation, and practical restoration experience, with a focus on communicating complex environmental science and delivering outcomes across riparian, regenerative, and carbon projects."
    },
    {
        name: "Captain Nino",
        role: "Landcare Specialist",
        bio: "Captain Nino has over 25 years in Landcare projects across Australia for clients including Defence, NT Government and Rio Tinto, specializing in weed control, eradication, bush regeneration, and high-quality safe delivery."
    },
    {
        name: "Danny McClelland",
        role: "Civil Manager",
        bio: "With over 17 years of experience across civil works from Queensland through regional NSW and ACT, Danny has managed high-value contracts while maintaining client outcomes and safety as top priorities."
    },
    {
        name: "Mark Radford",
        role: "Safety / Project Manager",
        bio: "Mark is an Australian Army veteran, including service in the SAS Regiment, and a qualified ships captain. He leads training and safety systems for 18fifty3 projects and supports major project delivery."
    },
    {
        name: "Andrew",
        role: "Aviation Lead",
        bio: "Andrew served 20 years in the Army flying Blackhawks and Kiowa Warriors and is an experienced CASA and RAAus instructor. He brings deep rotary and fixed-wing experience across charter, SAR, medevac, fire, and training operations."
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
