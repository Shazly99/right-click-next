export const dynamic = "force-dynamic"; // يفرض تشغيل الصفحة كـ SSR دائمًا

import img from "@/constants/img";
import { Carousel, Col, Row, Timeline } from "antd";
import "@style/projectDetails.css";
import Image from "next/image";
import TimelineProjects from "./TimelineProjects";

async function getTranslations(locale) {
    try {
        const messages = (await import(`../../../../../messages/${locale}.json`)).default;
        return JSON.parse(JSON.stringify(messages)); // تجنب مشاكل createContext داخل use-intl
    } catch (error) {
        console.error("Error loading translations:", error);
        return {};
    }
}

async function fetchProjectData(id, locale) {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/projects/${id}`;

    try {
        const res = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": locale || "en", // Default to English if no locale is provided
            },
            cache: "no-store", // Ensure fresh data
        });

        if (!res.ok) throw new Error("Failed to fetch project data");

        const data = await res.json();
        return data?.data || null;
    } catch (error) {
        console.error("Error fetching project data:", error);
        return null;
    }
}

export default async function ProjectDetails({ params }) {
    const locale = params?.locale || "en";
    const projectId = params?.id;

    const translations = await getTranslations(locale);
    const projectData = await fetchProjectData(projectId, locale);


    return (
        <div className="app__project_details">
            <div className="cover overflow-hidden">
                <Image
                    src={projectData.logo}
                    alt="background"
                    width={1600}
                    height={500}
                    className="w-full h-full"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1000px"
                />
            </div>
            <div className="details">
                <div className="details-container mt-8">
                    <Row gutter={[32, 32]} dir={locale === "en" ? "ltr" : "rtl"}>
                        <Col lg={12} xl={12} xxl={12} md={12} sm={24} xs={24} className="flex justify-content-center align-items-center">
                            <div className="goal-box">
                                <p>{projectData?.title}</p>
                            </div>
                        </Col>
                        <Col lg={12} xl={12} xxl={12} md={12} sm={24} xs={24}>
                            <Row className="project-info">
                                <Col span={12}>
                                    <div className="info-title">{translations.period || "المدة"}</div>
                                    <div className="info-value">{projectData.duration} </div>
                                </Col>
                                <Col span={12}>
                                    <div className="info-title">{translations.year}</div>
                                    <div className="info-value">2023</div>
                                </Col>
                            </Row>
                            <TimelineProjects lang={locale} scopes={projectData} translations={translations} />
                        </Col>
                    </Row>
                    <div className="app_project_description">
                        <Row gutter={[32, 32]} dir={locale === "en" ? 'ltr' : 'rtl'}>
                            <Col xl={10} lg={10} xxl={10} md={24} sm={24} >
                                <div className="content" dir={locale === "en" ? 'ltr' : 'rtl'}>
                                    <h1>{translations.projectdetails}</h1>
                                    <p>{projectData.description}</p>
                                </div>
                            </Col>
                            <Col xl={4} lg={4} xxl={4} md={24} sm={24} ></Col>
                            <Col xl={10} lg={10} xxl={10} md={24} sm={24} >
                                <div className="cover">
                                    <Carousel fade autoplay>
                                        {projectData.images.map((slide, index) => (
                                            <div key={index} className="w-full h-50">
                                                <Image
                                                    src={slide.image} // استخدم رابط الصورة من البيانات القادمة من API
                                                    alt={slide.title || `slide-${index}`} // النص البديل للصورة
                                                    width={1000}
                                                    height={500}
                                                    className="w-full h-full object-cover"
                                                    priority
                                                />
                                            </div>
                                        ))}
                                    </Carousel>
                                 </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return [
        { locale: "en" },
        { locale: "ar" },
    ];
}
