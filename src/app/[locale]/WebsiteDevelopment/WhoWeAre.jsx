import { BulbOutlined, TeamOutlined } from "@ant-design/icons";
import React from "react";
import { useTranslations } from 'next-intl';

const WhoWeAre = () => {
    const t = useTranslations("WebsiteDevelopment.WhoWeAre");

    return (
        <div className="who-we-are-modern">
            <div className="modern-card">
                <div className="card-icon">
                    <TeamOutlined style={{ fontSize: "25px", color: "#ff7849" }} />
                </div>
                <h2 className="modern-card-title">{t("WhoWeAreSection.title")}</h2>
                <p className="modern-card-description">
                    {t("WhoWeAreSection.description")}
                </p>
            </div>
            <div className="modern-card">
                <div className="card-icon">
                    <BulbOutlined style={{ fontSize: "25px", color: "#ff7849" }} />
                </div>
                <h2 className="modern-card-title">{t("WhyRightClick.title")}</h2>
                <p className="modern-card-description">
                    {t("WhyRightClick.description")}
                </p>
            </div>
        </div>
    );
};

export default WhoWeAre;
