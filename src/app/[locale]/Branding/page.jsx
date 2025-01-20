import React from 'react'
import img from "@/constants/img";
import "@style/services.css";
import ServicesSlider from '../(seo)/ServicesSlider'
import { Col, Row } from 'antd';
import Image from 'next/image';
import ServicesGrid from './ServicesGrid';
import WhyChooseRightClick from '../DigitalMarketing/WhyChooseRightClick';

const page = () => {
    let data = {
        title: "Branding",
        dec: 'At Right Click, we believe that a strong brand is the foundation of a successful business. Our branding services are designed to create and elevate your brand, helping it stand out in a competitive marketplace. We work with you to develop a cohesive identity that communicates your values, attracts your target audience, and builds long-term loyalty. As one of the best branding agencies in Saudi Arabia, we bring expertise and creativity to every project, ensuring that your brand leaves a lasting impact.',
        img: img.Branding,
        title2: "Branding Strategy",
        dec2: "We create customized branding strategies tailored to your business goals and the unique demands of the local market. By conducting in-depth market research and competitor analysis, we ensure that your brand not only stands out but also resonates with your target audience. Whether you’re launching a new business or rebranding, we help craft a clear and impactful brand story that connects with customers."
    }
    return (
        <div className="app_brand">
            <div className="slider">
                <ServicesSlider data={data} />
                <div className="who-we-are-container">
                    <div className="who-we-are-content">
                        <h2 className="who-we-are-title">Who We Are</h2>
                        <p className="who-we-are-description">
                            Right Click is a leading branding agency with over a decade of experience in delivering effective brand solutions.
                            We’ve worked with more than 100 businesses, both local and international, providing creative branding strategies
                            tailored to the specific needs of the market. Our team is passionate about building brands that enhance brand
                            awareness and foster customer loyalty.
                        </p>
                    </div>
                </div>
            </div><div className="services-section">
                <Row gutter={[32, 32]} align="middle">
                    {/* Brand Positioning Section */}
                    <Col xs={24} md={12} className="flex justify-content-start align-items-start">
                        <Image
                            width={500}
                            height={50}
                            src={img.Branding1} // صورة جديدة تناسب Brand Positioning
                            alt="Brand Positioning Illustration"
                            className="service-image"
                        />
                    </Col>
                    <Col span={12}>
                        <Row gutter={[32, 32]} align="middle">
                            <Col xs={24} md={24}>
                                <h2 className="section-title">Brand Positioning</h2>
                                <ul className="service-list">
                                    <li>
                                        <strong>Unique Market Space:</strong> Ensure your brand occupies a unique space in the market, differentiating you from competitors and appealing to your target audience.
                                    </li>
                                    <li>
                                        <strong>Highlight Strengths:</strong> Help differentiate your brand by highlighting your strengths and creating a compelling value proposition.
                                    </li>
                                    <li>
                                        <strong>Connect with Audiences:</strong> Ensure your brand connects with both local and international audiences, making it easier to build long-term loyalty.
                                    </li>
                                </ul>
                            </Col>
                            <Col xs={24} md={24}>
                                <h2 className="section-title">Naming</h2>
                                <ul className="service-list">
                                    <li>
                                        <strong>Foundation of Success:</strong> A strong name is the foundation of a successful brand. Our naming services create names that are memorable, meaningful, and reflective of your brand’s identity.
                                    </li>
                                    <li>
                                        <strong>Global Appeal:</strong> Consider linguistic, cultural, and market factors to ensure that your brand’s name resonates with your target audience, both locally and globally.
                                    </li>
                                    <li>
                                        <strong>Lasting Impression:</strong> The result is a name that captures your brand’s essence and leaves a lasting impression on your customers.
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <ServicesGrid />
            <WhyChooseRightClick />
        </div>
    )
}

export default page