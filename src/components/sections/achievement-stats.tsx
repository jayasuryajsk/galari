import { HardHat, MapPinned, ShieldCheck } from "lucide-react";

const stats = [
  { icon: HardHat, value: "45+", label: "Projects Delivered" },
  { icon: MapPinned, value: "3", label: "States Supported" },
  { icon: ShieldCheck, value: "100%", label: "Safety-First Execution" },
];

export default function AchievementStats() {
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-4">
        <div className="border-r border-border bg-secondary/50 p-12">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Operational Metrics</p>
          <h2 className="mt-4 text-4xl font-bold uppercase leading-tight tracking-tight text-primary">
            Delivery Confidence.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">Built with practical field capability and disciplined planning.</p>
        </div>
        {stats.map((item) => (
          <article key={item.label} className="border-r border-border p-12 last:border-r-0 hover:bg-primary hover:text-primary-foreground">
            <item.icon className="h-7 w-7 text-accent" />
            <p className="mt-6 text-6xl font-bold tracking-tighter">{item.value}</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground hover:text-primary-foreground/70">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
