"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";
import PageHeader from "@/components/sections/page-header";

const projects = [
    {
        title: "National Gateway Infrastructure",
        category: "Civil & Remediation",
        location: "Sydney, NSW",
        year: "2024",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/Aerial-Image_LER-UST-13.png"
    },
    {
        title: "Remote Earthworks Phase II",
        category: "Earthworks",
        location: "Northern Territory",
        year: "2023",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/SYD-AIR-Aerial-10.jpg"
    }
];

const ProjectsPage = () => {
    return (
        <div className="bg-white">
            <PageHeader
                title="Strategic Assets"
                category="Portfolio"
                breadcrumb="Projects"
                subtitle="Delivering critical infrastructure and environmental solutions across Australia's most challenging terrains."
            />

            <section className="py-24 max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group relative overflow-hidden"
                        >
                            <div className="aspect-[16/10] relative overflow-hidden border border-border">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700"></div>

                                <div className="absolute top-8 left-8 p-4 bg-primary/90 text-white border-l-2 border-accent backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-3 h-3 text-accent" />
                                            <span className="text-[10px] uppercase font-bold tracking-widest">{project.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-3 h-3 text-accent" />
                                            <span className="text-[10px] uppercase font-bold tracking-widest">{project.year}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="py-8 space-y-4">
                                <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase">{project.category}</span>
                                <div className="flex justify-between items-end">
                                    <h3 className="text-3xl font-bold text-primary uppercase tracking-tighter leading-none">
                                        {project.title}
                                    </h3>
                                    <div className="w-12 h-12 bg-primary text-white flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;
