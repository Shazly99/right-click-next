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
import img from "@/constants/img";

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
export async function generateMetadata({ params }) {
  const locale = params?.locale || "en";
  const isLang = locale === "en";
  const currentUrl = isLang ? "https://rightclick.com.sa/en" : "https://rightclick.com.sa/ar";
  const imageUrl = img.logo; 

  return {
    title: isLang
      ? "Right Click - Digital Marketing Agency in Saudi Arabia"
      : "رايت كليك - وكالة التسويق الرقمي في السعودية",
    
    description: isLang
      ? "Right Click is a leading digital marketing agency in Saudi Arabia. We provide top-notch services in SEO, social media marketing, content creation, and more."
      : "رايت كليك هي وكالة تسويق رقمي رائدة في السعودية. نقدم خدمات متميزة في تحسين محركات البحث، التسويق عبر وسائل التواصل الاجتماعي، إنشاء المحتوى والمزيد.",
    
    keywords: isLang
      ? "Digital Marketing, SEO, Social Media Marketing, Content Creation, Saudi Arabia, PPC, SEM, Content Strategy"
      : "التسويق الرقمي، تحسين محركات البحث، التسويق عبر وسائل التواصل الاجتماعي، إنشاء المحتوى، السعودية، استراتيجية المحتوى، الإعلان المدفوع",
    
    author: "Right Click",
    
    openGraph: {
      title: isLang
        ? "Right Click - Digital Marketing Agency in Saudi Arabia"
        : "رايت كليك - وكالة التسويق الرقمي في السعودية",
      
      description: isLang
        ? "Right Click is a leading digital marketing agency in Saudi Arabia. We provide top-notch services in SEO, social media marketing, content creation, and more."
        : "رايت كليك هي وكالة تسويق رقمي رائدة في السعودية. نقدم خدمات متميزة في تحسين محركات البحث، التسويق عبر وسائل التواصل الاجتماعي، إنشاء المحتوى والمزيد.",
      
      url: currentUrl,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: isLang ? "Right Click - Digital Marketing" : "رايت كليك - التسويق الرقمي",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: isLang
        ? "Right Click - Digital Marketing Agency in Saudi Arabia"
        : "رايت كليك - وكالة التسويق الرقمي في السعودية",
      
      description: isLang
        ? "Right Click is a leading digital marketing agency in Saudi Arabia. We provide top-notch services in SEO, social media marketing, content creation, and more."
        : "رايت كليك هي وكالة تسويق رقمي رائدة في السعودية. نقدم خدمات متميزة في تحسين محركات البحث، التسويق عبر وسائل التواصل الاجتماعي، إنشاء المحتوى والمزيد.",
      
      site: "@RightClickSA",
      creator: "@RightClickSA",
      images: [imageUrl],
    },

    robots: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },

    alternates: {
      canonical: currentUrl,
      languages: {
        "en-US": "https://rightclick.com.sa/en",
        "ar-SA": "https://rightclick.com.sa/ar",
      },
    },
  };
}


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
