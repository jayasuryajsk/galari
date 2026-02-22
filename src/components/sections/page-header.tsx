"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    category: string;
    breadcrumb?: string;
}

const PageHeader = ({ title, subtitle, category, breadcrumb }: PageHeaderProps) => {
    return (
        <section className="relative bg-secondary pt-48 pb-24 overflow-hidden border-b border-border">
            {/* Background Architectural Grid */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}></div>
            </div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4"
                    >
                        <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase">
                            {category}
                        </span>
                        <div className="h-[1px] w-12 bg-accent"></div>
                        {breadcrumb && (
                            <span className="text-muted-foreground text-[10px] font-bold tracking-[0.2em] uppercase">
                                {breadcrumb}
                            </span>
                        )}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
                        className="text-5xl md:text-7xl xl:text-[6rem] font-bold text-primary tracking-tighter leading-[0.85] uppercase"
                    >
                        {title}<span className="text-accent">.</span>
                    </motion.h1>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
