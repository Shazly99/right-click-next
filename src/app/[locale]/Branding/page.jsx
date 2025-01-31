export const dynamic = "force-dynamic";
import img from "@/constants/img";
import "@style/services.css";
import ServicesSlider from '../(seo)/ServicesSlider'
import { Col, Row } from 'antd';
import Image from 'next/image';
import ServicesGrid from './ServicesGrid';
import WhyChooseRightClick from '../DigitalMarketing/WhyChooseRightClick';
import { createTranslator } from 'next-intl';

// Fetch translations
async function getTranslations(locale) {
    const messages = (await import(`../.././../../messages/${locale}.json`)).default;
    const t = createTranslator({ locale, messages });
    return t;
}

const page = async ({ params }) => {
    const locale = params?.locale || "en"; // Retrieve the current locale from route params
    const t = await getTranslations(locale); // Get translations

    let data = {
        title: t('Branding.title'),
        dec: t('Branding.dec'),
        img: img.Branding,
        title2: t('Branding.title2'),
        dec2: t('Branding.dec2')
    }
    return (
        <div className="app_brand overflow-hidden">
            <div className="slider">
                <ServicesSlider data={data} t={t} />
                <div className="who-we-are-container">
                    <div className="who-we-are-content">
                        <h2 className="who-we-are-title">{t('Branding.who_we_are_title')}</h2>
                        <p className="who-we-are-description"> {t('Branding.who_we_are_description')}
                        </p>
                    </div>
                </div>
            </div>
            <div className="services-section">
                <Row gutter={[32, 32]} align="middle">
                    {/* Brand Positioning Section */}
                    <Col xs={24} sm={24} md={12} className="flex justify-content-start align-items-start">
                        <Image
                            width={500}
                            height={50}
                            src={img.Branding1} // صورة جديدة تناسب Brand Positioning
                            alt="Brand Positioning Illustration"
                            className="service-image"
                        />
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <Row gutter={[32, 32]} align="middle">
                            <Col xs={24} md={24}>
                                <h2 className="section-title">{t('Branding.BrandPositioning.title')}</h2>
                                <ul className="service-list">
                                    <li>
                                        <strong>{t('Branding.BrandPositioning.uniqueMarketSpace')}:</strong> {t('Branding.BrandPositioning.uniqueMarketSpaceDesc')}
                                    </li>
                                    <li>
                                        <strong>{t('Branding.BrandPositioning.highlightStrengths')}:</strong> {t('Branding.BrandPositioning.highlightStrengthsDesc')}
                                    </li>
                                    <li>
                                        <strong>{t('Branding.BrandPositioning.connectAudiences')}:</strong> {t('Branding.BrandPositioning.connectAudiencesDesc')}
                                    </li>
                                </ul>
                            </Col>
                            <Col xs={24} md={24}>
                                <h2 className="section-title">{t('Branding.Naming.title')}</h2>
                                <ul className="service-list">
                                    <li>
                                        <strong>{t('Branding.Naming.foundationSuccess')}:</strong> {t('Branding.Naming.foundationSuccessDesc')}
                                    </li>
                                    <li>
                                        <strong>{t('Branding.Naming.globalAppeal')}:</strong> {t('Branding.Naming.globalAppealDesc')}
                                    </li>
                                    <li>
                                        <strong>{t('Branding.Naming.lastingImpression')}:</strong> {t('Branding.Naming.lastingImpressionDesc')}
                                    </li>
                                </ul>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </div>
            <ServicesGrid t={t} />
            <WhyChooseRightClick />
        </div>
    )
}

export default page

export async function generateStaticParams() {
    return [
        { locale: "en" },
        { locale: "ar" }, // Add other supported locales here
    ];
}
