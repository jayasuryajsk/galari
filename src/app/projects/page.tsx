import Image from "next/image";
import PageHeader from "@/components/sections/page-header";

const projects = [
  {
    title: "Regional Access Upgrade",
    location: "ACT",
    summary: "Road corridor preparation, earthworks, and coordinated site delivery for regional access reliability.",
    image: "/images/galari-project-1.png",
  },
  {
    title: "Remote Corridor Works",
    location: "NSW",
    summary: "Integrated civil package with staged works planning, plant coordination, and progressive handover milestones.",
    image: "/images/galari-project-2.png",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-secondary/40">
      <PageHeader
        title="Projects"
        category="Portfolio"
        breadcrumb="Projects"
        subtitle="Examples of current and recent project delivery outcomes across civil construction and land management scopes."
      />

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden border border-border bg-secondary/30">
              <div className="relative h-80">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{project.location}</p>
                <h2 className="mt-2 text-3xl font-bold uppercase tracking-tight text-primary">{project.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
