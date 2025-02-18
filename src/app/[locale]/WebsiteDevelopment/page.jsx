export const dynamic = "force-dynamic";
import "@style/services.css";
import img from "@/constants/img";
import WhoWeAre from "./WhoWeAre";
import ServiceHome from "./ServiceHome";
import CustomCMS from "./CustomCMS";
import ToolsWeb from "./ToolsWeb";
import Languages from "./Languages";
import ContactForm from "../contact/ContactForm";
import ServicesSlider from "../(seo)/ServicesSlider";
import { createTranslator } from "next-intl";

// Fetch translations
async function getTranslations(locale) {
  const messages = (await import(`../.././../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  return t;
}


const WebsiteDevelopment = async ({ params }) => {
  const locale = params?.locale || "en"; // Retrieve the current locale from route params
  const t = await getTranslations(locale); // Get translations

  let data = {
    title: t('WebsiteDevelopment.title'),
    dec: t('WebsiteDevelopment.dec'),
    title2: t('WebsiteDevelopment.title2'),
    dec2: t('WebsiteDevelopment.dec2'),
    img: img.WebsiteDevelopmentSlider,
  }
  return (
    <>
      <ServicesSlider t={t} data={data} />
      <WhoWeAre />
      <ServiceHome />
      <CustomCMS />
      <ToolsWeb />
      <Languages />
      <div className="mb-5">
        <ContactForm />
      </div>
    </>

  );
};

export default WebsiteDevelopment;


export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "ar" }, // Add other supported locales here
  ];
}
