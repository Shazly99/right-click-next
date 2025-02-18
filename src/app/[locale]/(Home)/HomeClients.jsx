import HeaderTitle from '@/app/(components)/header/HeaderTitle';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const HomeClients = ({ clients }) => {
  let t = useTranslations();

  return (
    <div className="mt-6 bg-gray-100 py-8 px-4">
      <div className="text-center mb-6">
        <HeaderTitle title={t('clients.header')} />
      </div>
      <div dir='ltr' >
        <Marquee speed={50} pauseOnHover={true} gradient={false} className="flex items-center">
          {clients.data.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center mx-4 bg-white shadow-md rounded-md p-3"
              style={{
                width: "160px", 
                height: "120px", 
                border:"1px solid #000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 15px",
                padding:"15px 10px",
                border:"1px solid #000",
                borderRadius:'10px'
  
              }}
            >
              <Image
                src={item.image}
                alt={`Client ${index + 1}`}
                width={80} // عرض الصورة
                height={80} // ارتفاع الصورة
                style={{
                  objectFit: "contain", // يجعل الصورة تناسب الحاوية دون تمدد
                  maxHeight: "100%", // التحكم في ارتفاع الصورة
                  maxWidth: "100%", // التحكم في عرض الصورة
                }}
              />
            </div>
          ))}
        </Marquee>

      </div>
    </div>
  );
};

export default HomeClients;
