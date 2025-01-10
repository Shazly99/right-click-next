import AboutHome from "./(Home)/AboutHome";
import HomeAddress from "./(Home)/HomeAddress";
import HomeClients from "./(Home)/HomeClients";
import HomeContactsUS from "./(Home)/HomeContactsUS";
import HomeServices from "./(Home)/HomeServices";
import ProjectHome from "./(Home)/ProjectHome";
import ProjectsSection from "./(Home)/ProjectsSection";
import Slider from "./(Home)/Slider";
import StatsSection from "./(Home)/StatsSection";
import './(Home)/home.css'

export default function Home() {
  return (
    <div>
      <Slider />
      <AboutHome />
      <StatsSection />
      <ProjectHome />
      <ProjectsSection />
      <HomeServices />
      <HomeClients/>
      <HomeContactsUS/>
      <HomeAddress/>
    </div>
  );
}
