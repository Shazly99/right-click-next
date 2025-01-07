
import Image from 'next/image';
import AboutHome from '../(Home)/AboutHome';
import StatsSection from '../(Home)/StatsSection';
import '../(Home)/home.scss'
import { Cover } from '@/app/(components)/Cover/Cover';
import { useTranslations } from 'next-intl';
import img from '@/constants/img';
import Icon from '@/constants/icon';
import { Card, Button, Row, Col } from 'antd';

const services = [

  {
    title: "Digital Marketing",
    description: "At Right Click, we believe that every business deserves the right tools and strategies to succeed in the fast-paced digital world. With over 10 years of experience, we’ve partnered with businesses of all sizes to help them achieve measurable growth. From boosting online visibility to generating high-quality leads, our services are designed to meet your goals effectively. ",
    icon: Icon.services1,
  },
  {
    title: "Web Development",
    description: "We Will Help You Take Advantage Of Social Media Platforms And Reach Your Audiences Like Never Before...",
    icon: Icon.services2,

  },
  {
    title: "Visual Production",
    description: "At Right Click, We Strive To Uplift Your Visual Identity By Crafting Visual Content That Captures The Essence Of Your Brand...",
    icon: Icon.services3,
  },
  {
    title: "Content Marketing",
    description: "At Right Click, We Understand That Content Is The Backbone Of Every Successful Digital Marketing Strategy...",
    icon: "📝",
    icon: Icon.services4
  },
  {
    title: "Branding",
    description: "At Right Click, We Believe That A Strong Brand Is The Foundation Of A Successful Business...",
    icon: Icon.services5
  },
];
const Services = () => {
  const t = useTranslations();

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
      <div className="home-services-container flex-column mt-8 pb-8">
        <div className="container"> 
          <Row gutter={[50, 50]} className="home-services-grid mt-6">
            {services.map((service, index) => (
              <Col className='' key={index} xs={24} sm={24} md={24} lg={24} xl={24}>
                <div className="blur_position">

                  <Card
                    className={` home-services- home-services-2 flex flex-row ${index === 0 ? 'home-services-card-featured' : ''}`}
                    bordered>
                    <div className="home-services-icon"><service.icon /></div>
                    <h3 className="home-services-title">{service.title}</h3>
                    <p className="home-services-description">{service.description}</p>
                    <Button type="primary" className="home-services-order-button">
                      Order Now
                    </Button>
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

export default Services
