import img from "@/constants/img";
import "@style/services.css";
import { Col, Row } from 'antd';
import Image from 'next/image';
import ServicesSlider from '../(seo)/ServicesSlider';
import WhyChooseRightClick from '../DigitalMarketing/WhyChooseRightClick';
import SocialMediaSection2 from './SocialMediaSection2';

const Page = () => {
    let data = {
        title: "Visual Production ",
        dec: 'At Right Click, we bring your vision to life by crafting visual content that captures the essence of your brand. Our diverse range of services is tailored to meet your unique needs, ensuring a memorable impact on your target audience.',
        img: img.VisualProduction,
        title2: "Promo Video Production",
        dec2: "Engage Your Audience: We create promotional videos that highlight what sets your brand apart. Custom Storytelling: Collaborate with our team to develop a compelling narrative that resonates with your audience. Build Brand Awareness: Increase visibility and foster lasting engagement with strategic video content."
    }

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
            description: "We're here to guide you every step of the way, ensuring your success in a competitive market.",
        },
    ];
    return (
        <div>
            <ServicesSlider data={data} />
            <div className="documentary-container">
                <div className="documentary-card">
                    <h2 className="documentary-title">Documentary Video Production</h2>
                    <div className="documentary-features">
                        <div className="feature">
                            <p>
                                <b>Share Authentic Stories:</b> Capture your brand&apos;s journey in a genuine and captivating manner.
                            </p>
                        </div>
                        <div className="feature">
                            <p>
                                <b>Professional Management:</b> From concept to final cut, we handle every detail, including interviews and seamless editing.
                            </p>
                        </div>
                        <div className="feature">
                            <p>
                                <b>Creative Editing:</b> Enhance your video with professional-grade effects, transitions, and storytelling techniques.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-section"> 
                <Row gutter={[32, 32]} align="middle">
                    {/* Events Coverage Section */}
                    <Col xs={24} md={12} className="flex justify-content-start align-items-start">
                        <Image width={500} height={50}
                            src={img.VisualProductionservice}
                            alt="SEO illustration"
                            className="service-image"
                        />
                    </Col>
                    <Col span={12}>
                        <Row gutter={[32, 32]} align="middle">

                            <Col xs={24} md={24}>
                                <h2 className="section-title">Events Coverage</h2>
                                <ul className="service-list">
                                    <li>
                                        <strong>Professional Event Documentation:</strong> Ensure every significant moment of your event is captured professionally.
                                    </li>
                                    <li>
                                        <strong>Corporate and Product Events:</strong> Highlight the success of your gatherings, from corporate meetings to product launches.
                                    </li>
                                    <li>
                                        <strong>More Than Just Filming:</strong> Reflect the significance of each moment with professionalism and elegance.
                                    </li>
                                </ul>
                            </Col>
                            <Col xs={24} md={24}>
                                <h2 className="section-title">Livestream Services</h2>
                                <ul className="service-list">
                                    <li>
                                        <strong>Real-Time Engagement:</strong> Connect with audiences live, no matter where they are.
                                    </li>
                                    <li>
                                        <strong>Comprehensive Technical Support:</strong> We manage all technical aspects for a smooth, high-quality broadcast.
                                    </li>
                                    <li>
                                        <strong>Maximize Audience Reach:</strong> Expand your engagement opportunities during product launches and corporate events.
                                    </li>
                                </ul>
                            </Col>
                        </Row>

                    </Col>

                </Row>
            </div>

            <Image
                width={1300}
                height={500}
                src={img.VisualProductionbg}
                alt="SEO illustration"
                className="w-full h-full"
            />
            <SocialMediaSection2 />
            <WhyChooseRightClick benefits={benefits} />
     
        </div>
    )
}

export default Page
