import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function WaterWastewaterInfrastructure() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px] w-full">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/63c7bdbd-d00c-44be-ae06-2dd50a81e08a-7.jpg"
            alt="Water & Wastewater Infrastructure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container h-full flex items-center">
            <div className="max-w-3xl">
              <h5 className="mb-4 text-accent">EXPERTISE</h5>
              <h1 className="mb-6">Water & Wastewater Infrastructure</h1>
              <p className="text-xl text-white/90 mb-8">
                Delivering essential water infrastructure solutions for communities and industries across Australia.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8">Critical Water Infrastructure</h2>
              <p className="text-lg mb-6">
                Vaughan Civil specializes in the design, construction, and upgrade of water and wastewater infrastructure. Our expertise spans water treatment plants, pumping stations, pipeline networks, and storage facilities.
              </p>
              <p className="text-lg mb-6">
                We understand the critical importance of water infrastructure to communities and work diligently to minimize disruption while ensuring the highest standards of quality and compliance.
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
                <h3 className="mb-4">Water Treatment Facilities</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Treatment plant construction and upgrades</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Filtration and purification systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Chemical dosing infrastructure</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Water quality monitoring systems</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="mb-4">Wastewater Management</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Wastewater treatment plants</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Sewage pumping stations</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Sewer network upgrades</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Odor control systems</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="mb-4">Pipeline Infrastructure</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Water main installation and replacement</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Sewer main construction</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Pipeline rehabilitation and relining</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Pressure testing and commissioning</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="mb-4">Pumping Stations</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>New pumping station construction</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Station upgrades and refurbishment</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Emergency backup systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>SCADA and control systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Projects Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="mb-12">Key Projects</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="mb-2">Regional Water Treatment Plant Upgrade</h3>
                <p className="text-muted-foreground mb-2">
                  Complete upgrade of a major regional water treatment facility including new filtration systems, chemical dosing infrastructure, and SCADA controls.
                </p>
                <small>Project Value: $15M | Duration: 18 months</small>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="mb-2">Metropolitan Sewer Main Replacement</h3>
                <p className="text-muted-foreground mb-2">
                  Replacement of aging sewer infrastructure including 5km of trunk sewer mains and associated pumping stations in a live urban environment.
                </p>
                <small>Project Value: $12M | Duration: 12 months</small>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="mb-3">Wastewater Treatment Plant Expansion</h3>
                <p className="text-muted-foreground mb-2">
                  Expansion of existing treatment capacity to accommodate population growth, including new treatment trains and upgrade of existing infrastructure.
                </p>
                <small>Project Value: $22M | Duration: 24 months</small>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container text-center">
            <h2 className="mb-6">Discuss Your Water Infrastructure Project</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact our team to learn how we can support your water and wastewater infrastructure needs.
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
