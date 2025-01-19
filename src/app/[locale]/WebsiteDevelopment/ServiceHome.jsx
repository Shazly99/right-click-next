"use client";

import img from '@/constants/img';
import '@style/seo.css';
import { Col, Row } from 'antd';
import { useLocale } from 'next-intl';
import Image from 'next/image';

const ServiceHome = () => {
    const locale = useLocale(); 


    const data = [
        {
            image: img.sIcon1,
            short_title: "PHP Development",
            short_title_Ar: 'تطوير PHP',
            short_description: [
                "We provide custom PHP development solutions that are tailored to your business needs, allowing you to create robust and dynamic web applications.",
                "Our PHP services include building secure, scalable platforms that can handle increased traffic as your business grows.",
                "With PHP, we integrate advanced features and functionalities that streamline your business processes and improve overall performance."
            ],
            short_description_Ar: [
                "نقدم خدمات تطوير PHP مخصصة تناسب احتياجات عملك، مما يتيح بناء تطبيقات ويب مرنة وقوية.",
                "خدماتنا تشمل بناء منصات آمنة وقابلة للتوسع لتتمكن من التكيف مع زيادة حركة المرور مع نمو أعمالك.",
                "ندمج ميزات ووظائف متقدمة تسهّل العمليات التجارية وتحسن الأداء العام لموقعك."
            ]
        },
        {
            image: img.sIcon6,
            short_title: "WordPress Development",
            short_title_Ar: 'تطوير ووردبريس',
            short_description: [
                "Our WordPress development services provide you with a fully customizable, easy-to-manage website that fits your specific business needs.",
                "We build WordPress sites with built-in SEO features, helping you achieve higher search engine rankings and attract the right audience.",
                "The intuitive content management system (CMS) allows you to easily update and manage your website, keeping it fresh and engaging without any technical knowledge."
            ],
            short_description_Ar: [
                "نوفر حلول تطوير ووردبريس مخصصة تمكنك من إدارة وتخصيص موقعك بكل سهولة وبما يتناسب مع احتياجاتك الخاصة.",
                "نبني مواقع ووردبريس مع ميزات SEO مدمجة لضمان ظهور موقعك في محركات البحث بشكل أفضل وجذب الجمهور المناسب.",
                "نظام إدارة المحتوى السهل الاستخدام يتيح لك تحديث وإدارة موقعك بكل سلاسة دون الحاجة إلى معرفة تقنية متقدمة."
            ]
        },
        {
            image: img.sIcon5,
            short_title: "Enterprise Development",
            short_title_Ar: 'تطوير حلول الشركات',
            short_description: [
                "We specialize in enterprise-level development, creating custom applications that improve operational efficiency and streamline complex business processes.",
                "Our solutions are built to handle large volumes of data securely, ensuring that your business runs smoothly and efficiently.",
                "Our enterprise solutions are designed to scale with your business, providing flexibility and tools that evolve with your needs over time."
            ],
            short_description_Ar: [
                "نختص بتطوير حلول مخصصة للشركات، حيث نقوم ببناء تطبيقات تعزز من كفاءة العمل وتبسط العمليات المعقدة.",
                "حلولنا مصممة للتعامل مع كميات كبيرة من البيانات بأمان، مما يضمن تشغيل الأعمال بشكل سلس وآمن.",
                "حلولنا للشركات مصممة لتكون قابلة للتوسع مع نمو أعمالك، مما يوفر لك الأدوات المرنة التي تتطور مع احتياجاتك."
            ]
        },
        {
            image: img.sIcon2,
            short_title: "Ecommerce Development",
            short_title_Ar: 'تطوير التجارة الإلكترونية',
            short_description: [
                "We build ecommerce platforms using PHP ,Laravel and React, creating feature-rich online stores that enhance both functionality and user experience.",
                "Our ecommerce solutions are optimized for SEO, helping you increase visibility, attract more customers, and drive conversions.",
                "Whether you’re just starting or looking to expand, our platforms are built to scale, offering flexibility as your ecommerce business grows."
            ],
            short_description_Ar: [
                "نبني متاجر إلكترونية متكاملة باستخدام منصات Laravel وReact js، مما يساعد في تعزيز وظائف المتجر الإلكتروني وتحسين تجربة المستخدم.",
                "حلولنا للتجارة الإلكترونية مصممة لتحسين SEO، مما يساهم في زيادة الظهور في محركات البحث وزيادة المبيعات.",
                "سواء كنت تبدأ عملك أو تتوسع، منصاتنا تتيح لك التوسع بسهولة لتلبية احتياجات عملك المتنامي."
            ]
        },
        {
            image: img.sIcon3,
            short_title: "Web Applications",
            short_title_Ar: 'تطوير تطبيقات الويب',
            short_description: [
                "We develop custom web applications tailored to your specific business needs, improving user engagement and operational efficiency.",
                "Our web applications are designed to be accessible from any device, providing your customers with a seamless experience wherever they are.",
                "From internal business tools to customer-facing platforms, our web applications help you streamline operations and improve overall user experience."
            ],
            short_description_Ar: [
                "نقوم بتطوير تطبيقات ويب مخصصة تناسب احتياجاتك الخاصة، مما يساعد في تحسين تفاعل المستخدمين وزيادة كفاءة العمليات.",
                "تطبيقاتنا مصممة لتكون متاحة على مدار الساعة ومن أي جهاز، مما يوفر لعملائك تجربة سلسة وسهلة.",
                "من أدوات الأعمال الداخلية إلى المنصات الموجهة للعملاء، تطبيقات الويب الخاصة بنا تساعدك على تحسين الكفاءة التشغيلية وتعزيز تجربة المستخدم."
            ]
        },
        {
            image: img.sIcon4,
            short_title: "Javascript Development",
            short_title_Ar: 'تطوير Javascript',
            short_description: [
                "Elevate user experiences with JavaScript’s asynchronous capabilities, enabling dynamic content updates without page reloads.",
                "Tap into the expansive JavaScript ecosystem, benefiting from a plethora of libraries and frameworks like React, Vue, Node.js, and Angular for tailored solutions.",
                "Harness the versatility of JavaScript for both frontend and backend development, ensuring cohesive and integrated web applications."
            ],
            short_description_Ar: [
                "ارتقِ بتجارب المستخدم مع قدرات JavaScript غير المتزامنة، مما يتيح تحديثات المحتوى الديناميكية بدون إعادة تحميل الصفحات.",
                "استفد من النظام البيئي الواسع لـ JavaScript، من خلال مكتبات وأطر عمل متنوعة مثل React و Vue و Node.js و Angular لحلول مخصصة.",
                "استفد من مرونة JavaScript لكل من تطوير الواجهة الأمامية والخلفية لضمان تكامل وتماسك تطبيقات الويب."
            ]
        }
    ];
    return (
        <div className='app__service_home m-0 overflow-hidden'>
            <section className='services_container'>
                <Row className='servicess_mt'>
                    {
                        data?.map((item, index) => (
                            <Col key={index} xl={8} lg={8} md={12} sm={24} className={`${index + 1 > 3 ? 'p-2' : 'mt-2 '} border service_${index + 1}`} dir={locale  == "ar" ? 'rtl' : 'ltr'}>
                                <div className="services_content flex flex-column justify-content-between h-100 p-4 py-6">
                                    <div className="icons">
                                        <Image width={500} height={50} src={item.image} className='w-100' alt="" />
                                    </div>
                                    <span>{locale  === 'ar' ? item.short_title_Ar : item.short_title}</span>
                                    <div className={`${locale  === "en" ? 'list' : 'list_ar'}`}>
                                        <ul>
                                            {(locale  === 'ar' ? item.short_description_Ar : item.short_description).map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </section>
        </div>
    )
}

export default ServiceHome;
