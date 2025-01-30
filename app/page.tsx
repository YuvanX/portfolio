import About from "@/components/About";
import HeaderSection from "@/components/HeaderSection";
import HeroicSection from "@/components/HeroicSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <HeaderSection/>
      <HeroicSection/>
      <ProjectsSection/>
      <About/>
    </div>
  );
}
