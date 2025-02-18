import { useTranslations } from 'next-intl';
import { Row, Col } from 'antd';

const EventServices = () => {
    const t = useTranslations("VisualProduction.EventServices");

    return (
        <Row gutter={[32, 32]} align="middle">
            {/* ✅ تغطية الفعاليات */}
            <Col xs={24} md={24}>
                <h2 className="section-title">{t("EventsCoverage.title")}</h2>
                <ul className="service-list">
                    {["ProfessionalDocumentation", "CorporateProductEvents", "BeyondFilming"].map((service, index) => (
                        <li key={index}>
                            <strong>{t(`EventsCoverage.services.${service}.title`)}:</strong> {t(`EventsCoverage.services.${service}.description`)}
                        </li>
                    ))}
                </ul>
            </Col>

            {/* ✅ خدمات البث المباشر */}
            <Col xs={24} md={24}>
                <h2 className="section-title">{t("LivestreamServices.title")}</h2>
                <ul className="service-list">
                    {["RealTimeEngagement", "TechnicalSupport", "MaximizeAudience"].map((service, index) => (
                        <li key={index}>
                            <strong>{t(`LivestreamServices.services.${service}.title`)}:</strong> {t(`LivestreamServices.services.${service}.description`)}
                        </li>
                    ))}
                </ul>
            </Col>
        </Row>
    );
};

export default EventServices;
