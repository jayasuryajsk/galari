import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function Airports() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px] w-full">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/SYD-AIR-Aerial-10.jpg"
            alt="Airport Infrastructure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container h-full flex items-center">
            <div className="max-w-3xl">
              <h5 className="mb-4 text-accent">EXPERTISE</h5>
              <h1 className="mb-6">Airports</h1>
              <p className="text-xl text-white/90 mb-8">
                Critical airport infrastructure projects ensuring operational continuity and safety for Australia's aviation sector.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8">Aviation Infrastructure Specialists</h2>
              <p className="text-lg mb-6">
                Vaughan Civil has established itself as a trusted partner for major airport infrastructure projects across Australia. We understand the unique challenges of working in live airport environments, where safety, security, and operational continuity are paramount.
              </p>
              <p className="text-lg mb-6">
                Our experience spans airside and landside projects, from runway and taxiway upgrades to terminal infrastructure, fuel systems, and utilities. We work seamlessly with airport operators to deliver projects with minimal disruption to flight operations.
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
                <h3 className="mb-4">Airside Infrastructure</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Runway and taxiway construction</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Apron and hardstand works</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Airfield lighting and signage</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Pavement rehabilitation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Drainage and stormwater systems</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="mb-4">Fuel Systems</h3>
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
                    <span>Underground storage tank works</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Fuel quality monitoring</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Emergency response systems</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="mb-4">Utilities & Services</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Electrical infrastructure</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Water and sewer systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Communications infrastructure</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ground power systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Service relocations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="mb-4">Landside Works</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Access roads and carparks</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Terminal infrastructure</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ground transport facilities</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Landscaping and amenities</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Security infrastructure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Projects Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="mb-12">Major Airport Projects</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="mb-2">Sydney Airport LER & UST Replacement</h3>
                <p className="text-muted-foreground mb-2">
                  Major replacement of aviation fuel infrastructure including underground storage tanks and hydrant refueling system at Sydney's international airport. Project delivered in live operational environment with stringent safety requirements.
                </p>
                <small>Project Value: $32M | Duration: 20 months | Client: Sydney Airport</small>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="mb-2">Taxiway Alpha Reconstruction</h3>
                <p className="text-muted-foreground mb-2">
                  Complete reconstruction of main taxiway including pavement removal, new asphalt construction, drainage upgrades, and airfield lighting installation. Night works program to minimize operational impact.
                </p>
                <small>Project Value: $18M | Duration: 16 months</small>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="mb-2">Terminal Apron Expansion</h3>
                <p className="text-muted-foreground mb-2">
                  New aircraft parking apron construction to accommodate widebody aircraft, including pavement, ground power systems, and hydrant refueling connections.
                </p>
                <small>Project Value: $22M | Duration: 14 months</small>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <h2 className="mb-12">Airport Project Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg mb-3">ASIC Cleared</h3>
                <p className="text-sm">All personnel hold Aviation Security Identification Cards for airside access.</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg mb-3">24/7 Operations</h3>
                <p className="text-sm">Flexible work programming to suit airport operational requirements.</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg mb-3">Proven Track Record</h3>
                <p className="text-sm">Multiple major airport projects delivered safely and on schedule.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container text-center">
            <h2 className="mb-6">Airport Infrastructure Partners</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us to discuss your airport infrastructure project and learn how we can support your operations.
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
