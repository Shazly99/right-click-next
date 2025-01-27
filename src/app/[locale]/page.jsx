import AboutHome from "./(Home)/AboutHome";
import HomeAddress from "./(Home)/HomeAddress";
import HomeClients from "./(Home)/HomeClients";
import HomeContactsUS from "./(Home)/HomeContactsUS";
import HomeServices from "./(Home)/HomeServices";
import ProjectHome from "./(Home)/ProjectHome";
import ProjectsSection from "./(Home)/ProjectsSection";
import Slider from "./(Home)/Slider";
import StatsSection from "./(Home)/StatsSection";
import './(Home)/home.css';

// Fetch data function
async function fetchData(locale) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/home`; 
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": locale || "en", // Default to English if no locale is provided
      },
      cache: "no-store", // Ensure fresh data
    }); 

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    return data?.data || null;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
}

export default async function Home({ params }) {
  const locale = params?.locale || "en"; // Retrieve the current locale from route params
  let data;

  try {
    data = await fetchData(locale); // Fetch data from API
    console.log(data);
    
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  if (!data) {
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <div>
      <Slider sliders={data.sliders} />
      <AboutHome aboutUs={data.about_us} />
      <StatsSection stats={data.about_us} />
      <ProjectHome projects={data.projects} />
      <ProjectsSection projects={data.projects} />
      <HomeServices services={data.services} />
      <HomeClients clients={data.clients} />
      <HomeContactsUS contacts={data.contacts} />
      <HomeAddress address={data.address} />
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "ar" }, // Add other supported locales here
  ];
}
