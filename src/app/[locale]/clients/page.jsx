import React from "react";
import { Cover } from "@/app/(components)/Cover/Cover";
import img from "@/constants/img";
import { useTranslations } from "next-intl";
import '../../../style/clients.css'
import Icon from "@/constants/icon";
import Image from "next/image";

const Clients = () => {
  const t = useTranslations();

  const headerData = {
    image: img.HeaderClients,
    title: t("clients.header"),
    breadcrumb: [
      { label: t("clients.breadcrumb_home"), link: "/" },
      { label: t("clients.breadcrumb_about"), link: "/clients" },
    ],
  };

  const clientLogos = [
    { id: 1, src: img.ourClicnts1, alt: "Sports Hub" },
    { id: 1, src: img.ourClicnts1, alt: "Sports Hub" },
    { id: 2, src: img.ourClicnts2, alt: "Sports Hub" },
    { id: 3, src: img.ourClicnts3, alt: "Sports Hub" },
    { id: 4, src: img.ourClicnts4, alt: "Sports Hub" },
    { id: 5, src: img.ourClicnts5, alt: "Sports Hub" },
    { id: 6, src: img.ourClicnts6, alt: "Sports Hub" },
    { id: 1, src: img.ourClicnts1, alt: "Sports Hub" },
    { id: 2, src: img.ourClicnts2, alt: "Sports Hub" },
    { id: 3, src: img.ourClicnts3, alt: "Sports Hub" },
    { id: 4, src: img.ourClicnts4, alt: "Sports Hub" },
    { id: 5, src: img.ourClicnts5, alt: "Sports Hub" },
    { id: 6, src: img.ourClicnts6, alt: "Sports Hub" },
    { id: 1, src: img.ourClicnts1, alt: "Sports Hub" },
    { id: 2, src: img.ourClicnts2, alt: "Sports Hub" },
    { id: 3, src: img.ourClicnts3, alt: "Sports Hub" },
    { id: 4, src: img.ourClicnts4, alt: "Sports Hub" },
    { id: 5, src: img.ourClicnts5, alt: "Sports Hub" },
    { id: 6, src: img.ourClicnts6, alt: "Sports Hub" },
    { id: 1, src: img.ourClicnts1, alt: "Sports Hub" },
    { id: 2, src: img.ourClicnts2, alt: "Sports Hub" },
    { id: 3, src: img.ourClicnts3, alt: "Sports Hub" },
    { id: 4, src: img.ourClicnts4, alt: "Sports Hub" },
    { id: 5, src: img.ourClicnts5, alt: "Sports Hub" },
    { id: 6, src: img.ourClicnts6, alt: "Sports Hub" },
    { id: 2, src: img.ourClicnts2, alt: "Sports Hub" },
    { id: 3, src: img.ourClicnts3, alt: "Sports Hub" },
    { id: 4, src: img.ourClicnts4, alt: "Sports Hub" },
    { id: 5, src: img.ourClicnts5, alt: "Sports Hub" },
    { id: 6, src: img.ourClicnts6, alt: "Sports Hub" },
    { id: 1, src: img.ourClicnts1, alt: "Sports Hub" },
    { id: 2, src: img.ourClicnts2, alt: "Sports Hub" },
    { id: 3, src: img.ourClicnts3, alt: "Sports Hub" },
    { id: 4, src: img.ourClicnts4, alt: "Sports Hub" },
    { id: 5, src: img.ourClicnts5, alt: "Sports Hub" },
    { id: 6, src: img.ourClicnts6, alt: "Sports Hub" },
    { id: 1, src: img.ourClicnts1, alt: "Sports Hub" },
    { id: 2, src: img.ourClicnts2, alt: "Sports Hub" },
    { id: 3, src: img.ourClicnts3, alt: "Sports Hub" },
    { id: 4, src: img.ourClicnts4, alt: "Sports Hub" },
    { id: 5, src: img.ourClicnts5, alt: "Sports Hub" },
    { id: 6, src: img.ourClicnts6, alt: "Sports Hub" },
    { id: 1, src: img.ourClicnts1, alt: "Sports Hub" },
    { id: 2, src: img.ourClicnts2, alt: "Sports Hub" },
    { id: 3, src: img.ourClicnts3, alt: "Sports Hub" },
    { id: 4, src: img.ourClicnts4, alt: "Sports Hub" },
    { id: 5, src: img.ourClicnts5, alt: "Sports Hub" },
    { id: 6, src: img.ourClicnts6, alt: "Sports Hub" },
    // Add more logos as needed
  ];

  return (
    <div>
      <Cover headerData={headerData} />
      <div className="clients-section">
        <div className="right_page">
          <Image
            src={Icon.rightclient}
            width={800} height={50}
          />
        </div>
        <div className="clients-grid">
          {clientLogos.map((logo) => (
            <div key={logo.id} className="client-card">
              <Image width={800} height={50} src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Clients;
