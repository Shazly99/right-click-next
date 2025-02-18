export const dynamic = "force-dynamic";
import { Cover } from '@/app/(components)/Cover/Cover';
import img from '@/constants/img';
import '@style/about.css';
import { Col, Row } from 'antd';
import { createTranslator } from 'next-intl';
import AboutHome from '../(Home)/AboutHome';
import StatsSection from '../(Home)/StatsSection';
import Image from 'next/image';

// Fetch translations
async function getTranslations(locale) {
  const messages = (await import(`../.././../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  return t;
}

// Fetch data function
async function fetchData(locale) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/about-us?limit=-1`;
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

export default async function About({ params }) {
  const locale = params?.locale || "en"; // Retrieve the current locale from route params
  const t = await getTranslations(locale); // Get translations
  const data = await fetchData(locale);

  if (!data) {
    return <div>Error loading data. Please try again later.</div>;
  }


  const headerData = {
    image: img.aboutHeader,
    title: t("about_us.header"),
    breadcrumb: [
      { label: t("about_us.breadcrumb_home"), link: "/" },
      { label: t("about_us.breadcrumb_about"), link: "/about" }
    ]
  };

  return (
    <>
      <Cover headerData={headerData} />
      <AboutHome aboutUs={data} />
      <StatsSection stats={data} />

      <div className="app_about_our">
        <div className="goals-strategies-section">
          <div className="design-section">
            {
              data.about_data.slice(2, 4).map((item, index) => (
                <Row className="design-item" key={item.title || index}>
                  <Col xl={5} lg={5} md={24} sm={24} xs={24} className="design-title">{item.title}</Col>
                  <Col xl={18} lg={18} md={24} sm={24} xs={24} className="design-description">{item.description}</Col>
                </Row>
              ))
            }

          </div>
        </div>
      </div>

      <div className="values-section pb-8">
        {
          data.about_data.slice(-1).map((item, index) => (
            <div className="values-header" key={item.title || index}>
              <h3 className="custom-title text-center">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))
        }
        <div className="values-cards">
          {
            data.values.map((item, index) => (
              <div className="card" key={item.title || index}>
                <div className="icon">
                  <Image
                    src={item.icon}
                    alt={item.title || `item-${index}`}
                    width={1000}
                    height={500}
                    priority
                  />
                </div>
                <h3>{item.title}</h3>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "ar" }, // Add other supported locales here
  ];
}
