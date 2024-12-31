import HeaderTitle from '@/app/(components)/header/HeaderTitle';
import img from '@/constants/img';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const HomeClients = () => {
  const clients = [
    img.ourClicnts1,
    img.ourClicnts2,
    img.ourClicnts3,
    img.ourClicnts4,
    img.ourClicnts5,
    img.ourClicnts6,

    img.ourClicnts1,
    img.ourClicnts2,
    img.ourClicnts3,
    img.ourClicnts4,
    img.ourClicnts5,
    img.ourClicnts6,
  ];

  return (

    <div style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
        <div className="flex justify-content-center align-items-center mb-4">
            <HeaderTitle title={'Our Clients'} />
        </div>
      <Marquee speed={50} pauseOnHover={true}  gradient={true}>
        {clients.map((client, index) => (
          <div
            key={index}
            style={{
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
              src={client}
              width={1000}
              height={500}
              priority
              alt={`Client ${index + 1}`}
              style={{ height: "100px", width: "auto", objectFit: "contain" }}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default HomeClients;
