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
      ? "Right Click - Best Digital Marketing & Web Development Agency in Saudi Arabia"
      : "رايت كليك - أفضل وكالة تسويق رقمي وتطوير مواقع في السعودية",

    description: isLang
      ? "Right Click is the best digital marketing agency in Saudi Arabia. We specialize in SEO, PPC, content marketing, social media management, web development, mobile apps, CRM, and ERP solutions."
      : "رايت كليك هي أفضل وكالة تسويق رقمي في السعودية، متخصصة في تحسين محركات البحث، الإعلانات المدفوعة، التسويق بالمحتوى، إدارة وسائل التواصل الاجتماعي، تطوير المواقع، تطبيقات الجوال، حلول CRM و ERP.",

    keywords: isLang
      ? [
        // ⭐️ تطوير المواقع والتطبيقات (Web & App Development)
        "Website Development",
        "Mobile App Development",
        "Responsive Web Design",
        "E-commerce Website",
        "WordPress Development",
        "Shopify Development",
        "Web Hosting Services",
        "Custom Web Development",

        // ⭐️ أنظمة CRM و ERP (CRM & ERP Systems)
        "CRM System",
        "ERP System",
        "Business Automation",
        "Lead Management Software",
        "Customer Relationship Management",

        // ⭐️ تحليل البيانات والأداء (Analytics & Performance Tracking)
        "Google Analytics",
        "Performance Tracking",
        "Marketing Analytics",
        "Website Heatmaps",
        "Data-Driven Marketing",

        // ⭐️ تصميم الجرافيك والفيديوهات (Graphic & Video Production)
        "Graphic Design",
        "Logo Design",
        "Brand Identity",
        "Motion Graphics",
        "3D Animation",
        "Corporate Videos",
        "Explainer Videos",
        "Video Production",
        "Brochure Design",
        "Company Profile Design",

        // ⭐️ التسويق الرقمي (Digital Marketing)
        "Digital Marketing",
        "Digital Marketing Agency",
        "Online Marketing",
        "Marketing Strategy",
        "Marketing Automation",
        "Marketing Campaigns",
        "Marketing Funnel",
        "Conversion Rate Optimization",
        "Customer Retention Strategies",

        // ⭐️ تحسين محركات البحث (SEO)
        "SEO Services",
        "SEO Optimization",
        "Google SEO",
        "E-commerce SEO",
        "Local SEO",
        "Technical SEO",
        "On-Page SEO",
        "Off-Page SEO",
        "SEO Audit",
        "Keyword Research",
        "Backlink Building",

        // ⭐️ الإعلانات المدفوعة (PPC)
        "Google Ads",
        "Facebook Ads",
        "Instagram Ads",
        "TikTok Ads",
        "LinkedIn Ads",
        "YouTube Advertising",
        "Pay-Per-Click (PPC)",
        "PPC Management",
        "Retargeting Ads",
        "Display Advertising",

        // ⭐️ وسائل التواصل الاجتماعي (Social Media)
        "Social Media Marketing",
        "Social Media Strategy",
        "Social Media Advertising",
        "Social Media Management",
        "Community Management",
        "Influencer Marketing",
        "Content Creation for Social Media",

        // ⭐️ التسويق عبر البريد الإلكتروني (Email Marketing)
        "Email Marketing",
        "Email Automation",
        "Lead Generation",
        "Cold Emailing",
        "Newsletter Marketing",
        "Drip Campaigns",

      ]
      : [
        // ⭐️ تطوير المواقع والتطبيقات (Web & App Development)
        "تطوير المواقع",
        "تصميم مواقع الإنترنت",
        "تطوير تطبيقات الجوال",
        "تصميم واجهات متجاوبة",
        "تصميم المتاجر الإلكترونية",
        "برمجة المواقع المخصصة",

        // ⭐️ أنظمة CRM و ERP (CRM & ERP Systems)
        "نظام CRM",
        "نظام ERP",
        "أتمتة الأعمال",
        "إدارة علاقات العملاء",

        // ⭐️ تحليل البيانات والأداء (Analytics & Performance Tracking)
        "تحليل جوجل",
        "متابعة الأداء",
        "تحليل التسويق",
        "خرائط حرارية للمواقع",

        // ⭐️ تصميم الجرافيك والفيديوهات (Graphic & Video Production)
        "تصميم جرافيك",
        "تصميم الشعارات",
        "تصميم العلامة التجارية",
        "تصميم الموشن جرافيك",
        "الرسوم المتحركة ثلاثية الأبعاد",
        "إنتاج الفيديوهات",
        "تصميم البروشورات",
        "تصميم الملفات التعريفية",

        // ⭐️ التسويق الرقمي (Digital Marketing)
        "التسويق الرقمي",
        "وكالة تسويق رقمي",
        "التسويق عبر الإنترنت",
        "استراتيجيات التسويق",
        "أتمتة التسويق",
        "حملات التسويق",
        "تحسين معدل التحويل",
        "استراتيجيات الاحتفاظ بالعملاء",

        // ⭐️ تحسين محركات البحث (SEO)
        "تحسين محركات البحث",
        "خدمات SEO",
        "تحسين محركات البحث للمتاجر الإلكترونية",
        "تحسين محركات البحث المحلي",
        "تحليل SEO",
        "الكلمات المفتاحية",
        "بناء الروابط الخلفية",

        // ⭐️ الإعلانات المدفوعة (PPC)
        "إعلانات جوجل",
        "إعلانات فيسبوك",
        "إعلانات إنستجرام",
        "إعلانات تيك توك",
        "إعلانات لينكد إن",
        "الإعلانات المدفوعة",
        "إدارة حملات PPC",
        "إعلانات إعادة الاستهداف",

        // ⭐️ وسائل التواصل الاجتماعي (Social Media)
        "التسويق عبر وسائل التواصل الاجتماعي",
        "إدارة منصات التواصل الاجتماعي",
        "إعلانات وسائل التواصل الاجتماعي",
        "التسويق عبر المؤثرين",
        "إنشاء المحتوى لوسائل التواصل الاجتماعي",

        // ⭐️ التسويق عبر البريد الإلكتروني (Email Marketing)
        "التسويق عبر البريد الإلكتروني",
        "إدارة العملاء المحتملين",
        "التسويق بالنشرات البريدية",

      ],

    authors: [{ name: "Right Click Digital Marketing Experts", url: "https://rightclick.com.sa" }],

    openGraph: {
      title: isLang
        ? "Right Click - Best Digital Marketing & Web Development Agency in Saudi Arabia"
        : "رايت كليك - أفضل وكالة تسويق رقمي وتطوير مواقع في السعودية",

      description: isLang
        ? "Right Click is the best digital marketing agency in Saudi Arabia. We specialize in SEO, PPC, content marketing, social media management, web development, mobile apps, CRM, and ERP solutions."
        : "رايت كليك هي أفضل وكالة تسويق رقمي في السعودية، متخصصة في تحسين محركات البحث، الإعلانات المدفوعة، التسويق بالمحتوى، إدارة وسائل التواصل الاجتماعي، تطوير المواقع، تطبيقات الجوال، حلول CRM و ERP.",

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
        ? "Right Click - Digital Marketing & Web Development Experts in Saudi Arabia"
        : "رايت كليك - خبراء التسويق الرقمي وتطوير المواقع في السعودية",

      description: isLang
        ? "Top-rated digital marketing agency in Saudi Arabia. Specialized in SEO, PPC, Google Ads, content marketing, web development, mobile apps, CRM, and ERP."
        : "وكالة تسويق رقمي حاصلة على تقييمات عالية في السعودية. متخصصة في تحسين محركات البحث، إعلانات جوجل، التسويق بالمحتوى، تطوير المواقع، تطبيقات الجوال، CRM و ERP.",

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
