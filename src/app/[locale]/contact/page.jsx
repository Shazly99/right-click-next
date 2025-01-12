import { Cover } from '@/app/(components)/Cover/Cover';
import img from '@/constants/img';
import { useTranslations } from 'next-intl';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import '@style/contact.css'
import ContactForm from './ContactForm';

const Contact = () => {
  const t = useTranslations();

  const headerData = {
    image: img.contactHeader,
    title: t("contact_us.header"),
    breadcrumb: [
      { label: t("contact_us.breadcrumb_home"), link: "/" },
      { label: t("contact_us.breadcrumb_contact"), link: "/contact" }
    ]
  };

  return (
    <div>
      <Cover headerData={headerData} />
      <div className="contact-info-section mt-6">
        <div className="contact-card">
          <EnvironmentOutlined className="icon" />
          <h3>Our location</h3>
          <p>Kingdom of Saudi Arabia</p>
          <Button type="primary" className="contact-detail">
            Al Mohammadiyyah, Riyadh
          </Button>
        </div>
        <div className="contact-card">
          <MailOutlined className="icon" />
          <h3>Email</h3>
          <p>We welcome your requests</p>
          <Button type="primary" className="contact-detail">
            info@rightclick.sa
          </Button>
        </div>
        <div className="contact-card">
          <PhoneOutlined className="icon" />
          <h3>Contact us</h3>
          <p>Contact us anytime within 24 hours</p>
          <Button type="primary" className="contact-detail">
            +966-56-909-0410
          </Button>
        </div>
      </div>

      <ContactForm />

    </div>
  );
};

export default Contact;
