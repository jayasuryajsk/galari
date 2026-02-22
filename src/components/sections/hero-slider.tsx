import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden border-b border-[#b87e4d]/25 text-white md:min-h-[82vh]">
      <Image
        src="/images/galari-hero.png"
        alt="GALARI civil operations team"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,hsl(var(--brand-primary)),hsla(209,22%,30%,0.8)_42%,hsla(35,20%,14%,0.25))]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:84px_84px]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-18 sm:px-6 sm:py-22 md:px-12 md:py-40">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent sm:text-xs sm:tracking-[0.2em]">
          Civil Construction and Land Management
        </p>
        <h1 className="mt-4 max-w-4xl text-[2.1rem] font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl md:mt-5 md:text-7xl xl:text-[7.2rem]">
          Built for Ground Conditions. Driven by Delivery.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
          GALARI Land & Civil partners with government, infrastructure, and private-sector clients to deliver practical
          civil and land management outcomes across Australia.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
          <Link
            href="/services"
            className="w-full bg-accent px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-[#f3e3cd] sm:w-auto"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="w-full border border-white/25 bg-white/6 px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-accent hover:text-accent sm:w-auto"
          >
            Request a Capability Statement
          </Link>
        </div>
      </div>
    </section>
  );
}
