'use client'
import HeaderTitle from "@/app/(components)/header/HeaderTitle";
import img from "@/constants/img";
import { Link } from "@/navigation";
import "@style/Portfolio.css";
import { Button, Col, Row } from "antd";
import { useLocale, useTranslations } from 'next-intl';
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const logos = [
  {
    id: 32,
    name: { en: "Gulf Catering Food Factory", ar: "مصنع أغذية الخليج للتموين" },

    img: img.ourClicnts13,
    image: img.cmpProject6,
    content: {
      en: "We designed an innovative website for Gulf Catering Foods Factory, a leading bakery manufacturer in Saudi Arabia for over 25 years and manufacturer of the popular brands Kako and Pronto.",
      ar: "صممنا موقعاً إلكترونيًّا مبتكراً لمصنع أغذية الخليج، الرائدة بصناعة المخبوزات لأكثر من ٢٥ عاماً في المملكة، والمصنع للعلامات التجارية الشهيرة كاكو وبرونتو."
    },
    key_word: { en: "Gulf-Catering-Food-Factory", ar: "مصنع-أغذية-الخليج-للتموين" }


  },
  {
    id: 38,
    // name: { en: "Ikraam", ar: "إكرام" },
    name: { en: "Moon light", ar: "مــــون لايت" },

    img: img.ourClicnts14,
    image: img.cmpProject1,

    content: {
      en: "The website \"moonlight.sa\" is for a Saudi company that specializes in organizing and managing local and international events, conferences, and exhibitions in Saudi Arabia, offering high-quality event services.",
      ar: "موقع \"moonlight.sa\" يتبع شركة سعودية متخصصة في تنظيم وإدارة الفعاليات، المؤتمرات، والمعارض المحلية والدولية في المملكة العربية السعودية، حيث تقدم خدمات عالية الجودة في تنظيم الأحداث."
    },
    key_word: { en: "moon-light", ar: "مــــون-لايت" }
  },
  {
    id: 39,
    name: { en: "Mawani", ar: "موانئ" },
    img: img.ourClicnts15,
    image: img.cmpProject4,
    content: {
      en: "The General Authority for Ports (MAWANI) was established in 1976 as an independent agency responsible for overseeing the management and operation of Saudi Arabia's nine main ports and organizing port operations and actual operation.",
      ar: "تأسست الهيئة العامة للموانئ (موانئ) في العام 1976 كوكالة مستقلة تتولى الإشراف على إدارة وتشغيل الموانئ السعودية الرئيسية التسعة وتنظيم عمليات الموانئ والتشغيل الفعلي."
    },
    key_word: { en: "Mawani", ar: "موانئ" }
  },

  {
    id: 42,
    name: { en: "Hospitality Company", ar: "شركة دور للضيافة" },
    img: img.ourClicnts21,
    image: img.cmpProject2,
    content: {
      en: "A leading company specializing in hospitality, established in 1976. It is distinguished by its extensive experience in managing, developing, and operating hotels and residential complexes around the Kingdom and the world. In partnership with them, we developed their website in a way that matches the size and prestige of the company.",
      ar: "شركة رائدة متخصصة في مجال الضيافة تأسست عام 1976، تتميز بسجلها الرائع وخبرتها الواسعة في إدارة وتطوير وتشغيل الفنادق والمجمعات السكنية في المملكة وحول العالم. بالشراكة معهم، قمنا بتطوير الموقع الإلكتروني الخاص بهم بشكل يوازي حجم الشركة وعراقتها."
    },
    key_word: { en: "Hospitality-Company", ar: "شركة-دور-للضيافة" }
  },
  {
    id: 47,
    name: { en: "ComeAndDo", ar: "ComeAndDo" },
    img: img.ourClicnts22,
    image: img.cmpProject5,
    content: {
      en: "ComeAndDo are specializes in creating unique events, having a hand in numerous national ceremonies, celebrations, festivals, and other events in Saudi Arabia. In partnership with them, We designed and developed their website to be fast-responsive, and featuring video displays throughout pages to attract visitors and achieve better results.",
      ar: "كوم أند دو المتخصصين في بناء أحداث مميزة، لهم بصمة في العديد من المراسم والاحتفالات الوطنية والمهرجانات ومواسم المملكة وغيرها. بشراكتنا معهم تم تصميم وبرمجة الموقع الإلكتروني الخاص بهم بشكل سريع الاستجابة وأيضاً يمتاز بعرض الفيديوهات خلال الصفحات لجذب الزوار وتحقيق أفضل النتائج."
    },
    key_word: { en: "ComeAndDo", ar: "ComeAndDo" }
  },

];

const ProjectHome = () => {
  const [selectedLogo, setSelectedLogo] = useState(logos[0]);
  const pathname = usePathname();
  const isPortfolioRoute = pathname.includes("portfolio");
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="projectHome mt-4">
      {!isPortfolioRoute && (
        <header>
          <HeaderTitle title={t('OurProjects')} />
          <p className="subtitle">
            {locale === 'ar'
              ? 'اكتشف مجموعة من أفضل مشاريعنا الرقمية التي حققت نجاحاً متميزاً لعملائنا في مختلف القطاعات'
              : 'Discover our portfolio of successful digital projects that have delivered outstanding results for clients across various industries'
            }
          </p>
        </header>
      )}

      <Row gutter={[25, 25]} className="mt-6">
        {/* Left Section */}
        <Col xl={{ span: 3 }} className="logo_Container">
          <div className="logoContainer">
            <div
              className="Container"
              style={{
                maxHeight: logos.length > 4 ? "800px" : "auto",
                overflowY: logos.length > 4 ? "auto" : "visible",
              }}
            >
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  className={`logo ${selectedLogo.id === logo.id ? "active" : ""}`}
                  onClick={() => setSelectedLogo(logo)}
                >
                  <Image width={50} height={50} src={logo.img} alt={logo.name[locale]} />
                </div>
              ))}
            </div>
          </div>
        </Col>

        {/* Right Section */}
        <Col xl={{ span: 20, offset: 1 }} className="contentContainer "  >
          {/* Left Section */}
          <Row gutter={[25, 25]}>
            <Col xl={{ span: 12 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <div className="projectDetails">
                <h3 className="projectName flex gap-2 align-items-baseline">
                  <span className="highlight">{t('Project')}</span>{" "}
                  <div className="projectName">{selectedLogo.name[locale]}</div>
                </h3>
                <p className="description">{selectedLogo.content[locale]}</p>
                <div className="button_dir">
                  <Link href={`/portfolio/${selectedLogo.key_word[locale]}`}>
                    <Button type="primary" className="button">
                      {t('SeeProject')}
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xl={{ span: 12 }}>
              <div className="imageWrapper">
                <Image
                  width={500}
                  height={300}
                  src={selectedLogo.image}
                  alt={`${selectedLogo.name[locale]} Project Preview`}
                  className="project_cover_home_section"
                />
              </div>
            </Col>
          </Row>

        </Col>
      </Row>
    </div>
  );
};

export default ProjectHome;
