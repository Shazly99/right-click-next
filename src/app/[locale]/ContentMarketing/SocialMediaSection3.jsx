import { Row, Col } from 'antd';
import React from 'react';
import img from "@/constants/img";
import Image from 'next/image';

const SocialMediaSection3 = () => {
    return (
        <div className="social-media-section social-media-section2 flex flex-column pb-8">
            <div className="flex justify-content-center align-items-center bg w-full">
                <Image
                    width={1000}
                    height={100}
                    src={img.ContentMarketingBg}
                    alt="Copywriting illustration"
                    className="h-auto"
                />
            </div>
            <Row gutter={[32, 32]} justify="center" style={{ marginTop: '-350px' }}>
                <Col xl={8} lg={8} md={24} sm={24} xs={24}>
                    <div className="card">
                        <h3>Lead Generation Services</h3>
                        <p>Turn clicks into customers with smart lead-generation strategies.</p>
                        <ul>
                            <li>
                                <b>We design funnels:</b> that guide potential customers from discovery to purchase, ensuring no lead goes untapped.
                            </li>
                            <li>
                                <b>Our team focuses on quality over quantity:</b> targeting the right audiences to bring in leads that convert.
                            </li>
                            <li>
                                <b>B2B or B2C campaigns:</b> We craft campaigns that build your customer base and boost sales opportunities.
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col xl={8} lg={8} md={24} sm={24} xs={24}>
                    <div className="card">
                        <h3>CRO Services (Conversion Rate Optimization)</h3>
                        <p>Is your website traffic not converting into revenue? We&apos;ll fix that.</p>
                        <ul>
                            <li>
                                <b>User Behavior Insights:</b> Understand how your visitors interact with your website and identify friction points.
                            </li>
                            <li>
                                <b>A/B Testing:</b> Test different headlines, designs, or CTAs to see what drives the best results.
                            </li>
                            <li>
                                <b>Optimized Funnels:</b> Refine your sales journey to ensure a smooth and conversion-friendly user experience.
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col xl={8} lg={8} md={24} sm={24} xs={24}>
                    <div className="card">
                        <h3>Link Building</h3>
                        <p>Boost your credibility online with high-quality backlinks.</p>
                        <ul>
                            <li>
                                <b>Digital PR Outreach:</b> Partner with trusted publishers to secure placements that increase your authority.
                            </li>
                            <li>
                                <b>HARO Campaigns:</b> Connect with journalists to position your brand as a thought leader in your industry.
                            </li>
                            <li>
                                <b>Guest Posts:</b> Build backlinks and drive referral traffic through strategic blogging on industry-relevant websites.
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default SocialMediaSection3;
