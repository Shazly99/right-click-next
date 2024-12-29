import React from 'react';
import { Row, Col } from 'antd';
import img from '@/constants/img';
import dynamic from 'next/dynamic';

// استيراد ClientCountUp بشكل ديناميكي
const ClientCountUp = dynamic(() => import('./ClientCountUp'), { ssr: false });

const StatsSection = () => {
  return (
    <div className="stats-section">
      {/* القسم الأول: الصورة والمحتوى */}
      <Row gutter={[16, 16]} align="middle">
        {/* الصورة */}
        <Col xs={24} md={10}>
          <div className="stats-image">
            <img src={img.Stats} width={400} alt="Laptop and Mobile" />
          </div>
        </Col>
        <Col xs={24} md={2}></Col>
        {/* النص */}
        <Col xs={24} md={12}>
          <div className="stats-text">
            <div className="mission">
              <h3 className="custom-title">
                <span className="highlight"></span> Our Mission
              </h3>
              <p>
                A Saudi Company Specialized In The Field Of Digital Marketing And In The Management
                And Enrichment Of Content On Social Networks.
              </p>
            </div>

            <div className="vision">
              <h3 className="custom-title">
                <span className="highlight"></span> Our Vision
              </h3>
              <p>
                A Saudi Company Specialized In The Field Of Digital Marketing And In The Management
                And Enrichment Of Content On Social Networks.
              </p>
            </div>
          </div>
        </Col>
      </Row>

      {/* القسم الثاني: الإحصائيات */}
      <div className="stats-numbers">
        <Row gutter={[16, 16]} justify="space-around">
          {/* الرقم الأول */}
          <Col xs={24} sm={8}>
            <div className="stat-item">
              <h2>
                <ClientCountUp start={0} end={8000} duration={5} separator="," />
              </h2>
              <p>Projects</p>
            </div>
          </Col>

          {/* الرقم الثاني */}
          <Col xs={24} sm={8}>
            <div className="stat-item">
              <h2>
                <ClientCountUp start={0} end={45} duration={5} separator="," />
              </h2>
              <p>Clients</p>
            </div>
          </Col>

          {/* الرقم الثالث */}
          <Col xs={24} sm={8}>
            <div className="stat-item">
              <h2>
                <ClientCountUp start={0} end={10} duration={5} suffix=" Years" />
              </h2>
              <p>Experience</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StatsSection;
