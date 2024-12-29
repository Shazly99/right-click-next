import AboutHome from "./(Home)/AboutHome";
import Slider from "./(Home)/Slider";
import StatsSection from "./(Home)/StatsSection"; 
import './(Home)/home.scss'

export default function Home() {
  return (
    <div>
      <Slider />
      <AboutHome />
      <StatsSection/>
    </div>
  );
}
