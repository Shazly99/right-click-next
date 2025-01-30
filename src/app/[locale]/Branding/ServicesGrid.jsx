import { Col, Row } from "antd";

const ServicesGrid = ({ t }) => {

  return (
    <div className="services-grid-container ">
      <Row gutter={[24, 24]}>
        {[
          "BrandPositioning",
          "LogoDesign",
          "Slogan",
          "StationaryDesign",
          "PackagingDesign",
          "SignageDesign",
        ].map((key, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <div className="service-card">
              <h3>{t(`Branding.Services.${key}.title`)}</h3>
              <p>{t(`Branding.Services.${key}.description`)}</p>
            </div>
          </Col>
        ))}

        {[
          "IdentityGuideline",
          "InternalBranding",
          "CorporateProfile",
          "BrochureDesign",
        ].map((key, index) => (
          <Col xs={24} sm={24} lg={12} key={index}>
            <div className="service-card">
              <h3>{t(`Branding.Services.${key}.title`)}</h3>
              <p>{t(`Branding.Services.${key}.description`)}</p>
              {
                index == 0 &&
                <div className="mt-2">
                  {<p>✔ {t(`Branding.Services.IdentityGuideline.benefit1`)}</p>}
                  {<p>✔ {t(`Branding.Services.IdentityGuideline.benefit2`)}</p>}
                  {<p>✔ {t(`Branding.Services.IdentityGuideline.benefit3`)}</p>}
                </div>
              }

            </div>
          </Col>
        ))}

        {[
          "WhyWait",
          "WhyWait2",
        ].map((key, index) => (
          <Col xs={24} sm={24} lg={12} key={index}>
            <div className="service-card">
              <h3>{t(`Branding.Services.${key}.title`)}</h3>
              <p>{t(`Branding.Services.${key}.description`)}</p>

            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServicesGrid;
