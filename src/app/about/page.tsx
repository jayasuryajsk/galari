import Image from "next/image";
import PageHeader from "@/components/sections/page-header";

export default function AboutPage() {
  return (
    <div className="bg-secondary/40">
      <PageHeader
        title="About GALARI"
        category="Company"
        breadcrumb="About"
        subtitle="GALARI Land & Civil provides practical, field-led civil and land management delivery for public and private sector programs."
      />

      <section className="mx-auto grid max-w-[1600px] gap-16 px-6 py-24 md:px-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-5xl font-bold uppercase leading-tight tracking-tight text-primary">
            Built for practical outcomes.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Our teams operate with clear systems, accountable site leadership, and straightforward communication.
            We align scope, program, and risk controls early so delivery stays predictable from mobilisation through handover.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            GALARI combines civil capability with land stewardship thinking, helping clients deliver infrastructure outcomes while
            protecting long-term environmental and community value.
          </p>
        </div>
        <div className="relative min-h-[540px] overflow-hidden border border-border">
          <Image src="/images/galari-about.png" alt="GALARI site operations" fill className="object-cover" />
        </div>
      </section>
    </div>
  );
}
