import React from 'react';
import { Row, Col } from 'antd';
import img from '@/constants/img';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// استيراد ClientCountUp بشكل ديناميكي
const ClientCountUp = dynamic(() => import('./ClientCountUp'), { ssr: false });

const StatsSection = ({ stats }) => {
  const t = useTranslations();
  return (
    <div className="stats-section"> 
      <Row gutter={[16, 16]} align="middle"> 
        <Col xs={24} md={10}>
          <div className="stats-image">
            <Image width={500} height={50} src={img.Stats} alt="Laptop and Mobile" />
          </div>
        </Col>
        <Col xs={24} md={2}></Col>
        <Col xs={24} md={12}>
          <div className="stats-text">
            {
              stats.about_data.slice(0, 2)?.map((item, index) => (
                <div className="mission" key={index} >
                  <h3 className="custom-title">
                    <span className="highlight"></span>  {item.title}
                  </h3>
                  <p>{item.description}</p>
                </div>
              ))
            }
          </div>
        </Col>
      </Row>
 
      <div className="stats-numbers">
        <Row gutter={[16, 16]} justify="space-around"> 
          <Col xs={24} sm={8}>
            <div className="stat-item">
              <h2>
                <ClientCountUp start={0} end={stats?.projects} duration={5} separator="," />
              </h2>
              <p>{t('nav_Projects')}</p>
            </div>
          </Col>

          {/* الرقم الثاني */}
          <Col xs={24} sm={8}>
            <div className="stat-item">
              <h2>
                <ClientCountUp start={0} end={stats?.clients}  duration={5} separator="," />
              </h2>
              <p> {t('OUR_CLIENTS')} </p>
            </div>
          </Col>

          {/* الرقم الثالث */}
          <Col xs={24} sm={8}>
            <div className="stat-item">
              <h2 className='flex gap-2 justify-content-center'>
                <ClientCountUp start={0} end={stats?.experience} duration={5} />
                {t('Years')}
              </h2>
              <p>{t('Experience')}</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StatsSection;
