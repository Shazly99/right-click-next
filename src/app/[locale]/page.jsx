export const dynamic = "force-dynamic";
import AboutHome from "./(Home)/AboutHome";
import HomeAddress from "./(Home)/HomeAddress";
import HomeClients from "./(Home)/HomeClients";
import HomeContactsUS from "./(Home)/HomeContactsUS";
import HomeServices from "./(Home)/HomeServices";
import ProjectHome from "./(Home)/ProjectHome";
import ProjectsSection from "./(Home)/ProjectsSection";
import Slider from "./(Home)/Slider";
import StatsSection from "./(Home)/StatsSection";
import "./(Home)/home.css";

// دالة لإحضار البيانات من API
async function fetchData(locale) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/home`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": locale || "en",
      },
      cache: "no-store",
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

// **إعداد metadata بناءً على اللغة المختارة**



// **الكود الرئيسي لصفحة الـ Home**
export default async function Home({ params }) {
  const locale = params?.locale || "en";
  let data;

  try {
    data = await fetchData(locale);
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  if (!data) {
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <div className="overflow-hidden">
      <Slider sliders={data.sliders} />
      <AboutHome aboutUs={data.about_us} />
      <StatsSection stats={data.about_us} />
      <ProjectHome projects={data.projects} />
      <ProjectsSection data={data.projects} />
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
    { locale: "ar" },
  ];
}
