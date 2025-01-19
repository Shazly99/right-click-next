import { headers } from "next/headers";
import img from "@/constants/img";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import ProjectsSection from "../(Home)/ProjectsSection";
import "@style/Portfolio.css";
import ProjectHome from "../(Home)/ProjectHome";

const Portfolio = () => {

  const headersList = headers();
  const currentUrl = headersList.get("x-invoke-path") || "";
  const isPortfolioRoute = currentUrl.includes("portfolio");


  const clients = [
    img.ourClicnts1,
    img.ourClicnts2,
    img.ourClicnts3,
    img.ourClicnts4,
    img.ourClicnts5,
    img.ourClicnts6,
    img.ourClicnts1,
    img.ourClicnts2,
    img.ourClicnts3,
    img.ourClicnts4,
    img.ourClicnts5,
    img.ourClicnts6,
  ];

  return (
    <div className="app_project">
      <div className="portfolio-container">
        <div className="icon_bg_projects_left">
          <Image width={500} height={50} src={img.bg_projects_left} alt="Project 1" className="w-fuk" />
        </div>
        <div className="icon_bg_projects_right">
          <Image width={500} height={50} src={img.bg_projects_right} alt="Project 1" />
        </div>
        <div className="portfolio-header">
          <h1>Our Projects</h1>
          <p className="portfolio-subtitle">
            Let’s Start Together And Make Something Trendy And Cool!
          </p>
          <p className="portfolio-description">
            Our Team Is Shining With The Highest Technology To Implement Your
            Ideas And Dreaming Projects.
          </p>
          <Button type="primary" className="portfolio-button">
            Get In Touch
          </Button>
        </div>
        <Row gutter={[0, 0]} className="portfolio-grid">
          <Col
            xs={24}
            sm={12}
            md={7}
            className="flex justify-content-center align-items-end  "
          >
            <div className="portfolio-item flex  ">
              <Image width={500} height={50}
                src={img.coverTest} // Replace with actual image paths
                alt="Project 1"
                className="portfolio-image"
              />
            </div>
          </Col>
          <Col xs={24} sm={12} md={10}>
            <div className="portfolio-item portfolio_img">
              <Image width={500} height={50}
                src={img.coverTest}
                alt="Project 2"
                className="portfolio-image    "
              />
            </div>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={7}
            className="flex justify-content-center align-items-end"
          >
            <div className="portfolio-item flex">
              <Image width={500} height={50}
                src={img.coverTest}
                alt="Project 3"
                className="portfolio-image"
              />
            </div>
          </Col>
        </Row>
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
                height={500}
                priority
                alt={`Client ${index + 1}`}
                style={{ height: "100px", width: "auto", objectFit: "contain" }}
              />
            </div>
          ))}
        </Marquee>
      </div>
      {/* Conditionally render ProjectsSection */}
      <ProjectHome /> 
      <ProjectsSection />
    </div>
  );
};

export default Portfolio;
