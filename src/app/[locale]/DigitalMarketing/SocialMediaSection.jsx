import { Row, Col } from 'antd';
import React from 'react';

const SocialMediaSection = () => {
  return (
    <div className="social-media-section pb-8">
      <Row gutter={[32, 32]} justify="center">
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <div className="card">
            <h2>Social Media Marketing</h2>
            <p>Looking to connect with your audience? Social media is where they&apos;re at.</p>
            <ul>
              <li>
                <b>Social Media Management:</b> We handle everything—from content creation to scheduling and engagement.
              </li>
              <li>
                <b>Brand Building:</b> Strengthen your brand&apos;s identity with campaigns designed to foster trust and loyalty.
              </li>
              <li>
                <b>Enterprise Social Media:</b> Manage large-scale accounts with strategies tailored to maximize impact.
              </li>
              <li>
                <b>Franchise Social Media:</b> Keep your branding consistent while catering to the unique needs of each location.
              </li>
            </ul>
          </div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <div className="card">
            <h2>Social Media Advertising</h2>
            <p>Want to make an impression that converts? Social media ads work wonders.</p>
            <ul>
              <li>
                <b>Facebook Ads:</b> Precise targeting for increased leads and conversions.
              </li>
              <li>
                <b>LinkedIn Ads:</b> Tap into professional networks to connect with decision-makers and grow your B2B audience.
              </li>
              <li>
                <b>Instagram Ads:</b> Stunning visuals and creative campaigns to captivate and inspire your audience.
              </li>
              <li>
                <b>Twitter Ads:</b> Engage in trending conversations to drive traffic and amplify your brand&apos;s voice.
              </li>
              <li>
                <b>TikTok Campaigns:</b> Leverage influencer marketing and video ads to capture attention in one of the fastest-growing platforms.
              </li>
            </ul>
          </div>
        </Col>
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

export default SocialMediaSection;
