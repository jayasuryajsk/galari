"use client";

import React from "react";
import PageHeader from "@/components/sections/page-header";

const PrivacyPage = () => {
    return (
        <div className="bg-white">
            <PageHeader
                title="Privacy Policy"
                category="Legal"
                breadcrumb="Privacy"
                subtitle="Your privacy is important to us. This policy outlines how we manage your personal information."
            />

            <section className="py-24 max-w-[1000px] mx-auto px-6 md:px-12">
                <div className="space-y-12 text-lg text-muted-foreground font-medium leading-relaxed">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary uppercase tracking-tight">1. Introduction</h2>
                        <p>
                            18FiFTY3 Group ("we", "us", or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and disclose information about you when you access or use our website and services.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary uppercase tracking-tight">2. Information We Collect</h2>
                        <p>
                            We may collect personal information that you provide directly to us, such as when you:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Fill out a contact form or enquiry.</li>
                            <li>Subscribe to our newsletter or updates.</li>
                            <li>communicate with us via third-party social media sites.</li>
                            <li>Request customer support.</li>
                        </ul>
                        <p>
                            The types of information we may collect include your name, email address, phone number, company name, and any other information you choose to provide.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary uppercase tracking-tight">3. How We Use Your Information</h2>
                        <p>
                            We may use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide, maintain, and improve our services.</li>
                            <li>Respond to your comments, questions, and requests.</li>
                            <li>Send you technical notices, updates, security alerts, and support messages.</li>
                            <li>Communicate with you about products, services, offers, and events.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary uppercase tracking-tight">4. Cookies and Tracking Technologies</h2>
                        <p>
                            We use cookies and similar technologies to understand website usage, improve performance, and support marketing activity. This may include analytics and advertising technologies such as Google Analytics, Google Tag Manager, Google AdSense, and Meta Pixel.
                        </p>
                        <p>
                            You can manage non-essential tracking preferences through our cookie consent controls. Essential cookies remain enabled to support core site functionality.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary uppercase tracking-tight">5. Advertising and Remarketing</h2>
                        <p>
                            We may use advertising technologies to measure campaign performance and provide more relevant ads. These services may collect browser identifiers, page interaction signals, and referral information.
                        </p>
                        <p>
                            You can opt out of personalized advertising by adjusting your consent preferences and browser settings.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary uppercase tracking-tight">6. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <address className="not-italic font-bold text-primary block mt-4">
                            18FiFTY3 Group<br />
                            Pialligo, ACT 2609<br />
                            <a href="mailto:info@18fifty3.com.au" className="text-accent hover:underline">info@18fifty3.com.au</a>
                        </address>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPage;
