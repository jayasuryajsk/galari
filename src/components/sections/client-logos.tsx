const sectors = [
  "Transport Infrastructure",
  "Utilities & Civil",
  "Land Rehabilitation",
  "Government Works",
  "Regional Access",
  "Defence Support",
];

export default function ClientLogos() {
  return (
    <section className="border-b border-border bg-secondary/25 py-16">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-accent">Delivery Sectors</p>
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
          {sectors.map((sector) => (
            <div key={sector} className="border border-border bg-secondary/40 px-4 py-5 text-center text-xs font-bold uppercase tracking-[0.12em] text-primary">
              {sector}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
