import Header from "@/components/sections/header";
import HeroSlider from "@/components/sections/hero-slider";
import AchievementStats from "@/components/sections/achievement-stats";
import ExpertiseGrid from "@/components/sections/expertise-grid";
import FeaturedProjects from "@/components/sections/featured-projects";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[100px]">
        <HeroSlider />
        <AchievementStats />
        <ExpertiseGrid />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  );
}