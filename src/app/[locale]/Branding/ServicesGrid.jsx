import React from "react";
import { Row, Col } from "antd";

const ServicesGrid = () => {
    const services = [
        {
            title: "Brand Positioning",
            description:
                "We ensure your brand occupies a unique market space that appeals to your target audience. By highlighting your strengths and crafting compelling value propositions, we make your brand memorable and impactful, locally and globally.",
        },
        {
            title: "Logo Design",
            description:
                "Your logo is your brand’s visual anchor. We design impactful logos that align with your values and work seamlessly across platforms, ensuring consistent representation on your website, packaging, and more.",
        },
        {
            title: "Slogan",
            description:
                "A well-crafted slogan reinforces your brand’s message. We create slogans that enhance recall and emotional connection, ensuring your brand stays top of mind.",
        },
        {
            title: "Stationary Design",
            description:
                "We design professional stationery, including business cards and letterheads, that reflect your brand’s identity and enhance credibility at every interaction.",
        },
        {
            title: "Packaging Design",
            description:
                "Packaging is a vital touchpoint for customers. We design appealing, functional packaging that aligns with your identity and communicates trust and quality.",
        },
        {
            title: "Signage Design",
            description:
                "We create signage that establishes your brand’s presence in physical spaces like stores or offices. Whether indoor or outdoor, our signage enhances visibility and reinforces your identity.",
        },

    ];
    const services2 = [
        {
          title: "Identity Guideline Development",
          description:
            "A solid identity guideline ensures consistency across all platforms. It defines logo usage, color schemes, fonts, and tone of voice, helping your brand maintain a professional image across digital and print channels.",
          benefits: [
            "Uniform application of your brand across platforms.",
            "Professionalism in internal and external communications.",
            "Enhanced recognition and trust.",
          ],
        },
        {
          title: "Internal Branding",
          description:
            "We develop strategies that align employees with your brand’s mission, creating a cohesive and motivated team. Whether through office design or communication tools, we turn your employees into brand ambassadors.",
        },
        {
          title: "Corporate Profile",
          description:
            "A professional corporate profile tells your brand’s story and communicates your values. We design profiles that are visually appealing and aligned with your identity, leaving a strong impression on clients and investors.",
        },
        {
          title: "Brochure Design",
          description:
            "We create brochures that effectively communicate your brand’s messages. Whether for events, meetings, or marketing campaigns, our designs ensure maximum impact.",
        },
      ];

      const services3 = [
        {
          title: "Why Wait? Let's Build Your Brand Identity Today",
          description:
            "Your brand identity is your business’s voice. With over a decade of experience, Right Click is here to ensure your identity resonates with your audience and drives results. Contact us today to start building a brand that truly stands out.",
        },
        {
          title: "Internal Branding",
          description:
            "Labels are critical for product perception. We design attractive, trust-building labels that align with your packaging and make your brand stand out.",
        }, 
      ];
    return (
        <div className="services-grid-container">
            <Row gutter={[24, 24]}>
                {services.map((service, index) => (
                    <Col xs={24} sm={12} lg={8} key={index}>
                        <div className="service-card">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </Col>
                ))}

                {services2.map((service, index) => (
                    <Col xs={24} sm={24} lg={12} key={index}>
                        <div className="service-card">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            {service.benefits && (
                                <ul>
                                    {service.benefits.map((benefit, benefitIndex) => (
                                        <li key={benefitIndex}>{benefit}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </Col>
                ))}

{services3.map((service, index) => (
          <Col xs={24} sm={24} lg={12} key={index}>
            <div className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.benefits && (
                <ul>
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>{benefit}</li>
                  ))}
                </ul>
              )}
            </div>
          </Col>
        ))}
            </Row>
        </div>
    );
};

export default ServicesGrid;
