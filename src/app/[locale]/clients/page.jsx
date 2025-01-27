export const dynamic = "force-dynamic";
import React from "react";
import { Cover } from "@/app/(components)/Cover/Cover";
import img from "@/constants/img";
import { createTranslator } from "next-intl";
import '@style/clients.css'
import Icon from "@/constants/icon";
import Image from "next/image";

// Fetch translations
async function getTranslations(locale) {
  const messages = (await import(`../.././../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  return t;
}

// Fetch data function
async function fetchData(locale) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/clients`;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": locale || "en", // Default to English if no locale is provided
      },
      cache: "force-cache", // Ensure fresh data
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

export default async function Clients({ params }) {
  const locale = params?.locale || "en"; // Retrieve the current locale from route params
  const t = await getTranslations(locale); // Get translations
  const data = await fetchData(locale);

  if (!data) {
    return <div>Error loading data. Please try again later.</div>;
  }

  const headerData = {
    image: img.HeaderClients,
    title: t("clients.header"),
    breadcrumb: [
      { label: t("clients.breadcrumb_home"), link: "/" },
      { label: t("clients.breadcrumb_about"), link: "/clients" },
    ],
  };

  return (
    <div>
      <Cover headerData={headerData} />
      <div className="clients-section">
        <div className="right_page">
          <Image
            src={Icon.rightclient}
            width={800} height={50}
            alt={Icon.alt}
          />
        </div>
        <div className="clients-grid">
          {data.clients.map((logo) => (
            <div key={logo.id} className="client-card"
              style={{
                width: "160px",
                height: "120px",
                border: "1px solid #000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 15px",
                padding: "15px 10px",
                border: "1px solid #000",
                borderRadius: '10px'

              }}
            >
              <Image
                width={80} // عرض الصورة
                height={80} // ارتفاع الصورة
                style={{
                  objectFit: "contain", // يجعل الصورة تناسب الحاوية دون تمدد
                  maxHeight: "100%", // التحكم في ارتفاع الصورة
                  maxWidth: "100%", // التحكم في عرض الصورة
                }}
                src={logo.image} alt={logo.title} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};


export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "ar" }, // Add other supported locales here
  ];
}
