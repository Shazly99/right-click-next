import { useTranslations } from 'next-intl';

const DocumentaryCard = () => {
    const t = useTranslations("VisualProduction.DocumentaryProduction");

    return (
        <div className="documentary-card">
            <h2 className="documentary-title">{t("title")}</h2>
            <div className="documentary-features">
                {["AuthenticStories", "ProfessionalManagement", "CreativeEditing"].map((feature, index) => (
                    <div className="feature" key={index}>
                        <p>
                            <b>{t(`features.${feature}.title`)}:</b> {t(`features.${feature}.description`)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DocumentaryCard;
