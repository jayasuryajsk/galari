"use client";

import { useEffect, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "@/components/sections/page-header";

export default function ContactPage() {
  const [nextUrl, setNextUrl] = useState("https://www.galarilandcivil.com.au/contact?submitted=1");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setNextUrl(`${window.location.origin}/contact?submitted=1`);
    }
  }, []);

  return (
    <div className="bg-secondary/40">
      <PageHeader
        title="Contact"
        category="Enquiries"
        breadcrumb="Contact"
        subtitle="Speak with GALARI Land & Civil about civil packages, land management scopes, and project mobilisation planning."
      />

      <section className="mx-auto grid max-w-[1600px] gap-16 px-6 py-24 md:px-12 lg:grid-cols-2">
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl font-bold uppercase tracking-tight text-primary">Direct communication.</h2>
            <p className="mt-4 text-lg text-muted-foreground">We respond quickly to capability requests, project enquiries, and tender-related communication.</p>
          </div>

          <div className="space-y-5 border border-border p-8">
            <p className="flex items-center gap-3 text-lg"><Phone className="text-accent" /> (02) 6188 4700</p>
            <p className="flex items-center gap-3 text-lg"><Mail className="text-accent" /> info@galarilandcivil.com.au</p>
            <p className="flex items-center gap-3 text-lg"><MapPin className="text-accent" /> Canberra, ACT</p>
          </div>
        </div>

        <div className="bg-primary p-10 text-white">
          <h3 className="text-3xl font-bold uppercase tracking-tight">Send an enquiry.</h3>
          <form className="mt-8 space-y-5" action="https://formsubmit.co/info@galarilandcivil.com.au" method="POST">
            <input type="hidden" name="_subject" value="GALARI Website Enquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={nextUrl} />
            <input name="name" required type="text" placeholder="Full Name" className="w-full border border-white/15 bg-white/5 p-4 text-white outline-none placeholder:text-white/50" />
            <input name="email" required type="email" placeholder="Email" className="w-full border border-white/15 bg-white/5 p-4 text-white outline-none placeholder:text-white/50" />
            <input name="subject" required type="text" placeholder="Subject" className="w-full border border-white/15 bg-white/5 p-4 text-white outline-none placeholder:text-white/50" />
            <textarea name="message" required rows={6} placeholder="Message" className="w-full border border-white/15 bg-white/5 p-4 text-white outline-none placeholder:text-white/50" />
            <button type="submit" className="w-full bg-accent py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary hover:bg-primary/90 hover:text-white">
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
