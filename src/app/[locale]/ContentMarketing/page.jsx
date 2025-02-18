export const dynamic = "force-dynamic";
import img from "@/constants/img";
import "@style/services.css";
import { createTranslator } from 'next-intl';
import ServicesSlider from '../(seo)/ServicesSlider';
import WhyChooseRightClick from '../DigitalMarketing/WhyChooseRightClick';
import ServicesSection from './ServicesSection';
import SocialMediaSection3 from './SocialMediaSection3';

// Fetch translations
async function getTranslations(locale) {
    const messages = (await import(`../.././../../messages/${locale}.json`)).default;
    const t = createTranslator({ locale, messages });
    return t;
}

const Page = async ({ params }) => {
    const locale = params?.locale || "en"; // Retrieve the current locale from route params
    const t = await getTranslations(locale); // Get translations

    let data = {
        title: t('ContentMarketing.title'),
        dec: t('ContentMarketing.dec'),
        img: img.ContentMarketing,
        title2: t('ContentMarketing.title2'),
        dec2: t('ContentMarketing.dec2')
    } 

    const contentKeys = ["SalesCopywriting", "BrandStorytelling", "AdCopy"];

    return (
        <div className="overflow-hidden">
            <ServicesSlider t={t} data={data} />
            <div className="copywriting-container">
                <div className="container"> 
                    <div className="copywriting-header">
                        <h2> {t('ContentMarketing.CopywritingServicesh')}  </h2>
                        <p> {t('ContentMarketing.CopywritingServicesp')} <span>{t('ContentMarketing.CopywritingServicesSpan')}</span></p>
                    </div>
                    <div className="copywriting-cards">
                        {contentKeys.map((key, index) => (
                            <div key={index} className="copywriting-card">
                                <h3>{t(`ContentMarketing.${key}.title`)}</h3>
                                <p>{t(`ContentMarketing.${key}.description`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ServicesSection  />
            <SocialMediaSection3 />
            <WhyChooseRightClick /> 
        </div>
    )
}

export default Page
export async function generateStaticParams() {
    return [
        { locale: "en" },
        { locale: "ar" }, // Add other supported locales here
    ];
}
