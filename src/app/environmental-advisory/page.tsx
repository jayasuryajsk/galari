"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Leaf, BarChart3, Cloud } from "lucide-react";
import PageHeader from "@/components/sections/page-header";

const EnvironmentalPage = () => {
    const services = [
        {
            title: "Bush Regeneration",
            description: "Our bush crew includes team members with Certificate III Conservation and Ecosystem Management and Environmental Science backgrounds, delivering restoration works, specialist machinery operation, weed control, plant identification, site species selection, and ecosystem condition assessment.",
            icon: Leaf
        },
        {
            title: "Holistic Weed Management",
            description: "We develop integrated weed management plans using natural, mechanical, and chemical controls, including native competition planting, composting, slashing, mowing, controlled burns, and targeted treatment across threatened ecosystems.",
            icon: BarChart3
        },
        {
            title: "Environmental and Carbon Markets",
            description: "Our team works with Local Aboriginal Land Councils on feasibility studies, training, partner engagement, market registration, credit sales, and compliant management plans, including collaboration with accredited BAM assessors.",
            icon: Cloud
        }
    ];

    return (
        <div className="bg-white">
            <PageHeader
                title="Environmental Advisory"
                category="Technical Services"
                breadcrumb="Consultancy"
                subtitle="18fifty3 Group specializes in environmental management consultancy and service solutions from strategic planning through practical implementation."
            />

            {/* Introductory Text */}
            <section className="py-24 max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-medium text-primary tracking-tight leading-tight uppercase"
                    >
                        18FiFTY3 Group specializes in comprehensive environmental management consultancy and service solutions, encompassing everything from <span className="text-accent">strategic planning</span> to practical implementation.
                    </motion.p>
                </div>
            </section>

            {/* Expertise Pillars */}
            <section className="pb-24 max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="p-12 bg-primary text-white border border-white/5 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <service.icon className="w-24 h-24" />
                            </div>
                            <h3 className="text-3xl font-bold uppercase tracking-tighter mb-6 relative z-10 group-hover:text-accent transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-white/60 leading-relaxed mb-8 relative z-10 font-medium">
                                {service.description}
                            </p>
                            <div className="w-10 h-[1px] bg-accent group-hover:w-full transition-all duration-700"></div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Reporting & Monitoring */}
            <section className="py-24 border-t border-border">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <span className="text-accent text-xs font-bold tracking-[0.18em] uppercase">Compliance</span>
                            <h2 className="text-5xl font-bold uppercase tracking-tighter text-primary">
                                Reporting & <br /> Monitoring<span className="text-accent">.</span>
                            </h2>
                            <p className="text-muted-foreground text-lg font-medium leading-relaxed">
                                Our team is familiar with planning and reporting requirements under the NSW Environmental Planning and Assessment Act and regularly develops Review of Environmental Factor reports. We design rigorous monitoring plans to assess each project and adapt to evolving environmental issues.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-4">
                                <div className="space-y-2">
                                    <span className="block text-4xl font-bold text-primary italic">REF</span>
                                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.12em]">Review of Factors</span>
                                </div>
                                <div className="space-y-2">
                                    <span className="block text-4xl font-bold text-primary italic">BAM</span>
                                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.12em]">Accredited Assessors</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-video overflow-hidden"
                        >
                            <Image
                                src="https://images.squarespace-cdn.com/content/v1/65d43588ddcb5b7876a3823e/f78787aa-b6ee-4050-99b9-bcccb84dc5d0/bush_regen.jpg"
                                alt="Environmental Advisory"
                                fill
                                className="object-cover grayscale"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-accent">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 text-center text-primary">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-10">
                        Discuss your environmental <br /> goals with our experts.
                    </h2>
                    <Link href="/contact" className="inline-block py-6 px-14 bg-primary text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-primary transition-all duration-500">
                        Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default EnvironmentalPage;
