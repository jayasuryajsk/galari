"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight, Linkedin } from "lucide-react";
import PageHeader from "@/components/sections/page-header";

const ContactPage = () => {
    return (
        <div className="bg-white">
            <PageHeader
                title="Connect"
                category="Operations"
                breadcrumb="Contact"
                subtitle="Get in touch with our team for strategic partnerships, technical enquiries, or project proposals."
            />

            <section className="py-24 max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Contact Information */}
                    <div className="space-y-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-4xl font-bold text-primary uppercase tracking-tighter">
                                Direct <br /> Communication<span className="text-accent">.</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase">Phone</span>
                                    <div className="flex items-center gap-4 text-primary group">
                                        <Phone className="w-5 h-5 text-accent" />
                                        <a href="tel:+61261234567" className="text-xl font-bold hover:text-accent transition-colors">
                                            (02) 6123 4567
                                        </a>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase">Email</span>
                                    <div className="flex items-center gap-4 text-primary group">
                                        <Mail className="w-5 h-5 text-accent" />
                                        <a href="mailto:info@18fifty3.com.au" className="text-xl font-bold hover:text-accent transition-colors">
                                            info@18fifty3.com.au
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8"
                        >
                            <h2 className="text-4xl font-bold text-primary uppercase tracking-tighter">
                                Regional <br /> Presence<span className="text-accent">.</span>
                            </h2>
                            <div className="space-y-6 p-10 border border-border">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-accent mt-1" />
                                    <div className="space-y-2">
                                        <span className="block text-primary font-bold uppercase tracking-tight">Canberra HQ</span>
                                        <address className="not-italic text-muted-foreground font-medium">
                                            Pialligo, ACT 2609<br />
                                            Australia
                                        </address>
                                    </div>
                                </div>
                                <div className="pt-6 border-t border-border flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Ngunnawal Country</span>
                                    <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase text-primary hover:text-accent transition-colors">
                                        View Map <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form Placeholder / Enquiry Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-primary p-12 lg:p-16 text-white space-y-10"
                    >
                        <div className="space-y-4">
                            <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase">Enquiry Form</span>
                            <h3 className="text-4xl font-bold uppercase tracking-tighter leading-none">
                                Send a technical <br /> request<span className="text-accent">.</span>
                            </h3>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Full Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:border-accent outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Subject</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:border-accent outline-none transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Message</label>
                                <textarea rows={6} className="w-full bg-white/5 border border-white/10 p-4 focus:border-accent outline-none transition-colors"></textarea>
                            </div>
                            <button className="w-full py-6 bg-accent text-primary text-xs font-bold uppercase tracking-[0.3em] hover:bg-white transition-all duration-500">
                                Submit Enquiry
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
