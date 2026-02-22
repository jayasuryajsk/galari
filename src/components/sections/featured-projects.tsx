import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Regional Access Upgrade",
    location: "ACT",
    image: "/images/galari-project-1.png",
    scope: "Earthworks and corridor preparation",
  },
  {
    title: "Remote Corridor Works",
    location: "NSW",
    image: "/images/galari-project-2.png",
    scope: "Drainage, grading, and staged civil delivery",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="border-b border-border bg-secondary/20 py-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Projects</p>
            <h2 className="mt-3 text-5xl font-bold uppercase leading-none tracking-tight text-primary md:text-6xl">
              Current Delivery Work.
            </h2>
          </div>
          <Link href="/projects" className="text-xs font-bold uppercase tracking-[0.16em] text-primary underline decoration-2 underline-offset-8 hover:text-accent">
            View all projects
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden border border-border bg-secondary/25">
              <div className="relative h-[360px] overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10" />
              </div>
              <div className="p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">{project.location}</p>
                <h3 className="mt-2 text-3xl font-bold uppercase tracking-tight text-primary">{project.title}</h3>
                <p className="mt-2 text-base text-muted-foreground">{project.scope}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
