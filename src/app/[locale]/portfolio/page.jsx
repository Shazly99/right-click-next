export const dynamic = "force-dynamic";

import img from "@/constants/img";
import { Link } from "@/navigation";
import "@style/Portfolio.css";
import { Button, Carousel, Col, Row } from "antd";
import { createTranslator } from "next-intl";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import ProjectSection1 from "./ProjectSection1";
import ProjectsFeatured from "./ProjectsFeatured";
// Fetch translations
async function getTranslations(locale) {
  const messages = (await import(`../.././../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  return t;
}

// Fetch data function
async function fetchData(locale) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/projects?category=web_development`;
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
export default async function Portfolio({ params }) {
  const locale = params?.locale || "en"; // Retrieve the current locale from route params
  const t = await getTranslations(locale); // Get translations
  const data = await fetchData(locale); 

  const clients = [ 
    img.ourClicnts13,
    img.ourClicnts14,
    img.ourClicnts15,
    img.ourClicnts16, 
    img.ourClicnts18,
    img.ourClicnts19,
    img.ourClicnts20,
    img.ourClicnts21  ,
    img.ourClicnts22,
    img.ourClicnts23,
    img.ourClicnts24,
    img.ourClicnts25,
    
  ];

  return (
    <div className="app_project overflow-hidden">
      <div className="portfolio-container">
        <div className="icon_bg_projects_left">
          <Image width={500} height={50} src={img.bg_projects_left} alt="Project 1" className="w-fuk" />
        </div>
        <div className="icon_bg_projects_right">
          <Image width={500} height={50} src={img.bg_projects_right} alt="Project 1" />
        </div>
        <div className="portfolio-header">
          <h1> {t('OurProjects')}  </h1>
          <p className="portfolio-subtitle"> {t('OurProjects_title1')}  </p>
          <p className="portfolio-description"> {data.section_content}  </p>
          <Link href={'/contact'} >
            <Button type="primary" className="portfolio-button"> {t('GetInTouch')}  </Button>
          </Link>
        </div>
        <Row gutter={[0, 0]} className="portfolio-grid ">
          <Col
            xs={24}
            sm={12}
            md={7}
            className="flex justify-content-center align-items-end  "
          >
            <div className="portfolio-item flex  portfolio_img ">
              <Image width={500} height={50}
                src={img.coverTest2} // Replace with actual image paths
                alt="Project 1"
                className="portfolio-image left"
              />
            </div>
          </Col>
          <Col xs={24} sm={12} md={10}>
            <div className="portfolio-item portfolio_img portfolio_img_center">
              <Image width={1000} height={50}
                src={img.coverTest1}
                alt="Project 2"
                className="portfolio-image   center "
              />
            </div>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={7}
            className="flex justify-content-center align-items-end"
          >
            <div className="portfolio-item flex portfolio_img">
              <Image width={1000} height={50}
                src={img.coverTest3}
                alt="Project 3"
                className="portfolio-image  right"
              />
            </div>
          </Col>
        </Row>
        <div className="portfolio_grid_sm">
          <Carousel fade={false} autoplay arrows dots={false} >
            <div className="w-full h-50">
              <Image
                src={img.coverProject1}
                alt={'project '}
                width={1000}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="w-full h-50">
              <Image
                src={img.coverProject4}
                alt={'project '}
                width={1000}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="w-full h-50">
              <Image
                src={img.coverProject3}
                alt={'project '}
                width={1000}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="w-full h-50">
              <Image
                src={img.coverProject2}
                alt={'project '}
                width={1000}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>

          </Carousel>
        </div>
      </div>
      <div style={{ backgroundColor: "#FA6409", padding: "20px 0" }} dir="ltr">
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
          {clients.map((client, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 15px",
                padding: "20px  15px",
                borderRadius: "10px",
              }}
            >
              <Image
                src={client}
                width={1000}
                height={1000}
                priority
                alt={`Client ${index + 1}`}
                className="p-3"
                style={{ height: "100px", width: "auto", objectFit: "contain" }}
              />
            </div>
          ))}
        </Marquee>
      </div>
      {/* Conditionally render ProjectsSection */}
      <ProjectSection1 />
      <ProjectsFeatured data={data.projects} />
    </div>
  );
};

export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "ar" }, // Add other supported locales here
  ];
}
