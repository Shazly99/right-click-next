import { useTranslations } from 'next-intl';
import { Row, Col } from 'antd';

const SocialMediaSection = () => {
    const t = useTranslations("DigitalMarketing");

    return (
        <div className="social-media-section pb-8">
            <Row gutter={[32, 32]} justify="center">
                {/* ✅ التسويق عبر وسائل التواصل الاجتماعي */}
                <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                    <div className="card">
                        <h2>{t("Marketing.title")}</h2>
                        <p>{t("Marketing.subtitle")}</p>
                        <ul>
                            {["SocialMediaManagement", "BrandBuilding", "EnterpriseSocialMedia", "FranchiseSocialMedia"].map((key, index) => (
                                <li key={index}>
                                    <strong>{t(`Marketing.services.${key}.title`)}:</strong> {t(`Marketing.services.${key}.description`)}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Col>

                {/* ✅ الإعلانات عبر وسائل التواصل الاجتماعي */}
                <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                    <div className="card">
                        <h2>{t("Advertising.title")}</h2>
                        <p>{t("Advertising.subtitle")}</p>
                        <ul>
                            {["FacebookAds", "LinkedInAds", "InstagramAds", "TwitterAds", "TikTokCampaigns"].map((key, index) => (
                                <li key={index}>
                                    <strong>{t(`Advertising.services.${key}.title`)}:</strong> {t(`Advertising.services.${key}.description`)}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Col>

                {/* ✅ توليد العملاء المحتملين */}
                {["LeadGeneration", "CRO", "LinkBuilding"].map((section, index) => (
                    <Col xl={8} lg={8} md={24} sm={24} xs={24} key={index}>
                        <div className="card">
                            <h3>{t(`${section}.title`)}</h3>
                            <p>{t(`${section}.description`)}</p>
                            <ul>
                                {[1, 2, 3].map((num) => (
                                    t(`${section}.title${num}`) && (
                                        <li key={num}>
                                            <strong>{t(`${section}.title${num}`)}:</strong> {t(`${section}.description${num}`)}
                                        </li>
                                    )
                                ))}
                            </ul>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default SocialMediaSection;
