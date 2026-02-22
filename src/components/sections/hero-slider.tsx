import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
  return (
    <section className="relative min-h-[82vh] overflow-hidden border-b border-[#b87e4d]/25 text-white">
      <Image
        src="/images/galari-hero.png"
        alt="GALARI civil operations team"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,hsl(var(--brand-primary)),hsla(209,22%,30%,0.8)_42%,hsla(35,20%,14%,0.25))]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:84px_84px]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Civil Construction and Land Management</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-bold uppercase leading-[0.9] tracking-tight md:text-7xl xl:text-[7.2rem]">
          Built for Ground Conditions. Driven by Delivery.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-white/85">
          GALARI Land & Civil partners with government, infrastructure, and private-sector clients to deliver practical
          civil and land management outcomes across Australia.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/services" className="bg-accent px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-[#f3e3cd]">
            Explore Services
          </Link>
          <Link href="/contact" className="border border-white/25 bg-white/6 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-accent hover:text-accent">
            Request a Capability Statement
          </Link>
        </div>
      </div>
    </section>
  );
}
