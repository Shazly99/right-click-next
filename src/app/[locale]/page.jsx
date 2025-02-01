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
 
// Function to get data from API
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

// **Set metadata based on selected language**
export async function generateMetadata({ params }) {
  const locale = params?.locale || "en";
  const isLang = locale === "en";
  const currentUrl = `https://rightclick.com.sa/${locale}`;
  const imageUrl = img.logo;

  return {
    title: isLang
      ? "Right Click - Best Digital Marketing Agency in Saudi Arabia"
      : "رايت كليك - أفضل وكالة تسويق رقمي في السعودية",

    description: isLang
      ? "Right Click is the best digital marketing agency in Saudi Arabia. We specialize in SEO, PPC, content marketing, social media management, and influencer marketing."
      : "رايت كليك هي أفضل وكالة تسويق رقمي في السعودية، متخصصة في تحسين محركات البحث، الإعلانات المدفوعة، التسويق بالمحتوى، إدارة وسائل التواصل الاجتماعي، والتسويق عبر المؤثرين.",

    keywords: isLang
      ? [
          "Digital Marketing Agency",
          "SEO Services",
          "Google Ads",
          "Social Media Marketing",
          "Content Marketing",
          "PPC Management",
          "Influencer Marketing",
          "Facebook Ads",
          "E-commerce SEO",
          "Saudi Arabia Marketing",
          "Email Marketing",
          "Website Optimization",
          "Right Click Agency",
        ]
      : [
          "وكالة تسويق رقمي",
          "خدمات تحسين محركات البحث",
          "إعلانات جوجل",
          "التسويق عبر وسائل التواصل الاجتماعي",
          "التسويق بالمحتوى",
          "إدارة الحملات الإعلانية",
          "التسويق عبر المؤثرين",
          "إعلانات فيسبوك",
          "تحسين محركات البحث للمتاجر الإلكترونية",
          "التسويق الرقمي في السعودية",
          "التسويق عبر البريد الإلكتروني",
          "تحسين أداء المواقع",
          "وكالة رايت كليك",
        ],

    authors: [{ name: "Right Click Digital Marketing Experts", url: "https://rightclick.com.sa" }],

    openGraph: {
      title: isLang
        ? "Right Click - Best Digital Marketing Agency in Saudi Arabia"
        : "رايت كليك - أفضل وكالة تسويق رقمي في السعودية",

      description: isLang
        ? "Right Click is a leading digital marketing agency in Saudi Arabia, specializing in SEO, PPC, content marketing, and social media management."
        : "رايت كليك وكالة تسويق رقمي رائدة في السعودية، متخصصة في تحسين محركات البحث، الإعلانات المدفوعة، التسويق بالمحتوى، وإدارة وسائل التواصل الاجتماعي.",

      url: currentUrl,
      type: "website",
      siteName: "Right Click",
      locale: isLang ? "en_US" : "ar_SA",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: isLang ? "Right Click - Digital Marketing Experts" : "رايت كليك - خبراء التسويق الرقمي",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: isLang
        ? "Right Click - Digital Marketing Experts in Saudi Arabia"
        : "رايت كليك - خبراء التسويق الرقمي في السعودية",

      description: isLang
        ? "Top-rated digital marketing agency in Saudi Arabia. Specialized in SEO, PPC, Google Ads, and content marketing."
        : "وكالة تسويق رقمي حاصلة على تقييمات عالية في السعودية. متخصصة في تحسين محركات البحث، إعلانات جوجل، والتسويق بالمحتوى.",

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

    metadataBase: new URL("https://rightclick.com.sa"),
  };
} 

// **Home page main code**
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
