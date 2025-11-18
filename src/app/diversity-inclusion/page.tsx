import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function DiversityInclusion() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[100px]">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/defc71b0-8e90-4aef-a168-e06709cb16c8-vaughancivil-com-au/assets/images/REDbank_Feb25_73-scaled-2.jpg"
            alt="Diversity & Inclusion Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container h-full flex items-center justify-center">
            <h1 className="text-center">Diversity & Inclusion</h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="mb-6">Building an Inclusive Workplace</h2>
              <p className="text-lg">
                At Vaughan Civil, we believe that diversity drives innovation and inclusion creates opportunity. We are committed to fostering a workplace where everyone can thrive.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <div className="text-center p-8 bg-secondary rounded-lg">
                <div className="text-5xl font-bold text-primary mb-4">40%</div>
                <p className="text-lg font-medium">Women in Senior Leadership</p>
              </div>
              <div className="text-center p-8 bg-secondary rounded-lg">
                <div className="text-5xl font-bold text-primary mb-4">25+</div>
                <p className="text-lg font-medium">Nationalities Represented</p>
              </div>
              <div className="text-center p-8 bg-secondary rounded-lg">
                <div className="text-5xl font-bold text-primary mb-4">100%</div>
                <p className="text-lg font-medium">Equal Pay Commitment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Commitments Section */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <h2 className="mb-12">Our Commitments</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="mb-4">Gender Equality</h3>
                <p className="mb-4">
                  We are proud to have achieved 40% women in senior leadership roles, well above the industry average. We continue to work towards equal representation at all levels of our organization.
                </p>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Mentorship programs for women in construction</li>
                  <li>Flexible work arrangements for all employees</li>
                  <li>Equal pay audits and transparency</li>
                  <li>Career development pathways for underrepresented groups</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="mb-4">Cultural Diversity</h3>
                <p className="mb-4">
                  Our workforce represents over 25 nationalities, bringing diverse perspectives and experiences that enrich our projects and workplace culture.
                </p>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Cultural awareness training for all staff</li>
                  <li>Celebration of cultural events and traditions</li>
                  <li>Language support and resources</li>
                  <li>Inclusive recruitment practices</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="mb-4">Indigenous Engagement</h3>
                <p className="mb-4">
                  We recognize and respect the Traditional Owners of the lands on which we work and are committed to meaningful engagement with Indigenous communities.
                </p>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Indigenous employment and training programs</li>
                  <li>Partnerships with Indigenous-owned businesses</li>
                  <li>Cultural heritage awareness and protection</li>
                  <li>Community consultation and engagement</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="mb-4">Accessibility & Inclusion</h3>
                <p className="mb-4">
                  We are committed to creating an accessible and inclusive environment for people of all abilities.
                </p>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Accessible workplace design and facilities</li>
                  <li>Reasonable accommodations policy</li>
                  <li>Inclusive recruitment and onboarding</li>
                  <li>Ongoing disability awareness training</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container text-center">
            <h2 className="mb-6">Join Our Inclusive Team</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our commitment to diversity and inclusion.
            </p>
            <a href="/careers" className="btn btn-primary-filled">
              Explore Career Opportunities
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
