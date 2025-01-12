import { Cover } from '@/app/(components)/Cover/Cover';
import Icon from '@/constants/icon';
import img from '@/constants/img';
import { useTranslations } from 'next-intl';
import AboutHome from '../(Home)/AboutHome';
import StatsSection from '../(Home)/StatsSection';
import '../../../style/about.css';

export default function About() {
  const t = useTranslations();

  const headerData = {
    image: img.aboutHeader,
    title: t("about_us.header"),
    breadcrumb: [
      { label: t("about_us.breadcrumb_home"), link: "/" },
      { label: t("about_us.breadcrumb_about"), link: "/about" }
    ]
  };

  return (
    <>
      <Cover headerData={headerData} />
      <AboutHome />
      <StatsSection />
      <div className="app_about_our">
        <div className="goals-strategies-section">
          <div className="design-section">
            <div className="design-item">
              <div className="design-title">Our goals</div>
              <div className="design-description">
                Achieving The Highest Quality For Our Partners, Excellence And Creativity In Our Work And Continuous Development Of Our Services.
              </div>
            </div>
            <div className="design-item">
              <div className="design-title">Our strategies</div>
              <div className="design-description">
                Building Continuous Successful And Strong Business And Partnerships As Well As Attracting The Best Talents In A Stimulating Business Environment.
              </div>
            </div>
          </div>
        </div>



      </div>
        <div className="values-section pb-8">
          <div className="values-header">
            <h3 className="custom-title flex justify-content-center align-items-center">
              <span className="highlight border-border-round-3xl"></span> Our Values
            </h3>
            <p>
              A Saudi Company Specialized In The Field Of Digital Marketing And In The
              Management And Enrichment Of Content On Social Networks.
            </p>
          </div>
          <div className="values-cards">
            <div className="card">
              <div className="icon"><Icon.value1 /> </div>
              <h3>Innovation And Creativity</h3>
            </div>
            <div className="card">
              <div className="icon"><Icon.value2 /></div>
              <h3>Integrity And Transparency</h3>
            </div>
            <div className="card">
              <div className="icon"><Icon.value3 /></div>
              <h3>Quality And Integration</h3>
            </div>
            <div className="card">
              <div className="icon"><Icon.value4 /></div>
              <h3>Passion</h3>
            </div>
            <div className="card">
              <div className="icon"><Icon.value5 /></div>
              <h3>Team Spirit</h3>
            </div>
          </div>
        </div>
    </>
  );
}
