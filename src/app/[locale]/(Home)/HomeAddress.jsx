"use client";

import HeaderTitle from "@/app/(components)/header/HeaderTitle";
import img from "@/constants/img";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const HomeAddress = () => {
        let t = useTranslations();
    return (
        <div className="address__section">
            <div className="container">
                <Row>
                    <Col xl={12} lg={12} xxl={12} md={24} xs={24}>
                        <HeaderTitle title={t('TheAddress')} />
                        <br/>
                        <strong className="location-text mt-7">
                            (Saudi Arabia - Mecca - Imam Muslim - Al Zaher District)
                        </strong> 
                        <p className="location-link">Takhassusi StAlthuniyan, South Building, Office #12 Riyadh 12363</p>
                        <Button type="primary" className="mt-3"  onClick={() => navigator.clipboard.writeText("https://www.google.com/maps/place/...")}>
                            Copy Link
                        </Button>

                    </Col>
                    <Col xl={12} lg={12} xxl={12} md={24} xs={24}>
                        <div className="map-image">
                            <Image width={500} height={50} src={img.map} alt="Map Location" />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default HomeAddress;
