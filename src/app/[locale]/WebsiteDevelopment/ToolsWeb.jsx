import img from '@/constants/img';
import { useLocale } from 'next-intl';
import Image from 'next/image';

const ToolsWeb = () => {
    const locale = useLocale();

    const content = {
        en: {
            heading: 'Harnessing Web Development Tools & Software',
            description: `At Rightclick, we utilise an arsenal of industry-leading tools and sophisticated software in our web development process. 
      Our team of experts, armed with these state-of-the-art tools, are adept at crafting compelling websites that effectively communicate 
      your brand's ethos and values while delivering a seamless user experience. Discover how Rightclick can transform your digital footprint 
      with a high-impact web design tailored to your unique needs.`,
        },
        ar: {
            heading: 'توظيف أدوات وبرمجيات تطوير الويب',
            description: `في Rightclick، نستخدم مجموعة من الأدوات والبرمجيات المتطورة والرائدة في الصناعة خلال عملية تطوير الويب. 
      فريقنا من الخبراء، مجهز بهذه الأدوات المتقدمة، قادر على إنشاء مواقع ويب جذابة تنقل روح وقيم علامتك التجارية بفعالية، 
      مع تقديم تجربة مستخدم سلسة. اكتشف كيف يمكن لـ Rightclick أن تحول بصمتك الرقمية بتصميم ويب عالي التأثير يتناسب مع احتياجاتك الفريدة.`,
        },
    };

    const { heading, description } = content[locale];

    return (
        <div className="tools-web-container" dir={locale == "ar" ? 'rtl' : 'ltr'}>
            <h2>
                {heading} <span className="highlight">Tools & Software</span>
            </h2>
            <p className="description">
                {description}
            </p>

            <div className="tools-icons">
                <div className="tool">
                    <Image width={500} height={50} src={img.tools2} alt="React Logo" />
                </div>
                <div className="tool">
                    <Image width={500} height={50} src={img.tools1} alt="PHP Logo" />
                </div>
                <div className="tool">
                    <Image width={500} height={50} src={img.tools3} alt="WPCode Logo" />
                </div>
                <div className="tool">
                    <Image width={500} height={50} src={img.tools4} alt="Google Analytics Logo" />
                </div>
                <div className="tool">
                    <Image width={500} height={50} src={img.tools5} alt="Google Search Console Logo" />
                </div>
            </div>
        </div>
    );
};

export default ToolsWeb;
