export const dynamic = "force-dynamic";
import img from "@/constants/img";
import "@style/services.css";
import { Col, Row } from 'antd';
import Image from 'next/image';
import ServicesSlider from '../(seo)/ServicesSlider';
import WhyChooseRightClick from '../DigitalMarketing/WhyChooseRightClick';
import SocialMediaSection2 from './SocialMediaSection2';
import { createTranslator } from "next-intl";
import DocumentaryCard from "./VisualProductiondocumentary";
import EventServices from "./EventServices";

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
        img: img.VisualProduction,
        title: t('VisualProduction.title'),
        dec: t('VisualProduction.dec'),
        title2: t('VisualProduction.title2'),
        dec2: t('VisualProduction.dec2')
    };
    const benefits = [
        {
            title: "Experience You Can Trust:",
            description: "Over 10 years of helping businesses like yours succeed online.",
        },
        {
            title: "Tailored Solutions:",
            description: "Every strategy is customized to fit your business needs and goals.",
        },
        {
            title: "Real Results:",
            description: "We focus on driving measurable growth, from traffic to revenue.",
        },
        {
            title: "Your Growth Partners:",
            description: "We&apos;re here to guide you every step of the way, ensuring your success in a competitive market.",
        },
    ];
    return (
        <div className="VisualProduction overflow-hidden">
            <ServicesSlider t={t} data={data} />
            <div className="documentary-container">
                <DocumentaryCard />
            </div>
            <div className="services-section">
                <Row gutter={[32, 32]} align="middle">
                    {/* Events Coverage Section */}
                    <Col xs={24} md={12} className="flex justify-content-start align-items-start">
                        <Image width={500} height={50}
                            src={img.VisualProductionservice}
                            alt="SEO illustration"
                            className="service-image"
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <EventServices />
                    </Col>

                </Row>
            </div>

            <Image
                width={1300}
                height={500}
                src={img.VisualProductionbg}
                alt="SEO illustration"
                className="w-full h-full"
            />
            <SocialMediaSection2 />
            <WhyChooseRightClick benefits={benefits} />

        </div>
    )
}

export default Page;

export async function generateStaticParams() {
    return [
        { locale: "en" },
        { locale: "ar" }, // Add other supported locales here
    ];
}
