import Image from "next/image";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white font-body">
      <div className="mx-auto max-w-[1200px] px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-y-8 gap-x-6 text-center md:grid-cols-2 md:text-left lg:grid-cols-4">
          {/* Column 1: Logo */}
          <div className="flex flex-col items-center md:items-start">
            <a href="/" className="mb-4 inline-block">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/cropped-Vaughan-Civil-Logo-1.jpg"
                alt="Vaughan Civil Logo"
                width={150}
                height={91}
              />
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <ul className="space-y-1">
              <li>
                <a href="/" className="text-base font-normal leading-loose text-white transition duration-300 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/our-story/" className="text-base font-normal leading-loose text-white transition duration-300 hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/our-expertise/" className="text-base font-normal leading-loose text-white transition duration-300 hover:underline">
                  Expertise
                </a>
              </li>
              <li>
                <a href="/careers/" className="text-base font-normal leading-loose text-white transition duration-300 hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact-us/" className="text-base font-normal leading-loose text-white transition duration-300 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:1300427614" className="text-base font-normal text-white transition duration-300 hover:underline">
                  1300 427 614
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@vaughancivil.com.au" className="text-base font-normal text-white transition duration-300 hover:underline">
                  info@vaughancivil.com.au
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0" />
                <span className="text-base font-normal">Sydney & Regional NSW</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div className="flex justify-center md:justify-start">
            <a
              href="https://au.linkedin.com/company/vaughan-civil-pty-ltd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white transition-opacity duration-300 hover:opacity-75"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-[#999999]">
            © {new Date().getFullYear()} Vaughan Civil. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;