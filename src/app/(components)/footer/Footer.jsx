'use client'; 
import img from '@/constants/img'; // Update this import as per your Next.js project structure
import { EnvironmentOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined, TikTokOutlined, XOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';
import { motion, useAnimation } from 'framer-motion';
import { useTranslations } from 'next-intl'; // Replace with next-intl for translations
import Link from 'next/link'; // Use Next.js' Link component
import { useEffect, useRef } from 'react';
import './footer.scss';

const { Text } = Typography;

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  const t = useTranslations(); // Updated translation hook for Next.js
  const controls = useAnimation();
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible'); // Start animation when footer is in view
          } else {
            controls.start('hidden'); // Hide animation when footer is out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [controls]);

  return (
    <div className="footer" ref={footerRef}>
      <div className="container_master">
        <Row gutter={24} className="footer-bottom">
          {/* Column 1 */}
          <Col xs={24} sm={8} className="footer-column">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="footer-title flex flex-column gap-3"
            >
              <img src={img.logo} alt="Vigtas Logo" width={150} />
              <Text className="footer-text">{t('footer.welcome_text')}</Text>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="footer-social"
            >
              <a href="https://www.facebook.com/vigtasco" target="_blank" rel="noopener noreferrer"> <FacebookOutlined /> </a>
              <a href="https://www.linkedin.com/company/vigtas" target="_blank" rel="noopener noreferrer"> <LinkedinOutlined /> </a>
              <a href="https://www.youtube.com/@vigtas" target="_blank" rel="noopener noreferrer"><YoutubeOutlined /></a>  
              <a href="https://www.instagram.com/vigtasco" target="_blank" rel="noopener noreferrer"> <InstagramOutlined /> </a>
              <a href="https://www.x.com/vigtasco" target="_blank" rel="noopener noreferrer"> <XOutlined /> </a>
              <a href="https://www.tiktok.com/@vigtas" target="_blank" rel="noopener noreferrer"> <TikTokOutlined /> </a>
            </motion.div>
          </Col>

          {/* Column 2 */}
          <Col xs={24} sm={8} className="footer-column">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="footer_title"
            >
              <p>{t('footer.quick_links')}</p>
              <div className="Divider"></div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
              className="footer_links"
            >
              <Link href="/services" className="footer-link">{t('nav_service')}</Link>
              <Link href="/products" className="footer-link">{t('nav_Products')}</Link>
              <Link href="/clients" className="footer-link">{t('footer.clients')}</Link>
              <Link href="/contact" className="footer-link">{t('footer.contact_us_link')}</Link>
            </motion.div>
          </Col>

          {/* Column 3 */}
          <Col xs={24} sm={8} className="footer-column">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
              className="footer_title"
            >
              <p>{t('footer.contact_us')}</p>
              <div className="Divider"></div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              className="footer_links_socil"
            >
              <Text className="footer-contact">
                <EnvironmentOutlined /> <span>{t('footer.address_')}</span>
              </Text><br />
              <a href="tel:+201115893336" target="_blank" rel="noopener noreferrer" className="footer-contact">
                <PhoneOutlined /> <span dir="ltr">{t('footer.phone_number_1')}</span>
              </a><br />
              <a href="mailto:info@vigtas.com" target="_blank" rel="noopener noreferrer" className="footer-contact">
                <MailOutlined /> <span>{t('footer.email')}</span>
              </a><br />
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
