'use client'
import React from 'react';
import { Card, Typography, Timeline, Row, Col } from 'antd';
import '@style/projectDetails.css';
import img from '@/constants/img';
import Image from 'next/image';
import { useLocale, useTranslations } from 'use-intl';

const { Title, Text } = Typography;

const ProjectDetails = () => {
    const t = useTranslations();
    const locale = useLocale();
    let scopes = [
        { title: "توفير محاسبين ومراجعين" },
        { title: "توفير مشرفين حسابات" },
    ]
    return (
        <div className="app__project_details">
            <div className="cover overflow-hidden">
                <Image
                    src={img.Cover}
                    alt="background"
                    width={1000}
                    height={500}
                    className="w-full h-full"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1000px"
                />
            </div>
            <div className="details">
                <div className="details-container mt-8 " >
                    <Row gutter={[32, 32]} dir={locale === "en" ? 'ltr' : 'rtl'}>
                        <Col lg={12} xl={12} xxl={12} md={12} sm={24} xs={24}
                            className="flex justify-content-center align-items-center ">
                            <div className="goal-box" >
                                <p>بوليفارد سيتي</p>
                            </div>
                        </Col>
                        <Col lg={12} xl={12} xxl={12} md={12} sm={24} xs={24}>
                            <Row className="project-info">
                                <Col span={12}>
                                    <div className="info-title">   {t('period')}</div>
                                    <div className="info-value">مدة موسم الرياض </div>
                                </Col>
                                <Col span={12}>
                                    <div className="info-title"> {t('year')}</div>
                                    <div className="info-value">2023</div>
                                </Col>
                            </Row>
                            <div className="project-goals">
                                <div className="info-title"> {t('scope')}</div>
                                <Timeline>
                                    {
                                        scopes?.map((item, index) => (
                                            <Timeline.Item key={index}>
                                                <span>  {item?.title} </span>
                                            </Timeline.Item>
                                        ))
                                    }
                                </Timeline>
                            </div>
                        </Col>

                    </Row>

                    <div className="app_project_description">
                        <Row gutter={[32, 32]} dir={locale === "en" ? 'ltr' : 'rtl'}>
                            <Col xl={10} lg={10} xxl={10} md={24} sm={24} >
                                <div className="content" dir={locale === "en" ? 'ltr' : 'rtl'}>
                                    <h1>{t('projectdetails')}</h1>
                                    <p>من أشهر وجهات الترفيه في الرياض، متواجد فيه مسارح وصالات عرض ومطاعم عالمية.. يعتبر وجهة رئيسية في فعاليات موسم الرياض اللي تجذب زوار من جميع الأعمار.. الكبير والصغير يستمتعون بتجارب فريدة ومثيرة. سعدنا حنا مون لايت بدورنا في بتوفير محاسبين ومراجعين ومشرفين حسابات لضمان إدارة مالية فعالة ودقيقة. </p>
                                </div>
                            </Col>
                            <Col xl={4} lg={4} xxl={4} md={24} sm={24} ></Col>
                            <Col xl={10} lg={10} xxl={10} md={24} sm={24} >
                                <div className="cover">
                                    <Image width={500} height={50} src={img?.mainDetails} alt="" srcset="" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetails;







