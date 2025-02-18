
import img from '@/constants/img';
import { useLocale } from 'next-intl';
import Image from 'next/image';

import '@style/seo.css';
import { Col, Row } from 'antd';
export const CustomCMS = () => {
    const locale = useLocale();


    const content = {
        en: {
            title: "Custom CMS",
            subtitle: "Development",
            description: "In today's digital age, the need for a unique online presence is paramount. Custom CMS (Content Management System) development offers businesses the flexibility to design a platform tailored to their specific needs, ensuring a seamless user experience and efficient content management.",
            advantagesTitle: "Advantages Of Custom CMS Development:",
            advantages: [
                "Tailored User Experience: Craft a user interface and experience that aligns perfectly with your brand and audience preferences.",
                "Scalability: As your business grows, a custom CMS can evolve with you, accommodating new features and functionalities without the constraints of off-the-shelf solutions.",
                "Enhanced Security: Design a CMS with security at its core, ensuring your content and user data remain protected from potential threats.",
                "Integration Capabilities: Seamlessly integrate third-party tools and applications, ensuring a cohesive digital ecosystem for your business.",
                "Ownership And Control: Retain full ownership of your platform, making decisions about hosting, updates, and modifications without vendor restrictions."
            ]
        },
        ar: {
            title: "نظام إدارة محتوى مخصص",
            subtitle: "تطوير",
            description: "في العصر الرقمي الحالي، الحاجة إلى وجود رقمي فريد أمر بالغ الأهمية. يتيح تطوير نظام إدارة المحتوى المخصص (CMS) للشركات تصميم منصة مخصصة لتلبية احتياجاتها الخاصة، مما يضمن تجربة مستخدم سلسة وإدارة محتوى فعالة.",
            advantagesTitle: "مزايا تطوير نظام إدارة محتوى مخصص:",
            advantages: [
                "تجربة مستخدم مخصصة: صمم واجهة مستخدم وتجربة تتماشى تمامًا مع علامتك التجارية وتفضيلات جمهورك.",
                "قابلية التوسع: مع نمو عملك، يمكن أن يتطور نظام إدارة المحتوى المخصص معك، مستوعبًا ميزات ووظائف جديدة دون قيود الحلول الجاهزة.",
                "أمان معزز: صمم نظام إدارة محتوى مع الأمن كجوهر له، لضمان بقاء المحتوى وبيانات المستخدم محمية من التهديدات المحتملة.",
                "قدرات التكامل: دمج بسلاسة أدوات وتطبيقات الطرف الثالث، مما يضمن نظامًا بيئيًا رقميًا متكاملًا لعملك.",
                "الملكية والتحكم: احتفظ بالملكية الكاملة لمنصتك، واتخذ قرارات بشأن الاستضافة والتحديثات والتعديلات دون قيود الموردين."
            ]
        }
    };

    const currentContent = locale == 'ar' ? content.ar : content.en;

    return (
        <div className="custom-cms-container  ">
            <Row dir={locale == "en" ? 'ltr' : 'rtl'}>
            <Col md={14} lg={14} sm={24} >
                    <div className='content_crm'>
                        <h2 className="custom-cms-title" style={{ color: '#F15926' }}>{currentContent.title}</h2>
                        <h3 className="custom-cms-subtitle" style={{ fontWeight: 'bold' }}>{currentContent.subtitle}</h3>
                        <p className="custom-cms-description my-4">
                            {currentContent.description}
                        </p>
                    </div>
                </Col>

                <Col md={14} lg={10} sm={24}>
                    <div className="image-container">
                        <Image width={500} height={50} src={img.crm} alt="Custom CMS Image" className="w-100 h-full" />
                    </div>
                </Col>
                <Col md={24} lg={24} sm={24} >
                    <div className='content_crm mt-4'> 
                    <h4 className="advantages-title" style={{ fontWeight: 'bold' }}>{currentContent.advantagesTitle}</h4> 

                        <ul className="custom-cms-advantages mt-4">
                            {currentContent.advantages.map((advantage, index) => (
                                <li key={index}><span className="advantage-number">{index + 1} - </span> <strong>{advantage.split(':')[0]}:</strong> {advantage.split(':')[1]}</li>
                            ))}
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default CustomCMS;
