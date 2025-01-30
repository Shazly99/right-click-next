import { useTranslations } from 'next-intl';
import { Row, Col } from 'antd';
import Image from 'next/image';
import img from '@/constants/img';

const SocialMediaSection3 = () => {
    const t = useTranslations("ContentMarketing.SocialMediaSection3");

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
            <Row gutter={[32, 32]} justify="center" className='mt' style={{ marginTop: '-350px' }}>
                {["LeadGeneration", "CROServices", "LinkBuilding"].map((serviceKey, index) => (
                    <Col xl={8} lg={8} md={24} sm={24} xs={24} key={index}>
                        <div className="card">
                            <h3>{t(`${serviceKey}.title`)}</h3>
                            <p>{t(`${serviceKey}.description`)}</p>
                            <ul>
                                {/* ✅ عرض البيانات بدون array أو object */}
                                {t(`${serviceKey}.title1`) && (
                                    <li><b>{t(`${serviceKey}.title1`)}:</b> {t(`${serviceKey}.description1`)}</li>
                                )}
                                {t(`${serviceKey}.title2`) && (
                                    <li><b>{t(`${serviceKey}.title2`)}:</b> {t(`${serviceKey}.description2`)}</li>
                                )}
                                {t(`${serviceKey}.title3`) && (
                                    <li><b>{t(`${serviceKey}.title3`)}:</b> {t(`${serviceKey}.description3`)}</li>
                                )}
                            </ul>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default SocialMediaSection3;
