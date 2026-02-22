import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[linear-gradient(140deg,#0f191d,#1a1117)] text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="mb-6 inline-flex rounded-sm border border-white/15 bg-[#f6ecdd]/90 px-4 py-3 shadow-[0_14px_35px_rgba(0,0,0,0.2)]">
              <Image
                src="/images/galari-logo-wordmark.png"
                alt="GALARI Land and Civil"
                width={230}
                height={100}
                className="h-[90px] w-auto object-contain"
              />
            </div>
            <p className="max-w-md text-base leading-relaxed text-white/70">
              GALARI Land & Civil delivers disciplined project execution across civil construction, land management,
              and regional infrastructure programs.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-accent">Navigation</h4>
            <ul className="space-y-3 text-white/80">
              <li><Link href="/about" className="hover:text-accent">About</Link></li>
              <li><Link href="/services" className="hover:text-accent">Services</Link></li>
              <li><Link href="/projects" className="hover:text-accent">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-accent">Contact</h4>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center gap-3"><Mail size={16} className="text-accent" /> info@galarilandcivil.com.au</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-accent" /> (02) 6188 4700</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-accent" /> Canberra, ACT</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-5 text-xs text-white/55">
          © {new Date().getFullYear()} GALARI Land & Civil. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
