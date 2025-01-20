import React from 'react'
import ServicesSlider from '../(seo)/ServicesSlider'
import img from "@/constants/img";
import "@style/services.css";
import { Col, Row } from 'antd';
import Image from 'next/image';
import SocialMediaSection3 from './SocialMediaSection3';
import WhyChooseRightClick from '../DigitalMarketing/WhyChooseRightClick';

const Page = () => {
    let data = {
        title: "Content Marketing ",
        dec: 'At Right Click, we understand that content is the backbone of every successful digital marketing strategy. Whether it’s crafting engaging blogs, creating eye-catching visuals, or developing strategies that drive traffic and conversions, our content marketing services are designed to help your brand stand out. With over 10 years of experience, we create content that resonates with your audience, builds trust, and drives measurable growth.',
        img: img.ContentMarketing,
        title2: "Digital Marketing Strategy Development",
        dec2: "Wondering how to get started with digital marketing? We've got you covered. Blog Articles: Share your expertise with well-researched, engaging blog posts that position your brand as an industry leader. Landing Page Copy: Drive conversions with clear, compelling copy optimized for your audience and search engines. Product Descriptions: Showcase your offerings with detailed, persuasive descriptions designed to convert browsers into buyers."
    }
    const content = [
        {
            title: "Sales Copywriting",
            description: "Create persuasive copy that converts leads into loyal customers.",
        },
        {
            title: "Brand Storytelling",
            description: "Share your brand’s story in a way that captivates and inspires your audience.",
        },
        {
            title: "Ad Copy for Digital Campaigns",
            description: "Get results with impactful ad copy tailored to grab attention and drive clicks.",
        },
    ];


    return (
        <div>
            <ServicesSlider data={data} />
            <div className="copywriting-container">
                <div className="container">

                <div className="copywriting-header">
                    <h2>Copywriting Services</h2>
                    <p>Wondering how to get started with digital marketing? <span>We’ve got you covered.</span></p>
                </div>
                <div className="copywriting-cards">
                    {content.map((item, index) => (
                        <div key={index} className="copywriting-card">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
                    </div>
            </div>
            <div className="services-section">
                <Row gutter={[32, 32]} align="middle">
                    {/* Copywriting Services Section */}
                    <Col xs={24} md={12}>
                        <h2 className="section-title">Copywriting Services</h2>
                        <p className="section-subtitle">
                            Struggling to find the right words to connect with your audience? Let us help.
                        </p>
                        <ul className="service-list">
                            <li>
                                <strong>Sales Copywriting:</strong> Create persuasive copy that converts leads into loyal customers.
                            </li>
                            <li>
                                <strong>Brand Storytelling:</strong> Share your brand’s story in a way that captivates and inspires your audience.
                            </li>
                            <li>
                                <strong>Ad Copy for Digital Campaigns:</strong> Get results with impactful ad copy tailored to grab attention and drive clicks.
                            </li>
                        </ul>
                    </Col>
                    <Col xs={24} md={12} className="flex justify-content-center align-items-center">
                        <Image
                            width={500}
                            height={50}
                            src={img.ContentMarketing1} // استخدم صورة مناسبة
                            alt="Copywriting illustration"
                            className="service-image"
                        />
                    </Col>

                    {/* Social Media Content Creation Section */}
                    <Col xs={24} md={12} className="flex justify-content-start align-items-start">
                        <Image
                            width={500}
                            height={50}
                            src={img.ContentMarketing1} // استخدم صورة مناسبة
                            alt="Social Media Content Creation illustration"
                            className="service-image"
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <h2 className="section-title">Social Media Content Creation</h2>
                        <p className="section-subtitle">
                            Struggling to find the right words to connect with your audience? Let us help.
                        </p>
                        <ul className="service-list">
                            <li>
                                <strong>Sales Copywriting:</strong> Create persuasive copy that converts leads into loyal customers.
                            </li>
                            <li>
                                <strong>Brand Storytelling:</strong> Share your brand’s story in a way that captivates and inspires your audience.
                            </li>
                            <li>
                                <strong>Ad Copy for Digital Campaigns:</strong> Get results with impactful ad copy tailored to grab attention and drive clicks.
                            </li>
                        </ul>
                    </Col>
                </Row>

            </div>
            <SocialMediaSection3/>
            <WhyChooseRightClick />

        </div>
    )
}

export default Page
