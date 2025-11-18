"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Linkedin, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "About",
    sublinks: [
      { name: "Our Story", href: "/our-story" },
      { name: "Diversity & Inclusion", href: "/diversity-inclusion" },
      { name: "Snr Leadership Team", href: "/snr-leadership-team" },
    ],
  },
  {
    name: "Expertise",
    href: "/our-expertise",
    sublinks: [
      { name: "Water & Wastewater", href: "/expertise/water-wastewater-infrastructure" },
      { name: "Civil & Rail", href: "/expertise/civil-rail" },
      { name: "Electrical", href: "/expertise/electrical-infrastructure" },
      { name: "Gas & Fuel", href: "/expertise/gas-fuel-infrastructure" },
      { name: "Airports", href: "/expertise/airports" },
      { name: "Defence", href: "/expertise/defence" },
    ],
  },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact-us" },
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
      className={`fixed top-0 left-0 w-full bg-white transition-shadow duration-300 z-[1000] ${
        isSticky ? "shadow-[0_2px_8px_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="flex h-[100px] items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Vaughan Civil Homepage">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/cropped-Vaughan-Civil-Logo-1.jpg"
                alt="Vaughan Civil Logo"
                width={214}
                height={130}
                className="h-auto w-[150px]"
                priority
              />
            </Link>
          </div>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-x-8">
              {navLinks.map((link) => (
                <li key={link.name} className="group relative">
                  {link.sublinks ? (
                    <>
                      <div className="flex cursor-default items-center gap-1">
                        {link.href ? (
                           <Link href={link.href} className="text-base font-medium text-foreground hover:text-primary hover:underline">
                            {link.name}
                          </Link>
                        ) : (
                          <span className="text-base font-medium text-foreground">
                            {link.name}
                          </span>
                        )}
                        <ChevronDown className="h-4 w-4 text-foreground/80 transition-transform duration-200 group-hover:rotate-180" />
                      </div>
                      <ul className="absolute left-1/2 top-full z-[999] mt-2 w-max -translate-x-1/2 scale-95 transform-gpu space-y-2 rounded-md bg-white p-4 opacity-0 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                        {link.sublinks.map((sublink) => (
                          <li key={sublink.name}>
                            <Link href={sublink.href} className="block whitespace-nowrap px-2 py-1 text-base font-medium text-foreground hover:text-primary hover:underline">
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-base font-medium hover:text-primary hover:underline ${
                        pathname === link.href ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-x-5 lg:flex">
            <a href="tel:1300427614" aria-label="Call Vaughan Civil" className="text-foreground hover:text-primary">
              <Phone size={18} />
            </a>
            <a href="https://au.linkedin.com/company/vaughan-civil-pty-ltd" target="_blank" rel="noopener noreferrer" aria-label="Vaughan Civil on LinkedIn" className="text-foreground hover:text-primary">
              <Linkedin size={18} />
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="text-foreground"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[1001] transform bg-white transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-8 h-[100px] border-b border-border">
             <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/cropped-Vaughan-Civil-Logo-1.jpg"
                alt="Vaughan Civil Logo"
                width={214}
                height={130}
                className="h-auto w-[150px]"
              />
            </Link>
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X size={28} />
            </button>
          </div>
          
          <nav className="flex-grow overflow-y-auto p-8">
            <ul className="flex flex-col gap-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.sublinks ? (
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-medium">
                        {link.href ? (
                          <Link href={link.href} onClick={() => setIsMenuOpen(false)}>{link.name}</Link>
                        ) : (
                          <span>{link.name}</span>
                        )}
                        <ChevronDown className="h-5 w-5 transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      <ul className="mt-4 space-y-4 pl-4">
                        {link.sublinks.map((sublink) => (
                          <li key={sublink.name}>
                            <Link href={sublink.href} onClick={() => setIsMenuOpen(false)} className="text-lg text-muted-foreground hover:text-primary">
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
                      className={`text-xl font-medium ${pathname === link.href ? "text-primary" : "text-foreground"}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
             <div className="mt-8 flex items-center gap-x-6 border-t border-border pt-6">
                <a href="tel:1300427614" aria-label="Call Vaughan Civil" onClick={() => setIsMenuOpen(false)}>
                  <Phone size={22} />
                </a>
                <a href="https://au.linkedin.com/company/vaughan-civil-pty-ltd" target="_blank" rel="noopener noreferrer" aria-label="Vaughan Civil on LinkedIn" onClick={() => setIsMenuOpen(false)}>
                  <Linkedin size={22} />
                </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}