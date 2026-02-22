import HeroSlider from "@/components/sections/hero-slider";
import AchievementStats from "@/components/sections/achievement-stats";
import ExpertiseGrid from "@/components/sections/expertise-grid";
import SafetyResponsibility from "@/components/sections/safety-responsibility";
import FeaturedProjects from "@/components/sections/featured-projects";
import ClientLogos from "@/components/sections/client-logos";
import AdSlot from "@/components/ads/ad-slot";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AchievementStats />
      <ExpertiseGrid />
      <ClientLogos />
      <section className="bg-secondary py-12">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME ?? ""} className="min-h-[90px] border border-border" />
        </div>
      </section>
      <SafetyResponsibility />
      <FeaturedProjects />
    </>
  );
}
