import { Leaf, Shield, Users } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: Shield,
    label: "Safety",
    title: "HSEQ Discipline",
    description: "Uncompromising safety planning, clear site controls, and measured reporting across every work front.",
  },
  {
    icon: Users,
    label: "People",
    title: "Team-Led Delivery",
    description: "Experienced supervisors and crews aligned to scope, operating environment, and stakeholder expectations.",
  },
  {
    icon: Leaf,
    label: "Environment",
    title: "Land Stewardship",
    description: "Practical environmental management integrated with civil programs to protect long-term project outcomes.",
  },
];

export default function SafetyResponsibility() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-primary py-24 text-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-14 flex flex-col justify-between gap-10 border-b border-white/10 pb-12 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">How We Operate</p>
            <h2 className="mt-4 text-5xl font-bold uppercase leading-[0.92] tracking-tight md:text-6xl">
              Governance and Execution.
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-base leading-relaxed text-white/70">
              GALARI structures delivery teams to match project size, risk profile, and operating environment.
              The focus is straightforward: safe work, clear communication, and measurable progress.
            </p>
            <Link href="/contact" className="mt-6 inline-block text-xs font-bold uppercase tracking-[0.16em] text-accent underline decoration-2 underline-offset-8 hover:text-white">
              Talk to our team
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="border border-white/10 bg-white/[0.03] p-8">
              <pillar.icon className="h-6 w-6 text-accent" />
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">{pillar.label}</p>
              <h3 className="mt-2 text-2xl font-bold uppercase tracking-tight">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
