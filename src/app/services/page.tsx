import Image from "next/image";
import PageHeader from "@/components/sections/page-header";

const services = [
  {
    title: "Civil Construction",
    text: "Earthworks, road preparation, drainage, and site development managed with disciplined planning and site-safe execution.",
    image: "/images/galari-service-civil.png",
  },
  {
    title: "Land Management",
    text: "Vegetation programs, corridor maintenance, and rehabilitation support tailored to location, compliance, and project phase.",
    image: "/images/galari-service-land.png",
  },
  {
    title: "Project Delivery",
    text: "End-to-end planning and execution support including mobilisation, subcontractor coordination, and progress reporting.",
    image: "/images/galari-about.png",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-secondary/40">
      <PageHeader
        title="Services"
        category="Capability"
        breadcrumb="Services"
        subtitle="Integrated civil and land services delivered with practical field systems and accountable project governance."
      />

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="overflow-hidden border border-border">
              <div className="relative h-72">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold uppercase tracking-tight text-primary">{service.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
