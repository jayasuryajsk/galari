"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-[1000] w-full border-b border-accent/20 bg-secondary/80 shadow-[0_14px_34px_rgba(20,18,16,0.08)] backdrop-blur-lg">
      <div className="mx-auto flex h-[82px] max-w-[1400px] items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 md:h-[96px] md:gap-6 md:px-12 lg:h-[106px]">
        <Link href="/" aria-label="GALARI Land and Civil home" className="block">
          <Image
            src="/images/galari-logo-wordmark.png"
            alt="GALARI Land and Civil"
            width={260}
            height={120}
            className="h-[56px] w-auto object-contain sm:h-[62px] md:h-[74px] lg:h-[90px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:text-accent"
            >
              <span className="after:absolute after:left-0 after:bottom-0 after:block after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full" />
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-sm border border-accent/30 bg-[linear-gradient(100deg,rgba(209,138,74,0.18),rgba(58,93,120,0.12))] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:border-accent hover:bg-accent hover:text-primary"
          >
            Start a Project
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="min-h-11 min-w-11 border border-border px-2 py-2 text-primary lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-secondary/95 lg:hidden">
          <nav className="mx-auto grid max-h-[calc(100vh-82px)] max-w-[1400px] gap-1 overflow-y-auto px-4 py-4 sm:px-6 md:max-h-[calc(100vh-96px)] md:px-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-sm py-3 text-sm font-bold uppercase tracking-[0.14em] text-primary hover:bg-black/5"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
