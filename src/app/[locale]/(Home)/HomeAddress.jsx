"use client";

import HeaderTitle from "@/app/(components)/header/HeaderTitle";
import img from "@/constants/img";
import { Button, Col, Row } from "antd";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const HomeAddress = () => {
    let t = useTranslations();
    const locale = useLocale();
    return (
        <div className="address__section">
            <div className="container">
                <Row>
                    <Col xl={12} lg={12} xxl={12} md={24} xs={24}>
                        <HeaderTitle title={t('TheAddress')} />
                        <br />
                        <strong className="location-text mt-7">
                            {locale === 'ar'
                                ? '(المملكة العربية السعودية - الرياض  )'
                                : '(Saudi Arabia - Riyadh )'
                            }
                        </strong>
                        <p className="location-link">
                            {t('footer.address_')}
                        </p>
                        <Button type="primary" className="mt-3" onClick={() => navigator.clipboard.writeText("https://www.google.com/maps/place/24%C2%B044'20.8%22N+46%C2%B038'48.4%22E/@24.7390256,46.6458355,18.85z/data=!4m4!3m3!8m2!3d24.739117!4d46.646789?entry=ttu")}>
                            {locale === 'ar' ? 'نسخ الرابط' : 'Copy Link'}
                        </Button>

                    </Col>
                    <Col xl={12} lg={12} xxl={12} md={24} xs={24}>
                        <div className="map-image">
                            <Image
                                width={500}
                                height={50}
                                src={img.map}
                                alt={locale === 'ar' ? 'موقع المكتب على الخريطة' : 'Map Location'}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default HomeAddress;
