import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function GasFuelInfrastructure() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px] w-full">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/block-12.png"
            alt="Gas & Fuel Infrastructure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container h-full flex items-center">
            <div className="max-w-3xl">
              <h5 className="mb-4 text-accent">EXPERTISE</h5>
              <h1 className="mb-6">Gas & Fuel Infrastructure</h1>
              <p className="text-xl text-white/90 mb-8">
                Safe and reliable gas and fuel infrastructure solutions for energy networks across Australia.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8">Critical Energy Infrastructure</h2>
              <p className="text-lg mb-6">
                Vaughan Civil specializes in the construction and maintenance of gas distribution networks and fuel infrastructure. Our team has extensive experience delivering projects in high-risk environments, with an unwavering focus on safety and compliance.
              </p>
              <p className="text-lg mb-6">
                From gas pipeline installation to fuel storage facilities and airport refueling systems, we deliver infrastructure that keeps Australia's energy networks operating safely and efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <h2 className="mb-12">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="mb-4">Gas Distribution</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Gas pipeline installation and upgrades</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Pressure regulating stations</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Gas meter installations</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Service connections and mains</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Pipeline rehabilitation and maintenance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="mb-4">Fuel Infrastructure</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Fuel storage tank installation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Underground tank removals</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Fuel pipeline networks</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Dispensing equipment foundations</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Bunding and containment systems</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="mb-4">Airport Fuel Systems</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Aviation fuel pipeline installation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Hydrant refueling systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tank farm construction</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Fuel quality monitoring systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Emergency shutdown systems</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="mb-4">Compliance & Safety</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Environmental compliance</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Leak detection systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cathodic protection</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Pressure testing and certification</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>As-built documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Projects Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="mb-12">Featured Projects</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="mb-2">Sydney Airport Fuel System Upgrade</h3>
                <p className="text-muted-foreground mb-2">
                  Major upgrade of aviation fuel infrastructure including underground storage tanks, hydrant system pipelines, and distribution networks across the airport precinct.
                </p>
                <small>Project Value: $25M | Duration: 18 months</small>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="mb-2">Gas Distribution Network Expansion</h3>
                <p className="text-muted-foreground mb-2">
                  Extension of natural gas distribution network to new residential developments including main installation, pressure reduction stations, and service connections.
                </p>
                <small>Project Value: $8M | Duration: 12 months</small>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="mb-2">Industrial Fuel Storage Facility</h3>
                <p className="text-muted-foreground mb-2">
                  Construction of new fuel storage and distribution facility for industrial client including tank installation, bunding, pipeline networks, and safety systems.
                </p>
                <small>Project Value: $12M | Duration: 14 months</small>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8">Safety First Approach</h2>
              <div className="bg-white p-8 rounded-lg">
                <p className="text-lg mb-6">
                  Gas and fuel infrastructure projects involve inherent risks. Our comprehensive safety management systems and highly trained workforce ensure zero-harm outcomes on every project.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">0</div>
                    <p className="text-sm font-medium">Lost Time Injuries</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <p className="text-sm font-medium">Safety Compliance</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <p className="text-sm font-medium">Emergency Response</p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="text-lg mb-4">Our Safety Commitments</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Comprehensive risk assessments for all activities</li>
                    <li>• Continuous gas monitoring and detection systems</li>
                    <li>• Hot work permits and isolation procedures</li>
                    <li>• Emergency response planning and training</li>
                    <li>• Regular safety audits and inspections</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container text-center">
            <h2 className="mb-6">Discuss Your Gas & Fuel Project</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact our experienced team to learn how we can support your energy infrastructure needs.
            </p>
            <a href="/contact-us" className="btn btn-primary-filled">
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
