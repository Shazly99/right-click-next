import AboutHome from "./(Home)/AboutHome";
import HomeServices from "./(Home)/HomeServices";
import ProjectHome from "./(Home)/ProjectHome";
import ProjectsSection from "./(Home)/ProjectsSection";
import Slider from "./(Home)/Slider";
import StatsSection from "./(Home)/StatsSection";
import './(Home)/home.scss'

export default function Home() {
  return (
    <div>
      <Slider />
      <AboutHome />
      <StatsSection />
      <ProjectHome />
      <ProjectsSection />
 {/*      <HomeServices /> */}

    </div>
  );
}
