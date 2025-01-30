import img from '@/constants/img';
import { useLocale } from 'next-intl'; 
import { Row ,Col} from 'antd';
import Image from 'next/image';

const Languages = () => {
    const locale = useLocale(); 
    const data = [
        {
            image: img.tools1,
            short_title: "Laravel Development",
            short_title_Ar: "تطوير لارافيل",
            short_description: [
                "Our Laravel development solutions offer a secure, high-performing framework that is perfect for building scalable web applications.",
                "Laravel provides robust security features that protect your application and data from potential threats.",
                "The clean and organized code structure of Laravel makes it easy to maintain and expand your application as your business grows, reducing long-term costs."
            ],
            short_description_Ar: [
                "حلول Laravel لدينا توفر إطار عمل آمن وفعّال، مثالي لتطوير تطبيقات ويب قابلة للتوسع مع نمو أعمالك.",
                "Laravel يوفر ميزات أمان متقدمة تحمي تطبيقك وبياناتك من التهديدات الشائعة.",
                "بفضل هيكل Laravel المنظم والواضح، يصبح من السهل صيانة وتوسيع التطبيق مع مرور الوقت، مما يقلل التكاليف والمشكلات التقنية."
            ]
        },
        {
            image: img.tools2,
            short_title: "React Development",
            short_title_Ar: "تطوير React",
            short_description: [
                "React allows us to create fast, responsive websites with a smooth user experience, making it ideal for retaining visitors and reducing bounce rates.",
                "React’s component-based architecture enables us to build scalable applications efficiently, saving time and reducing development costs.",
                "Whether for a small website or a large-scale application, React’s flexibility ensures your project will grow seamlessly as your business expands."
             ],
            short_description_Ar: [
                "باستخدام React، نصمم مواقع سريعة وتفاعلية تقدم تجربة استخدام سلسة، مما يساعد في زيادة وقت بقاء الزوار وتقليل معدل الارتداد.",
                "هيكل React القائم على المكونات يساعدنا على بناء تطبيقات قابلة للتوسع بسرعة وكفاءة، مما يوفر الوقت ويقلل التكاليف.",
                "سواء كنت بحاجة إلى موقع بسيط أو تطبيق معقد، React يوفر المرونة اللازمة للتوسع مع نمو مشروعك."
            ]
        },
        {
            image: img.tools6,
            short_title: "WordPress Development",
            short_title_Ar: 'تطوير WordPress',
            short_description: [
                "Our custom WordPress development ensures your website is fully optimized for search engines and tailored to your specific business needs.",
                "We integrate the right plugins and features to extend the functionality of your WordPress site, whether it’s for ecommerce, bookings, or other business tools.",
                "WordPress offers a flexible, scalable platform that can grow with your business, making it a suitable choice for projects of all sizes."
            ],
            short_description_Ar: [
                "نوفر خدمات تطوير ووردبريس مخصصة تضمن أن موقعك متوافق مع محركات البحث، ويقدم تجربة مستخدم مميزة.",
                "ندمج الإضافات والميزات التي تعزز من وظائف موقع ووردبريس الخاص بك، سواء كانت للتجارة الإلكترونية أو الحجز أو أي أدوات أخرى.",
                "ووردبريس يوفر منصة مرنة وقابلة للتوسع يمكن أن تنمو مع احتياجاتك، مما يجعله الحل الأمثل لجميع أحجام المشاريع."
            ]
        },
    ];


    return (
        <div className='app__service_home overflow-hidden bg_Languages pt-8'>
            <section className='services_container'>
                <Row className='servicess_mt'>
                    {locale == "en" ?
                        <header dir={locale == "ar" ? 'rtl' : 'ltr'}>
                            <span className='header_span'>Web development languages.</span>
                            <p className='header_p'>
                                <span>Languages</span> & Frameworks We Work With
                            </p>
                            <p className='last_p'>
                                In Saudi Arabia, we specialise in custom web development using PHP (particularly Laravel), JS (notably React), and WordPress, and we have expertise in leading CMS platforms like WordPress.
                            </p>
                        </header>
                        :
                        <header dir={locale == "ar" ? 'rtl' : 'ltr'}>
                            <span className='header_span'>لغات تطوير الويب.</span>
                            <p className='header_p'>
                                <span>اللغات</span> والأطر التي نعمل بها
                            </p>
                            <p className='last_p'>
                                في السعودية، نتخصص في تطوير الويب المخصص باستخدام PHP (خاصة Laravel)، و JS (وتحديداً React)، و WordPress. لدينا أيضًا خبرة في المنصات الرائدة لإدارة المحتوى (CMS) مثل WordPress.
                            </p>
                        </header>
                    }

                    {
                        data?.map((item, index) => (
                            <Col key={index} xl={8} lg={8} md={12} sm={24} className={`${index + 1 > 3 ? 'p-2' : 'mt-2 '} border service_${index + 1}`} dir={locale == "ar" ? 'rtl' : 'ltr'}>
                                <div className="services_content flex flex-column justify-content-between h-100 p-4 py-6">
                                    <div className="icons">
                                        <Image width={500} height={50} src={item.image} className='w-100' alt="" />
                                    </div>
                                    <span>{locale === 'ar' ? item.short_title_Ar : item.short_title}</span>
                                    <div className={`${locale === "en" ? 'list' : 'list_ar'}`}>
                                        <ul>
                                            {(locale === 'ar' ? item.short_description_Ar : item.short_description).map((desc, i) => (
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

export default Languages
