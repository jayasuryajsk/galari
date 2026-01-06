import Image from "next/image";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white font-body border-t border-border">
      <div className="mx-auto max-w-[1240px] px-8 py-16">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-2 md:text-left lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Logo */}
          <div className="flex flex-col items-center md:items-start">
            <a href="/" className="mb-4 inline-block transform transition-transform duration-300 hover:scale-[1.05]">
              <Image
                src="/18fifty3-logo.png"
                alt="18fifty3 Group Logo"
                width={160}
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-sm text-white/70 leading-relaxed max-w-[240px]">
              Indigenous-Owned Environmental & Civil Services. Delivering excellence across Australia.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/#services" },
                { name: "Team", href: "/team" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-white/70 transition-colors duration-200 hover:text-accent">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start gap-3 text-white/70">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+61261234567" className="text-sm hover:text-white transition-colors">
                  (02) 6123 4567
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-white/70">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:info@18fifty3.com.au" className="text-sm hover:text-white transition-colors">
                  info@18fifty3.com.au
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-3 text-white/70">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm">Canberra, ACT</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold mb-6">Follow Us</h4>
            <a
              href="https://www.linkedin.com/company/18fifty3-group"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/70 transition-all duration-300 hover:text-accent hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} 18fifty3 Group. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-xs text-white/50 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-xs text-white/50 hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;