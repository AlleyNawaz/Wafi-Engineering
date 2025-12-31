import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { BusinessAreas } from "@/components/home/BusinessAreas";
import { ProjectsGrid } from "@/components/home/ProjectsGrid";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-950">
      <Hero />
      <Stats />
      <BusinessAreas />
      <ProjectsGrid />
      <Testimonials />
    </main>
  );
}
