import img from "@/constants/img";
import "@style/services.css";
import { Col, Row } from 'antd';
import Image from 'next/image';
import ServicesSlider from "../(seo)/ServicesSlider";
import SocialMediaSection from './SocialMediaSection';
import WhyChooseRightClick from './WhyChooseRightClick';

const Page = () => {
    let data = {
        title: "Digital Marketing",
        dec: `At Right Click, we empower businesses with the tools and strategies needed to thrive in the digital world. With 10+ years of experience, we&apos;ve helped businesses of all sizes achieve growth through enhanced visibility and quality leads. Whether launching a product or scaling your brand, we&apos;re here to elevate your success.`,
        img: img.DigitalMarketingSlider,
        title2: "SEO Content Writing",
        dec2: "Our team specializes in creating custom digital strategies tailored to your business goals and target audience. We analyze your industry, competitors, and audience to develop plans that drive long-term growth. From setting measurable KPIs to executing campaigns, we are with you every step of the way to deliver impactful results."
    };
    
    const benefits = [
        {
            title: "Experience You Can Trust:",
            description: "Over 10 years of helping businesses like yours succeed online.",
        },
        {
            title: "Tailored Solutions:",
            description: "Every strategy is customized to fit your business needs and goals.",
        },
        {
            title: "Real Results:",
            description: "We focus on driving measurable growth, from traffic to revenue.",
        },
        {
            title: "Your Growth Partners:",
            description: "We&apos;re here to guide you every step of the way, ensuring your success in a competitive market.",
        },
    ];

    return (
        <div>
            <ServicesSlider data={data} />
            <div className="horizontal-process-container">
                <div className="horizontal-process-card">
                    <div className="horizontal-process-content">
                        <h2 className="horizontal-process-title">Our Process</h2>
                        <p className="horizontal-process-description">
                            The most integral part of any brand&apos;s success in social media is to understand the audience. To gather information, usage, and sharing the content right from the journey of B2B to B2C, identification to conversion may take weeks to months.
                        </p>
                    </div>
                </div>
            </div>
            <div className="services-section">
                <Row gutter={[32, 32]} align="middle">
                    <Col xs={24} md={12}>
                        <h2 className="section-title">Search Engine Optimization (SEO)</h2>
                        <p className="section-subtitle">
                            Struggling to rank on Google? Let us help you get noticed.
                        </p>
                        <ul className="service-list">
                            <li>
                                <strong>Local SEO:</strong> Drive foot traffic and online visibility with strategies designed to attract local customers.
                            </li>
                            <li>
                                <strong>Technical SEO:</strong> Optimize your website&apos;s performance to improve speed, user experience, and rankings.
                            </li>
                            <li>
                                <strong>Enterprise SEO:</strong> For large-scale websites, we implement advanced techniques to improve visibility across multiple pages.
                            </li>
                            <li>
                                <strong>Franchise SEO:</strong> Consistent branding and visibility for businesses with multiple locations.
                            </li>
                            <li>
                                <strong>SEO Audits:</strong> Get a detailed analysis of your website&apos;s SEO health and recommendations to fix any gaps.
                            </li>
                            <li>
                                <strong>Generative SEO:</strong> Stay ahead of the competition with AI-driven strategies that adapt to the latest trends.
                            </li>
                        </ul>
                    </Col>
                    <Col xs={24} md={12} className="flex justify-content-center align-items-center">
                        <Image width={500} height={50}
                            src={img.Dicon4}
                            alt="SEO illustration"
                            className="service-image"
                        />
                    </Col>
                    <Col xs={24} md={12} className="flex justify-content-start align-items-start">
                        <Image width={500} height={50}
                            src={img.Dicon1}
                            alt="PPC illustration"
                            className="service-image"
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <h2 className="section-title">Pay-Per-Click (PPC) Marketing</h2>
                        <p className="section-subtitle">
                            Want instant results? PPC gets you there.
                        </p>
                        <ul className="service-list">
                            <li>
                                <strong>Local SEO:</strong> Drive foot traffic and online visibility with strategies designed to attract local customers.
                            </li>
                            <li>
                                <strong>Technical SEO:</strong> Optimize your website&apos;s performance to improve speed, user experience, and rankings.
                            </li>
                            <li>
                                <strong>Enterprise SEO:</strong> For large-scale websites, we implement advanced techniques to improve visibility across multiple pages.
                            </li>
                            <li>
                                <strong>Franchise SEO:</strong> Consistent branding and visibility for businesses with multiple locations.
                            </li>
                            <li>
                                <strong>SEO Audits:</strong> Get a detailed analysis of your website&apos;s SEO health and recommendations to fix any gaps.
                            </li>
                            <li>
                                <strong>Generative SEO:</strong> Stay ahead of the competition with AI-driven strategies that adapt to the latest trends.
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <SocialMediaSection />
            <WhyChooseRightClick />
        </div>
    );
};

export default Page;
