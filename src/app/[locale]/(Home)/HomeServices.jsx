import React from 'react';
import { Card, Button, Row, Col } from 'antd';
import HeaderTitle from '@/app/(components)/header/HeaderTitle';
import img from '@/constants/img';
import Icon from '@/constants/icon';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const services1 = [
    {
        title: "Digital Marketing",
        description: "At Right Click, we believe that every business deserves the right tools and strategies to succeed in the fast-paced digital world. With over 10 years of experience, we’ve partnered with businesses of all sizes to help them achieve measurable growth. From boosting online visibility to generating high-quality leads, our services are designed to meet your goals effectively. ",
        icon: img.Service1,
    }
]
const services = [
    // {
    //     title: "Digital Marketing",
    //     description: "At Right Click, we believe that every business deserves the right tools and strategies to succeed in the fast-paced digital world. With over 10 years of experience, we’ve partnered with businesses of all sizes to help them achieve measurable growth. From boosting online visibility to generating high-quality leads, our services are designed to meet your goals effectively. ",
    //     icon: img.Service1,
    // },
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

const HomeServices = () => {
    let t = useTranslations();

    return (
        <div className="home-services-container flex-column mt-8">
            <div className="container">
                <header className='bg-blue-800'>
                    <HeaderTitle title={t('OurServices')} />
                    <p className="subtitle">
                        We provide the integrated marketing services that help you reach your OKRs. our slogan is we help you click right away
                    </p>
                </header>
                <Row gutter={[16, 16]} className="home-services-grid mt-5">
                    {services1.map((service, index) => (
                        <Col
                            key={index}
                            xs={24} sm={24}
                            md={12}
                            lg={index === 0 ? 24 : 12}
                            xl={index === 0 ? 24 : 12}
                            className='blur_position'
                        >
                            <Card
                                className={`home-services- flex flex-row home_first_services  ${index === 0 ? 'home-services-card-featured' : ''} `}
                                bordered
                            >
                                <Row  >
                                    <Col xs={24} sm={24} md={12} lg={5} xl={5} className='home_first_services_img'>
                                        <div className="home-services-icon flex justify-content-start"  >
                                            <Image width={50} height={50} src={service.icon} className='w-full h-full' alt={service.title} />
                                        </div>
                                    </Col>
                                    <Col
                                        xs={24} sm={24} md={{ span: 17, offset: 2 }} lg={{ span: 17, offset: 2 }}
                                        xl={{ span: 17, offset: 2 }}>
                                        <div className="content">
                                            <h3 className="home-services-title">{service.title}</h3> 
                                            <p className="home-services-description">{service.description.split(' ').slice(0, 15).join(' ')}</p>

                                            <Button
                                                type="primary"
                                                className={`home-services-order-button ${index === 0 ? 'home-services-button-featured' : ''}`}
                                            >
                                                Order Now
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                            <div className="blur_1"></div>
                        </Col>
                    ))}
                </Row>

                <Row gutter={[50, 50]} className="home-services-grid mt-6">
                    {services.map((service, index) => (
                        <Col className='' key={index} xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div className="blur_position">
                                <Card
                                    className={` home-services- home-services-2 flex flex-row ${index === 0 ? 'home-services-card-featured' : ''}`}
                                    bordered>
                                    <div className="flex home_services_images justify-content-start"  >
                                        <Image width={90} height={90} src={service.icon} className=' ' alt={service.title} />
                                    </div>
                                    <h3 className="home-services-title mt-3">{service.title}</h3>
                                    <p className="home-services-description">{service.description.split(' ').slice(0, 15).join(' ')}</p>
                                    <Button type="primary" className="home-services-order-button">
                                        Order Now
                                    </Button>
                                </Card>

                                <div className="blur_2"></div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default HomeServices;
