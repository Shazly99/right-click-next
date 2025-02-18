import { Col, Row } from 'antd';
import { useTranslations } from 'next-intl';

const SocialMediaSection2 = () => {
    const t = useTranslations("VisualProduction.SocialMediaSection2");

    return (
        <Row className="social-media-section">
            {["MotionVideoProduction", "ReelsProduction", "GraphicDesignForVideo"].map((section, index) => (
                <Col xl={8} md={8} sm={24} xs={24} key={index} className="card">
                    <h3>{t(`${section}.title`)}</h3>
                    <ul>
                        {[1, 2, 3].map((num) =>
                            t(`${section}.description${num}`) ? (
                                <li key={num}>{t(`${section}.description${num}`)}</li>
                            ) : null
                        )}
                    </ul>
                </Col>
            ))}
        </Row>
    );
};

export default SocialMediaSection2;
