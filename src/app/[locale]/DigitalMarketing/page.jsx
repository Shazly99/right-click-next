
export const dynamic = "force-dynamic";

import img from "@/constants/img";
import "@style/services.css";
import { createTranslator } from "next-intl";
import ServicesSlider from "../(seo)/ServicesSlider";
import SEOandPPC from "./SEOandPPC";
import SocialMediaSection from './SocialMediaSection';
import WhyChooseRightClick from './WhyChooseRightClick';

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
        img: img.DigitalMarketingSlider,
        title: t('DigitalMarketing.title'),
        dec: t('DigitalMarketing.dec'),
        title2: t('DigitalMarketing.title2'),
        dec2: t('DigitalMarketing.dec2')
    }; 

    return (
        <div className="overflow-hidden">
            <ServicesSlider t={t} data={data} />
            <div className="horizontal-process-container">
                <div className="horizontal-process-card">
                    <div className="horizontal-process-content">
                        <h2 className="horizontal-process-title"> {t("DigitalMarketing.Process")} </h2>
                        <p className="horizontal-process-description"> {t("DigitalMarketing.Processd")}   </p>
                    </div>
                </div>
            </div>

            <SEOandPPC />
            <SocialMediaSection />
            <WhyChooseRightClick />
        </div>
    );
};

export default Page;

export async function generateStaticParams() {
    return [
        { locale: "en" },
        { locale: "ar" }, // Add other supported locales here
    ];
}
