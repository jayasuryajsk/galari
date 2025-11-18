import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function Defence() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px] w-full">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/istockphoto-1562427585-612x612-1-8.jpg"
            alt="Defence Infrastructure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container h-full flex items-center">
            <div className="max-w-3xl">
              <h5 className="mb-4 text-accent">EXPERTISE</h5>
              <h1 className="mb-6">Defence</h1>
              <p className="text-xl text-white/90 mb-8">
                Secure and compliant infrastructure projects for defence facilities and operations across Australia.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8">Trusted Defence Partner</h2>
              <p className="text-lg mb-6">
                Vaughan Civil is a trusted provider of civil construction services to Australia's defence sector. We understand the unique security, compliance, and operational requirements of defence infrastructure projects and maintain the highest standards of confidentiality and professionalism.
              </p>
              <p className="text-lg mb-6">
                Our team holds appropriate security clearances and is experienced in working within secure defence establishments. We deliver projects ranging from base infrastructure upgrades to specialized facilities construction.
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
                <h3 className="mb-4">Base Infrastructure</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Airfield and runway works</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Road and pavement construction</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Facility upgrades and refurbishments</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Hardstand and apron construction</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Base civil works and landscaping</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="mb-4">Utilities & Services</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Water and sewer infrastructure</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Electrical and communications</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Stormwater drainage systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Fuel and gas infrastructure</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Service relocations and upgrades</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="mb-4">Specialist Facilities</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Secure storage facilities</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Training infrastructure</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Maintenance hangars and workshops</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Vehicle hardstand areas</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ammunition facilities</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="mb-4">Environmental Works</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Site remediation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Contaminated land management</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Asbestos removal and disposal</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Demolition and site clearance</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Environmental monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8">Security & Compliance</h2>
              <div className="bg-secondary p-8 rounded-lg">
                <p className="text-lg mb-6">
                  Vaughan Civil maintains rigorous security protocols and compliance standards for defence sector work. Our commitment to security and confidentiality is paramount.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg mb-4">Security Clearances</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Baseline security clearances</li>
                      <li>• NV1 and NV2 cleared personnel</li>
                      <li>• Secure access protocols</li>
                      <li>• Ongoing vetting processes</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg mb-4">Compliance Standards</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Defence security guidelines</li>
                      <li>• AS 4801 safety management</li>
                      <li>• ISO quality certifications</li>
                      <li>• Environmental compliance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Projects Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <h2 className="mb-12">Defence Projects</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="mb-3">RAAF Base Infrastructure Upgrade</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive upgrade of base infrastructure including airfield pavement rehabilitation, drainage systems, and utility services at a major RAAF facility.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Defence Estate</span>
                  <span>•</span>
                  <span>Baseline Clearance Required</span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <h3 className="mb-3">Naval Base Wharf Works</h3>
                <p className="text-muted-foreground mb-4">
                  Civil construction and utility works supporting wharf infrastructure upgrade at naval facility, delivered within secure operational environment.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Royal Australian Navy</span>
                  <span>•</span>
                  <span>NV1 Clearance Required</span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <h3 className="mb-3">Army Training Facility Construction</h3>
                <p className="text-muted-foreground mb-4">
                  New training facility construction including buildings, hardstand areas, utilities, and environmental works at army base.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Australian Army</span>
                  <span>•</span>
                  <span>Baseline Clearance Required</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="mb-12">Why Choose Vaughan Civil for Defence Projects</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg mb-3">Security Focused</h3>
                <p className="text-sm">Cleared personnel and secure work practices for sensitive defence environments.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg mb-3">Proven Delivery</h3>
                <p className="text-sm">Track record of successful defence infrastructure projects delivered on time and budget.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg mb-3">Experienced Team</h3>
                <p className="text-sm">Skilled workforce with defence sector experience and understanding of unique requirements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container text-center">
            <h2 className="mb-6">Defence Infrastructure Solutions</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us to discuss your defence infrastructure requirements and learn how we can support your project.
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
