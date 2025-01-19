import HeaderTitle from '@/app/(components)/header/HeaderTitle';
import img from '@/constants/img';
import { Col, Row } from 'antd';
import Image from 'next/image';

const AboutHome = () => {
    return (
        <Row className="about-home-container">
            {/* القسم الخاص بالنص */}
            <Col xl={12} lg={12} className="about-home-text">
                <HeaderTitle title="Who We Are" />
                <p>
                    A Saudi Company Specialized In The Field Of Digital Marketing And In The Management And
                    Enrichment Of Content On Social Networks, In Addition To Designing Websites, Organizing
                    Events, And Many Services Provided By Innovative, Creative, And Specialized Elite Group.
                </p>
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
