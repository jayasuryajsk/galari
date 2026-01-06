"use client";

import React from "react";
import PageHeader from "@/components/sections/page-header";

const TermsPage = () => {
    return (
        <div className="bg-white">
            <PageHeader
                title="Terms of Service"
                category="Legal"
                breadcrumb="Terms"
                subtitle="Please read these terms carefully before using our website or services."
            />

            <section className="py-24 max-w-[1000px] mx-auto px-6 md:px-12">
                <div className="space-y-12 text-lg text-muted-foreground font-medium leading-relaxed">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary uppercase tracking-tight">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using the 18FiFTY3 Group website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary uppercase tracking-tight">2. Use License</h2>
                        <p>
                            Permission is granted to temporarily download one copy of the materials (information or software) on 18FiFTY3 Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Modify or copy the materials;</li>
                            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>Attempt to decompile or reverse engineer any software contained on 18FiFTY3 Group's website;</li>
                            <li>Remove any copyright or other proprietary notations from the materials; or</li>
                            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary uppercase tracking-tight">3. Disclaimer</h2>
                        <p>
                            The materials on 18FiFTY3 Group's website are provided on an 'as is' basis. 18FiFTY3 Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary uppercase tracking-tight">4. Limitations</h2>
                        <p>
                            In no event shall 18FiFTY3 Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on 18FiFTY3 Group's website.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsPage;
