import React from "react";
import { Button, Row, Col } from "antd";
import "@style/Portfolio.scss"; // Use SCSS for styling
import img from "@/constants/img";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1>Our Projects</h1>
        <p className="portfolio-subtitle">
          Let’s Start Together And Make Something Trendy And Cool!
        </p>
        <p className="portfolio-description">
          Our Team Is Shining With The Highest Technology To Implement Your Ideas
          And Dreaming Projects.
        </p>
        <Button type="primary" className="portfolio-button">
          Get In Touch
        </Button>
      </div>
      <Row gutter={[0, 0]} className="portfolio-grid">
        <Col xs={24} sm={12} md={7} className="flex justify-content-center align-items-end mt-">
          <div className="portfolio-item  ">
            <img
              src={img.coverTest} // Replace with actual image paths
              alt="Project 1"
              className="portfolio-image"
            />
          </div>
        </Col>
        <Col xs={24} sm={12} md={10}>
          <div className="portfolio-item portfolio_img">
            <img
              src={img.coverTest} alt="Project 2"
              className="portfolio-image    "
            />
          </div>
        </Col>
        <Col xs={24} sm={12} md={7} className="flex justify-content-center align-items-end">
          <div className="portfolio-item">
            <img
              src={img.coverTest} alt="Project 3"
              className="portfolio-image"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Portfolio;
