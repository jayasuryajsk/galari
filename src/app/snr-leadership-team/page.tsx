import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";

const leaders = [
  {
    name: "Michael Vaughan",
    role: "Managing Director",
    bio: "Michael founded Vaughan Civil with a vision to deliver exceptional infrastructure solutions. With over 25 years of industry experience, he leads the strategic direction of the company.",
  },
  {
    name: "Sarah Thompson",
    role: "Operations Director",
    bio: "Sarah oversees all operational aspects of Vaughan Civil's projects, ensuring delivery excellence and client satisfaction across our diverse portfolio.",
  },
  {
    name: "James Chen",
    role: "Technical Director",
    bio: "James brings deep technical expertise in civil engineering and leads our innovation initiatives, ensuring we stay at the forefront of industry best practices.",
  },
  {
    name: "Rebecca Martinez",
    role: "Finance Director",
    bio: "Rebecca manages the financial operations and strategic planning, supporting sustainable growth and maintaining our strong financial position.",
  },
  {
    name: "David Armstrong",
    role: "Safety & Quality Manager",
    bio: "David is responsible for maintaining our zero-harm safety culture and ensuring quality standards across all projects and operations.",
  },
  {
    name: "Emma Wilson",
    role: "People & Culture Director",
    bio: "Emma leads our diversity and inclusion initiatives and oversees talent development, ensuring Vaughan Civil remains an employer of choice.",
  },
];

export default function SeniorLeadershipTeam() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/DJI_20240619144056_0073_rdc-scaled-4.jpg"
            alt="Leadership Team Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container h-full flex items-center justify-center">
            <h1 className="text-center">Senior Leadership Team</h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="mb-6">Leading with Experience</h2>
              <p className="text-lg">
                Our senior leadership team brings together decades of combined experience in civil construction, engineering, and infrastructure development. They guide Vaughan Civil's strategic vision and operational excellence.
              </p>
            </div>

            {/* Leadership Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {leaders.map((leader, index) => (
                <div key={index} className="bg-secondary rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="h-64 bg-gradient-to-br from-primary to-accent"></div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl">{leader.name}</h3>
                    <h5 className="mb-4">{leader.role}</h5>
                    <p className="text-sm leading-relaxed">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-12">Leadership Principles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="mb-3 text-lg">Accountability</h3>
                  <p className="text-sm">
                    Our leaders take ownership of outcomes and lead by example in all aspects of safety, quality, and performance.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="mb-3 text-lg">Innovation</h3>
                  <p className="text-sm">
                    We encourage creative problem-solving and continuous improvement in our processes and delivery methods.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="mb-3 text-lg">Collaboration</h3>
                  <p className="text-sm">
                    Our leadership fosters teamwork across all levels, building strong partnerships with clients and stakeholders.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="mb-3 text-lg">Development</h3>
                  <p className="text-sm">
                    We invest in the growth of our people, creating pathways for the next generation of industry leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
