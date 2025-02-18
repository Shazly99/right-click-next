import { Cover } from '@/app/(components)/Cover/Cover';
import img from '@/constants/img';
import { useTranslations } from 'next-intl';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import '@style/contact.css';
import ContactForm from './ContactForm';

const Contact = () => {
  const t = useTranslations("contact_us"); // استخدم مفتاح "contact_us" للترجمة

  const headerData = {
    image: img.contactHeader,
    title: t("header"),
    breadcrumb: [
      { label: t("breadcrumb_home"), link: "/" },
      { label: t("breadcrumb_contact"), link: "/contact" }
    ]
  };

  return (
    <div className='overflow-hidden'>
      <Cover headerData={headerData} />
      <div className="content_container">

      <Row gutter={[20, 20]} className="contact-info-section mt-6">
        <Col xl={8} lg={8} md={12} sm={24} xs={24} >
          <div className="contact-card w-full">
            <EnvironmentOutlined className="icon" />
            <h3>{t("location_title")}</h3>
            <p>{t("location_text")}</p>
            <a href="https://www.google.com/maps?ll=24.738738,46.644337&z=16&t=m&hl=en&gl=SA&mapclient=embed&q=24%C2%B044%2719.5%22N+46%C2%B038%2748.9%22E+24.738750,+46.646917@24.73875,46.6469167" target="_blank" rel="noopener noreferrer">
              <Button type="primary" className="contact-detail">
                {t("location_button")}
              </Button>
            </a>
          </div>
        </Col>
        <Col xl={8} lg={8} md={12} sm={24} xs={24}  >
          <div className="contact-card w-full">

            <MailOutlined className="icon" />
            <h3>{t("email_title")}</h3>
            <p>{t("email_text")}</p>
            <a href="mailto:info@rightclick.sa" target="_blank" rel="noopener noreferrer">
              <Button type="primary" className="contact-detail">
                {t("email_button")}
              </Button>
            </a>
          </div>
        </Col>
        <Col xl={8} lg={8} md={12} sm={24} xs={24}  >
          <div className="contact-card w-full">

            <PhoneOutlined className="icon" />
            <h3>{t("phone_title")}</h3>
            <p>{t("phone_text")}</p>
            <a href="tel:+966569090410" target="_blank" rel="noopener noreferrer">
              <Button type="primary" className="contact-detail" dir='ltr'>
                {t("phone_button")}
              </Button>
            </a>
          </div>
        </Col>
      </Row>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
