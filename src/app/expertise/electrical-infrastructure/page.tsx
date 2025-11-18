import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function ElectricalInfrastructure() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px] w-full">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/Cover-Photo_Electrical-Infrastructure-11.jpg"
            alt="Electrical Infrastructure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container h-full flex items-center">
            <div className="max-w-3xl">
              <h5 className="mb-4 text-accent">EXPERTISE</h5>
              <h1 className="mb-6">Electrical Infrastructure</h1>
              <p className="text-xl text-white/90 mb-8">
                High-voltage electrical infrastructure and substation construction expertise for critical power networks.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8">Powering Critical Infrastructure</h2>
              <p className="text-lg mb-6">
                Vaughan Civil delivers specialized electrical infrastructure solutions including high-voltage substations, power distribution networks, and industrial electrical systems. Our team combines civil construction expertise with electrical engineering knowledge to deliver complex power infrastructure projects.
              </p>
              <p className="text-lg mb-6">
                We work closely with network operators and electrical contractors to ensure seamless integration of civil and electrical components, maintaining the highest standards of safety and reliability.
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
                <h3 className="mb-4">Substation Construction</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>New substation builds (33kV to 132kV)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Substation upgrades and refurbishments</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Control building construction</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Equipment foundations and plinths</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cable trenching and ducting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="mb-4">Civil Works</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Site earthworks and leveling</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Reinforced concrete structures</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Drainage and stormwater systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Access roads and hardstand areas</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Security fencing and gates</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="mb-4">Underground Services</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>HV cable installation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cable pit and duct networks</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Horizontal directional drilling</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Service relocations</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Communication cable infrastructure</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="mb-4">Specialist Services</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Demolition and decommissioning</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Environmental remediation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Hazardous materials removal</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Site restoration and landscaping</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Emergency response services</span>
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
                <h3 className="mb-2">ESR 132kV Substation</h3>
                <p className="text-muted-foreground mb-2">
                  Complete construction of new 132kV substation including all civil works, equipment foundations, control building, and underground cable networks.
                </p>
                <small>Project Value: $18M | Duration: 15 months</small>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="mb-2">Zone Substation Upgrade Program</h3>
                <p className="text-muted-foreground mb-2">
                  Rolling program of zone substation upgrades across metropolitan network, including demolition, civil works, and new infrastructure installation.
                </p>
                <small>Project Value: $32M | Duration: 36 months</small>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="mb-2">Industrial Park Power Distribution</h3>
                <p className="text-muted-foreground mb-2">
                  New HV power distribution network for major industrial development including substation, underground cables, and switching stations.
                </p>
                <small>Project Value: $14M | Duration: 12 months</small>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8">Safety & Compliance</h2>
              <div className="bg-white p-8 rounded-lg">
                <p className="text-lg mb-6">
                  Electrical infrastructure projects demand the highest standards of safety and compliance. Vaughan Civil maintains comprehensive safety systems and certifications for working around high-voltage equipment.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg mb-3">Certifications</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• High-risk work licenses</li>
                      <li>• HV switching authorization</li>
                      <li>• Confined space entry</li>
                      <li>• Working at heights</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg mb-3">Safety Systems</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Integrated safety management</li>
                      <li>• Risk assessment procedures</li>
                      <li>• Emergency response plans</li>
                      <li>• Regular safety audits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container text-center">
            <h2 className="mb-6">Electrical Infrastructure Expertise</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us to discuss your electrical infrastructure project requirements.
            </p>
            <a href="/contact-us" className="btn btn-primary-filled">
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
