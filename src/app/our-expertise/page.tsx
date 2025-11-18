import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import Link from "next/link";

const expertiseAreas = [
  {
    title: "Water & Wastewater",
    href: "/expertise/water-wastewater-infrastructure",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/63c7bdbd-d00c-44be-ae06-2dd50a81e08a-7.jpg",
    description: "Essential water infrastructure solutions for communities and industries across Australia.",
  },
  {
    title: "Defence",
    href: "/expertise/defence",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/istockphoto-1562427585-612x612-1-8.jpg",
    description: "Secure and compliant infrastructure projects for defence facilities and operations.",
  },
  {
    title: "Civil & Rail",
    href: "/expertise/civil-rail",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/IMEX-Container-Beams-9.jpg",
    description: "Comprehensive civil engineering and rail infrastructure construction services.",
  },
  {
    title: "Airports",
    href: "/expertise/airports",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/SYD-AIR-Aerial-10.jpg",
    description: "Critical airport infrastructure projects ensuring operational continuity and safety.",
  },
  {
    title: "Electrical",
    href: "/expertise/electrical-infrastructure",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/Cover-Photo_Electrical-Infrastructure-11.jpg",
    description: "High-voltage electrical infrastructure and substation construction expertise.",
  },
  {
    title: "Gas & Fuel",
    href: "/expertise/gas-fuel-infrastructure",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/block-12.png",
    description: "Safe and reliable gas and fuel infrastructure solutions for energy networks.",
  },
];

export default function OurExpertise() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/DJI_0004B-scaled-5.jpg"
            alt="Our Expertise Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container h-full flex items-center justify-center">
            <h1 className="text-center">Our Expertise</h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="mb-6">Delivering Excellence Across Infrastructure Sectors</h2>
              <p className="text-lg">
                With over 13 years of experience, Vaughan Civil has developed deep expertise across multiple infrastructure sectors. Our multidisciplinary approach ensures comprehensive solutions that meet the complex needs of modern infrastructure projects.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise Grid */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {expertiseAreas.map((area, index) => (
                <Link
                  key={index}
                  href={area.href}
                  className="group relative h-[400px] overflow-hidden rounded-lg cursor-pointer"
                >
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-white mb-3">{area.title}</h3>
                    <p className="text-white/90 text-sm">{area.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="mb-12">Our Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl mb-3">Project Management</h3>
                <p className="text-sm">End-to-end project delivery with proven methodologies and experienced teams.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl mb-3">Technical Expertise</h3>
                <p className="text-sm">Specialized engineering knowledge across multiple infrastructure disciplines.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl mb-3">Safety Excellence</h3>
                <p className="text-sm">Zero harm culture with comprehensive safety systems and training programs.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
