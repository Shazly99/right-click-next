'use client'
import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import img from "@/constants/img";
import HeaderTitle from "@/app/(components)/header/HeaderTitle";

const logos = [
  { id: 1, name: "Moon Light", img: img.cmp1, content: "Project description for Kafalah." },
  { id: 2, name: "Logo 2", img: img.cmp2, content: "Project description for Logo 2." },
  { id: 3, name: "Logo 3", img: img.cmp3, content: "Project description for Logo 3." },
  { id: 4, name: "Logo 4", img: img.cmp4, content: "Project description for Logo 4." },
  { id: 5, name: "Logo 5", img: img.cmp5, content: "Project description for Logo 4." },
  // { id: 5, name: "Logo 5", img: img.cmp5, content: "Project description for Logo 4." },
  // { id: 5, name: "Logo 5", img: img.cmp5, content: "Project description for Logo 4." },
  // { id: 5, name: "Logo 5", img: img.cmp5, content: "Project description for Logo 4." },
];

const ProjectHome = () => {
  const [selectedLogo, setSelectedLogo] = useState(logos[0]);

  return (
    <div className="projectHome">
      <header>
        <HeaderTitle title="Our Projects" />
        <p className="subtitle">
          We Work Closely With Our Clients, To Ensure Their Complete Satisfaction.
        </p>
      </header>
      
      <Row gutter={[25, 25]} className="mt-5" >

        {/* Left Section */}
        <Col
          xl={{ span: 3 }} 
          className="logo_Container">
          <div className="logoContainer">
            <div className="Container" style={{
              maxHeight: logos.length > 4 ? "800px" : "auto", // ارتفاع ديناميكي بناءً على عدد العناصر
              overflowY: logos.length > 4 ? "auto" : "visible", // التمرير فقط إذا زاد العدد عن 4
            }}>
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  className={`logo ${selectedLogo.id === logo.id ? "active" : ""}`}
                  onClick={() => setSelectedLogo(logo)}
                >
                  <img src={logo.img} alt={logo.name} />
                </div>
              ))}
            </div>
          </div>
        </Col>

        {/* Right Section */}
        <Col xl={{ span: 20, offset: 1 }} className="contentContainer">
          <div className="projectDetails">
            <h3 className="projectName">
              <span className="highlight">Project</span> {selectedLogo.name}
            </h3>
            <p className="description">{selectedLogo.content}</p>
            <Button type="primary" className="button">
              See Project
            </Button>
          </div>
          <div className="imageWrapper">
            <img src={img.cover1} alt="Project Preview" />
          </div>
        </Col> 
      </Row>
    </div>
  );
};

export default ProjectHome;
