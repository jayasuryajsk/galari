import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function OurStory() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/DJI_20240809174150_0052_D-scaled-3.jpg"
            alt="Our Story Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container h-full flex items-center justify-center">
            <h1 className="text-center">Our Story</h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="mb-6">Who We Are</h2>
                <p className="text-lg mb-4">
                  Vaughan Civil is a leading civil construction company specializing in critical infrastructure projects across Australia. With over 13 years of experience in the field, we have established ourselves as a trusted partner for complex engineering solutions.
                </p>
                <p className="text-lg mb-4">
                  Our team brings together expertise across multiple sectors including water and wastewater infrastructure, defence projects, civil and rail construction, airport infrastructure, electrical systems, and gas and fuel infrastructure.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 py-8">
                <div className="bg-secondary p-8 rounded-lg">
                  <h3 className="mb-4">Our Mission</h3>
                  <p>
                    To deliver exceptional infrastructure solutions that exceed client expectations while maintaining the highest standards of safety, quality, and environmental responsibility.
                  </p>
                </div>
                <div className="bg-secondary p-8 rounded-lg">
                  <h3 className="mb-4">Our Vision</h3>
                  <p>
                    To be Australia's most trusted civil construction partner, recognized for innovation, safety excellence, and sustainable practices in infrastructure development.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-4">Our Values</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h5 className="mb-2">SAFETY FIRST</h5>
                    <p>Zero harm is our commitment. We prioritize the wellbeing of our team, partners, and communities.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h5 className="mb-2">EXCELLENCE</h5>
                    <p>We deliver quality outcomes through technical expertise, innovation, and attention to detail.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h5 className="mb-2">INTEGRITY</h5>
                    <p>We operate with transparency, honesty, and ethical practices in all our relationships.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h5 className="mb-2">COLLABORATION</h5>
                    <p>We work together with clients, partners, and communities to achieve shared success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <h2 className="mb-12">Our Journey</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex gap-6">
                <div className="text-primary font-bold text-2xl min-w-[120px]">2011</div>
                <div>
                  <h3 className="mb-2 text-xl">Foundation</h3>
                  <p>Vaughan Civil was established with a vision to deliver quality infrastructure projects.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-primary font-bold text-2xl min-w-[120px]">2015</div>
                <div>
                  <h3 className="mb-2 text-xl">Expansion</h3>
                  <p>Expanded capabilities to include defence and airport infrastructure projects.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-primary font-bold text-2xl min-w-[120px]">2020</div>
                <div>
                  <h3 className="mb-2 text-xl">Safety Milestone</h3>
                  <p>Achieved zero Lost Time Injuries across all projects, demonstrating our commitment to safety excellence.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-primary font-bold text-2xl min-w-[120px]">2024</div>
                <div>
                  <h3 className="mb-2 text-xl">Today</h3>
                  <p>Continuing to lead the industry with 40% women in senior leadership roles and delivering critical infrastructure across Australia.</p>
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
