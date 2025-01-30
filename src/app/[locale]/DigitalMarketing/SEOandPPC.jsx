import { useTranslations } from 'next-intl';
import { Row, Col } from 'antd';
import Image from 'next/image';
import img from '@/constants/img';

const SEOandPPC = () => {
    const t = useTranslations("DigitalMarketing");

    return (
        <div className="services-section">
            <Row gutter={[32, 32]} align="middle">
                {/* ✅ تحسين محركات البحث (SEO) */}
                <Col xs={24} md={12}>
                    <h2 className="section-title">{t("SEO.title")}</h2>
                    <p className="section-subtitle">{t("SEO.subtitle")}</p>
                    <ul className="service-list">
                        {["LocalSEO", "TechnicalSEO", "EnterpriseSEO", "FranchiseSEO", "SEOAudits", "GenerativeSEO"].map((key, index) => (
                            <li key={index}>
                                <strong>{t(`SEO.services.${key}.title`)}:</strong> {t(`SEO.services.${key}.description`)}
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col xs={24} md={12} className="flex justify-content-center align-items-center">
                    <Image width={500} height={50} src={img.Dicon4} alt="SEO illustration" className="service-image" />
                </Col>

                {/* ✅ التسويق عبر الدفع مقابل النقر (PPC) */}
                <Col xs={24} md={12} className="flex justify-content-start align-items-start">
                    <Image width={500} height={50} src={img.Dicon1} alt="PPC illustration" className="service-image" />
                </Col>
                <Col xs={24} md={12}>
                    <h2 className="section-title">{t("PPC.title")}</h2>
                    <p className="section-subtitle">{t("PPC.subtitle")}</p>
                    <ul className="service-list">
                        {["SearchAds", "DisplayAds", "ShoppingAds", "Retargeting", "VideoAds", "PerformanceMax"].map((key, index) => (
                            <li key={index}>
                                <strong>{t(`PPC.services.${key}.title`)}:</strong> {t(`PPC.services.${key}.description`)}
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </div>
    );
};

export default SEOandPPC;
