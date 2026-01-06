"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Linkedin, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/#services",
    sublinks: [
      { name: "Land Management", href: "/land-management" },
      { name: "Environmental Advisory", href: "/environmental-advisory" },
      { name: "The Barefoot Academy", href: "/barefoot-academy" },
      { name: "Civil Infrastructure", href: "/civil" },
      { name: "Aviation", href: "https://www.learn2fly.com.au/" },
      { name: "Housing", href: "/housing" },
    ],
  },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-500 z-[1000] border-b ${isSticky ? "bg-white/95 backdrop-blur-md py-3 shadow-md border-border" : "bg-white py-5 border-transparent"
        }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" aria-label="18fifty3 Homepage" className="block transform transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/18fifty3-logo.png"
                alt="18fifty3 Group Logo"
                width={180}
                height={50}
                className={`h-10 w-auto object-contain transition-all duration-500`}
                priority
              />
            </Link>
          </div>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-x-10">
              {navLinks.map((link) => (
                <li key={link.name} className="group relative">
                  {link.sublinks ? (
                    <>
                      <div className="flex cursor-default items-center gap-1.5 py-2">
                        {link.href ? (
                          <Link href={link.href} className="text-[13px] font-bold uppercase tracking-widest transition-colors hover:text-accent text-primary">
                            {link.name}
                          </Link>
                        ) : (
                          <span className="text-[13px] font-bold uppercase tracking-widest transition-colors text-primary">
                            {link.name}
                          </span>
                        )}
                        <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180 text-muted-foreground" />
                      </div>
                      <div className="absolute left-0 top-full z-[999] mt-0 w-64 translate-y-2 transform-gpu opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                        <div className="mt-2 bg-primary p-4 shadow-2xl skew-x-[-2deg]">
                          <div className="skew-x-[2deg] space-y-1">
                            {link.sublinks.map((sublink) => (
                              <Link key={sublink.name} href={sublink.href} className="block px-3 py-2.5 text-[12px] font-bold uppercase tracking-wider text-white/70 hover:text-accent hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-accent">
                                {sublink.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-[13px] font-bold uppercase tracking-widest transition-colors hover:text-accent ${pathname === link.href
                        ? "text-accent"
                        : "text-primary"
                        }`}
                    >
                      {link.name}
                      {pathname === link.href && (
                        <span className="block h-0.5 w-full bg-accent mt-0.5"></span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-x-8 lg:flex">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">General Enquiries</span>
              <a href="tel:+61261234567" className="text-sm font-bold text-primary hover:text-accent transition-colors">
                (02) 6123 4567
              </a>
            </div>

            <Link href="/contact" className="px-6 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-all duration-300 flex items-center gap-2">
              Tender Portal
              <div className="w-1.5 h-1.5 bg-accent group-hover:bg-primary rounded-full animate-pulse"></div>
            </Link>

            <a href="https://www.linkedin.com/company/18fifty3-group" target="_blank" rel="noopener noreferrer" aria-label="18fifty3 on LinkedIn" className="p-2 border border-border hover:border-accent hover:text-accent transition-all duration-300">
              <Linkedin size={18} />
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="p-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[1001] bg-primary transition-all duration-500 ease-in-out lg:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-8 h-[100px] border-b border-white/10">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/18fifty3-logo.png"
                alt="18fifty3 Group Logo"
                width={160}
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="text-white p-2 border border-white/20">
              <X size={24} />
            </button>
          </div>

          <nav className="flex-grow overflow-y-auto p-12">
            <ul className="flex flex-col gap-y-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.sublinks ? (
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between text-2xl font-bold uppercase tracking-[0.2em] text-white">
                        {link.name}
                        <ChevronDown className="h-6 w-6 transition-transform duration-300 group-open:rotate-180 text-accent" />
                      </summary>
                      <ul className="mt-6 space-y-4 pl-4 border-l border-white/10 ml-2">
                        {link.sublinks.map((sublink) => (
                          <li key={sublink.name}>
                            <Link href={sublink.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest text-white/50 hover:text-accent transition-colors">
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-2xl font-bold uppercase tracking-[0.2em] ${pathname === link.href ? "text-accent" : "text-white"}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-16 pt-12 border-t border-white/10 space-y-8">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Connect</span>
                <a href="https://www.linkedin.com/company/18fifty3-group" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Let's talk</span>
                <a href="tel:+61261234567" className="text-xl font-bold text-accent">
                  (02) 6123 4567
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}