import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";

const benefits = [
  "Competitive salary packages",
  "Professional development opportunities",
  "Career progression pathways",
  "Flexible work arrangements",
  "Health and wellness programs",
  "Industry-leading safety culture",
];

const roles = [
  {
    title: "Civil Engineer",
    location: "Sydney, NSW",
    type: "Full-time",
    description: "Seeking experienced civil engineer to lead infrastructure projects across multiple sectors.",
  },
  {
    title: "Project Manager",
    location: "Melbourne, VIC",
    type: "Full-time",
    description: "Senior project manager required for major rail infrastructure program.",
  },
  {
    title: "Site Supervisor",
    location: "Brisbane, QLD",
    type: "Full-time",
    description: "Experienced supervisor for water and wastewater infrastructure projects.",
  },
  {
    title: "Electrician",
    location: "Sydney, NSW",
    type: "Full-time",
    description: "Qualified electrician for high-voltage substation construction projects.",
  },
];

export default function Careers() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/Crop-for-Website-scaled-6.jpg"
            alt="Careers Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container h-full flex items-center justify-center">
            <div className="text-center max-w-3xl">
              <h1 className="mb-6">Build Your Career With Us</h1>
              <p className="text-xl text-white/90">
                Join a team that's shaping Australia's infrastructure future
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="mb-6">Why Work With Vaughan Civil</h2>
              <p className="text-lg">
                At Vaughan Civil, we're committed to creating an inclusive workplace where talented people can grow their careers and make a real impact on critical infrastructure projects.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl mb-3">Career Growth</h3>
                <p className="text-sm">Clear progression pathways and professional development opportunities to advance your career.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl mb-3">Diverse Team</h3>
                <p className="text-sm">Work alongside talented professionals from diverse backgrounds in an inclusive environment.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl mb-3">Safety First</h3>
                <p className="text-sm">Industry-leading safety culture with zero LTI record and comprehensive training programs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <h2 className="mb-12 text-center">Benefits & Perks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg flex items-start gap-4">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="mb-12">Current Openings</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {roles.map((role, index) => (
                <div key={index} className="bg-secondary p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="mb-2">{role.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {role.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {role.type}
                        </span>
                      </div>
                    </div>
                    <button className="btn btn-primary-filled mt-4 md:mt-0">
                      Apply Now
                    </button>
                  </div>
                  <p className="text-muted-foreground">{role.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg mb-4">Don't see a role that fits?</p>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <button className="btn btn-primary-outline">
                Submit General Application
              </button>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <h2 className="mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="mb-3 text-lg">Safety</h3>
                <p className="text-sm">Zero harm is our commitment. We prioritize the wellbeing of our team above all else.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="mb-3 text-lg">Excellence</h3>
                <p className="text-sm">We strive for the highest standards in everything we do, delivering quality outcomes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="mb-3 text-lg">Integrity</h3>
                <p className="text-sm">We operate with honesty, transparency, and ethical practices in all our relationships.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="mb-3 text-lg">Collaboration</h3>
                <p className="text-sm">We work together to achieve shared success and support each other's growth.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
