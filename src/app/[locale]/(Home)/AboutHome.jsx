import HeaderTitle from '@/app/(components)/header/HeaderTitle';
import img from '@/constants/img';
import { Col, Row } from 'antd';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const AboutHome = ({aboutUs}) => {
    const t = useTranslations();
    return (
        <Row className="about-home-container">
            {/* القسم الخاص بالنص */}
            <Col xl={12} lg={12} className="about-home-text">
                <HeaderTitle title={t('whoWeAre')} />
                <p> {aboutUs?.section_content}   </p>
            </Col>

            {/* القسم الخاص بالصورة */}
            <Col xl={12} lg={12} className="about-home-image">
                <div className="background-color"></div>
                <Image
                    width={100} height={50}
                    src={img.aboutHome} // ضع رابط الصورة هنا
                    alt="About Us"
                />
            </Col>
        </Row>
    );
};

export default AboutHome;
