import img from '@/constants/img';
import Image from 'next/image';
import AboutHome from '../(Home)/AboutHome';
import StatsSection from '../(Home)/StatsSection';
import '../(Home)/home.css'
import { Cover } from '@/app/(components)/Cover/Cover';
import { useTranslations } from 'next-intl';
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

      {/* <Image
        src={img.aboutHeader}
        alt="background"
        width={1000}
        height={500}
        className="w-full h-full"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1934px"
      /> */}
      <AboutHome />
      <StatsSection />
    </>
  );
}
