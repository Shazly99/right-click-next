"use client";

import img from '@/constants/img'; // Update this import as per your Next.js project structure
import { EnvironmentOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined, TikTokOutlined, XOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Col, Divider, Row, Typography } from 'antd';
import { useTranslations } from 'next-intl'; // Replace with next-intl for translations
import Image from 'next/image';
import './footer.css';
import { Link } from '@/navigation';

const { Text } = Typography;



const Footer = () => {
  const t = useTranslations();

  return (
    <>
      <div className="footer"  >
        <div className="container_master">
          <Row gutter={24} className="footer-bottom">
            {/* Column 1 */}
            <Col xs={24} md={12} lg={7} xl={7} sm={24} className="footer-column">
              <div
                className="footer-title flex flex-column gap-3"
              >
                <Image src={img.logo} alt="rightclick Logo" width={180} height={80} className='logo_object_fit' />
                <Text className="footer-text">{t('footer.welcome_text')}</Text>
              </div>
              <div
                className="footer-social"
              >
                {/* <a href="https://www.facebook.com/rightclickco" target="_blank" rel="noopener noreferrer"> <FacebookOutlined /> </a> */}
                <a href="https://www.linkedin.com/company/rightclick" target="_blank" rel="noopener noreferrer"> <LinkedinOutlined /> </a>
                <a href="https://www.youtube.com/@rightclick" target="_blank" rel="noopener noreferrer"><YoutubeOutlined /></a>
                <a href="https://www.instagram.com/rightclickco" target="_blank" rel="noopener noreferrer"> <InstagramOutlined /> </a>
                <a href="https://www.x.com/rightclickco" target="_blank" rel="noopener noreferrer"> <XOutlined /> </a>
                {/* <a href="https://www.tiktok.com/@rightclick" target="_blank" rel="noopener noreferrer"> <TikTokOutlined /> </a> */}
              </div>
            </Col>

            {/* Column 2 */}
            <Col xs={24} md={12} lg={5} xl={5} sm={24} className="footer-column">
              <div
                className="footer_title"
              >
                <p>{t('footer.quick_links')}</p>
                <div className="Divider"></div>
              </div>
              <div
                className="footer_links"
              >
                <Link href="/" className="footer-link">{t('nav_home')}</Link>
                <Link href="/about" className="footer-link">{t('nav_about')}</Link>
                <Link href="/portfolio" className="footer-link">{t('nav_Projects')}</Link>
                <Link href="/clients" className="footer-link">{t('footer.clients')}</Link>
                <Link href="/contact" className="footer-link">{t('footer.contact_us_link')}</Link>
              </div>
            </Col>
            {/* Column 2 */}
            <Col xs={24} md={12} lg={5} xl={5} sm={24} className="footer-column">
              <div
                className="footer_title"
              >
                <p>{t('OurServices')}</p>
                <div className="Divider"></div>
              </div>
              <div
                className="footer_links"
              >
                <Link href="/WebsiteDevelopment" className="footer-link">{t('WebsiteDevelopment.title')}</Link>
                <Link href="/Branding" className="footer-link">{t('Branding.title')}</Link>
                <Link href="/ContentMarketing" className="footer-link">{t('ContentMarketing.title')}</Link>
                <Link href="/DigitalMarketing" className="footer-link">{t('DigitalMarketing.title')}</Link>
                <Link href="/VisualProduction" className="footer-link">{t('VisualProduction.title')}</Link>
              </div>
            </Col>

            {/* Column 3 */}
            <Col xs={24} md={12} lg={7} xl={7} sm={24} className="footer-column">
              <div
                className="footer_title"
              >
                <p>{t('footer.contact_us')}</p>
                <div className="Divider"></div>
              </div>
              <div
                className="footer_links_socil"
              >
                <a href="https://www.google.com/maps/place/24%C2%B044'20.8%22N+46%C2%B038'48.4%22E/@24.7390256,46.6458355,18.85z/data=!4m4!3m3!8m2!3d24.739117!4d46.646789?entry=ttu" target="_blank" rel="noopener noreferrer">
                  <Text className="footer-contact">
                    <EnvironmentOutlined /> <span>{t('footer.address_')}</span>
                  </Text><br />
                </a>
                <a href="tel:+966569090410" target="_blank" rel="noopener noreferrer" className="footer-contact">
                  <PhoneOutlined /> <span dir="ltr">{t('footer.phone_number_1')}</span>
                </a><br />
                <a href="tel:+966114501344" target="_blank" rel="noopener noreferrer" className="footer-contact">
                  <PhoneOutlined /> <span dir="ltr">{t('footer.phone_number_2')}</span>
                </a><br />
                <a href="mailto:info@rightclick.com" target="_blank" rel="noopener noreferrer" className="footer-contact">
                  <MailOutlined /> <span>{t('footer.email')}</span>
                </a><br />
              </div>
            </Col>
          </Row>
        </div>
        <div className="last_footer">

          <Divider style={{ borderColor: '#f8f9fa', color: '#f8f9fa' }} className='mt-4' >
            <div dir="ltr" >
              © <a href="https://rightclick.sa/" target="_blank" style={{ color: '#f8f9fa' }} >Right Click</a> 2025. All rights reserved.
            </div>
          </Divider>
        </div>
      </div>
    </>
  );
};

export default Footer;
