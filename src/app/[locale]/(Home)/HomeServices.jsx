import HeaderTitle from '@/app/(components)/header/HeaderTitle';
import { Link } from '@/navigation';
import { Button, Card, Col, Row } from 'antd';
import { useTranslations } from 'next-intl';
import Image from 'next/image';


const HomeServices = ({ services }) => {
    let t = useTranslations();

    return (
        <div className="home-services-container flex-column mt-8">
            <div className="container">
                <header className='bg-blue-800'>
                    <HeaderTitle title={t('OurServices')} />
                    <p className="subtitle">  {services.section_content} </p>
                </header>
                <Row gutter={[16, 16]} className="home-services-grid mt-5">
                    {services.data.slice(0, 1).map((service, index) => (
                        <Col
                            key={index}
                            xs={24} sm={24}
                            md={12}
                            lg={index === 0 ? 24 : 12}
                            xl={index === 0 ? 24 : 12}
                            className='blur_position'
                        >
                            <Card
                                className={`home-services- flex flex-row home_first_services  ${index === 0 ? 'home-services-card-featured' : ''} `}
                                bordered
                            >
                                <Row  >
                                    <Col xs={24} sm={24} md={12} lg={5} xl={5} className='home_first_services_img'>
                                        <div className="home-services-icon flex justify-content-start"  >
                                            <Image width={1000} height={1000} src={service.image} className='w-full h-full' alt={service.title} />
                                        </div>
                                    </Col>
                                    <Col
                                        xs={24} sm={24} md={{ span: 17, offset: 2 }} lg={{ span: 17, offset: 2 }}
                                        xl={{ span: 17, offset: 2 }}>
                                        <div className="content">
                                            <h3 className="home-services-title">{service.title}</h3>
                                            <p className="home-services-description">{service.description.split(' ').slice(0, 40).join(' ')}</p>

                                            <Link href={`/${service.key_word}`}>
                                                <Button type="primary" className={`home-services-order-button ${index === 0 ? 'home-services-button-featured' : ''}`}  > {t('Order')} </Button>
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                            <div className="blur_1"></div>
                        </Col>
                    ))}
                </Row>

                <Row gutter={[50, 50]} className="home-services-grid mt-6">
                    {services.data.slice(1, 5).map((service, index) => (
                        <Col key={index} xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div className="blur_position">
                                <Card
                                    className={` home-services- home-services-2 flex flex-row ${index === 0 ? 'home-services-card-featured' : ''}`}
                                    bordered>
                                    <div className="flex home_services_images justify-content-start"  >
                                        <Image width={500} height={500} src={service.image} className=' ' alt={service.title} />
                                    </div>
                                    <h3 className="home-services-title mt-3">{service.title}</h3>
                                    <p className="home-services-description">{service.description.split(' ').slice(0, 15).join(' ')}</p>
                                    <Link href={`/${service.key_word}`}>
                                        <Button type="primary" className={`home-services-order-button ${index === 0 ? 'home-services-button-featured' : ''}`}  > {t('Order')} </Button>
                                    </Link>
                                </Card>

                                <div className="blur_2"></div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default HomeServices;
