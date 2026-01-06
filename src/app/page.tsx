import HeroSlider from "@/components/sections/hero-slider";
import AchievementStats from "@/components/sections/achievement-stats";
import ExpertiseGrid from "@/components/sections/expertise-grid";
import SafetyResponsibility from "@/components/sections/safety-responsibility";
import FeaturedProjects from "@/components/sections/featured-projects";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AchievementStats />
      <ExpertiseGrid />
      <SafetyResponsibility />
      <FeaturedProjects />
    </>
  );
}