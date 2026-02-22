import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Civil Works",
    text: "Integrated earthworks, road preparation, and site development delivered with strong planning discipline and safe execution.",
    image: "/images/galari-service-civil.png",
  },
  {
    title: "Land Management",
    text: "Vegetation programs, rehabilitation support, and practical landcare outcomes for regional and metropolitan contexts.",
    image: "/images/galari-service-land.png",
  },
  {
    title: "Project Delivery",
    text: "From scoping to handover, GALARI coordinates crews, plant, and subcontractors to keep delivery predictable and transparent.",
    image: "/images/galari-about.png",
  },
];

export default function ExpertiseGrid() {
  return (
    <section id="services" className="border-b border-border bg-secondary/20 py-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-14 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Capabilities</p>
            <h2 className="mt-3 text-5xl font-bold uppercase leading-none tracking-tight text-primary md:text-6xl">
              Core Service Areas.
            </h2>
          </div>
          <p className="max-w-xl text-base font-medium text-muted-foreground">
            Practical field operations with governance-ready reporting for civil construction, land management,
            and multi-package infrastructure works.
          </p>
        </div>

        <div className="grid gap-0 border border-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group border-r border-border bg-secondary/45 last:border-r-0">
              <div className="relative h-80 overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/35 group-hover:bg-primary/15" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold uppercase tracking-tight text-primary">{service.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{service.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/services" className="text-xs font-bold uppercase tracking-[0.16em] text-primary underline decoration-2 underline-offset-8 hover:text-accent">
            View Full Service Breakdown
          </Link>
        </div>
      </div>
    </section>
  );
}
