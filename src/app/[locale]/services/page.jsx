export const dynamic = "force-dynamic";

import { Cover } from '@/app/(components)/Cover/Cover';
import img from '@/constants/img';
import { Button, Card, Col, Row } from 'antd';
import { createTranslator } from 'next-intl';
import Image from 'next/image'; 
import '../(Home)/home.css';
import { Link } from '@/navigation';



// Fetch translations
async function getTranslations(locale) {
  const messages = (await import(`../.././../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  return t;
}

// Fetch data function
async function fetchData(locale) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/services`;
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

export default async function Services({ params }) {
  const locale = params?.locale || "en"; // Retrieve the current locale from route params
  const t = await getTranslations(locale); // Get translations
  const data = await fetchData(locale);

  if (!data) {
    return <div>Error loading data. Please try again later.</div>;
  }

  const headerData = {
    image: img.HeaderServices,
    title: t("services.header"),
    breadcrumb: [
      { label: t("services.breadcrumb_home"), link: "/" },
      { label: t("services.breadcrumb_about"), link: "/services" }
    ]
  };
  return (
    <div>
      <Cover headerData={headerData} />
      <div className="home-services-container flex-column mt-8 pb-8 overflow-x-hidden">
        <div className="container">
          <Row gutter={[50, 50]} className="home-services-grid mt-6">
            {data.services.map((service, index) => (
              <Col className='' key={index} xs={24} sm={24} md={24} lg={24} xl={24}>
                <div className="blur_position">

                  <Card
                    className={` home-services- home-services-2 flex flex-row ${index === 0 ? 'home-services-card-featured' : ''}`}
                    bordered>
                    <Row gutter={[30, 30]} >
                      <Col xl={5} lg={5} md={24} xs={24} sm={24} className='w-full flex justify-content-center '   >
                        <div className="home-services-icon flex justify-content-center align-items-center">
                          <Image
                            src={service.image}
                            alt={service.title || `service-${index}`}
                            width={1000}
                            height={500}
                            className="w-full h-full home_services_image"
                            priority
                          />
                        </div>
                      </Col>
                      <Col xl={19} lg={19} md={24} xs={24} sm={24} className='w-full  '  >
                        <h3 className="home-services-title">{service.title}</h3>
                        <p className="home-services-description">{service.description.split(' ').slice(0, 40).join(' ')}</p>
                        <Link href={`/${service.key_word}`}>
                          <Button type="primary" className="home-services-order-button"> {t('Order')} </Button>
                        </Link>
                      </Col>
                    </Row>
                  </Card>
                  {
                    index % 2 == 0 ?
                      <div className="blur_1"></div> :
                      <div className="blur_2"></div>
                  }
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "ar" }, // Add other supported locales here
  ];
}
