import { useTranslations } from 'next-intl';
import { Row, Col } from 'antd';
import Image from 'next/image';
import img from '@/constants/img';

const ServicesSection = () => {
    const t = useTranslations("ContentMarketing.ServicesSection");

    return (
        <div className="services-section">
            <Row gutter={[32, 32]} align="middle">
                {/* ✅ قسم خدمات كتابة المحتوى */}
                <Col xs={24} md={12}>
                    <h2 className="section-title">{t("CopywritingServices.title")}</h2>
                    <p className="section-subtitle">{t("CopywritingServices.subtitle")}</p>
                    <ul className="service-list">
                        {["SalesCopywriting", "BrandStorytelling", "AdCopy"].map((key, index) => (
                            <li key={index}>
                                <strong>{t(`CopywritingServices.items.${key}.title`)}:</strong> {t(`CopywritingServices.items.${key}.description`)}
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col xs={24} md={12} className="flex justify-content-center align-items-center">
                    <Image
                        width={500}
                        height={50}
                        src={img.ContentMarketing1}
                        alt="Copywriting illustration"
                        className="service-image"
                    />
                </Col>

                {/* ✅ قسم إنشاء محتوى وسائل التواصل الاجتماعي */}
                <Col xs={24} md={12} className="flex justify-content-start align-items-start">
                    <Image
                        width={500}
                        height={50}
                        src={img.ContentMarketing1}
                        alt="Social Media Content Creation illustration"
                        className="service-image"
                    />
                </Col>
                <Col xs={24} md={12}>
                    <h2 className="section-title">{t("SocialMediaContent.title")}</h2>
                    <p className="section-subtitle">{t("SocialMediaContent.subtitle")}</p>
                    <ul className="service-list">
                        {["EngagementPosts", "VisualContent", "PlatformOptimization"].map((key, index) => (
                            <li key={index}>
                                <strong>{t(`SocialMediaContent.items.${key}.title`)}:</strong> {t(`SocialMediaContent.items.${key}.description`)}
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </div>
    );
};

export default ServicesSection;
