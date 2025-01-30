'use client'
import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const Slider = ({ sliders }) => { 
  return (
    <div className="relative">
      <Carousel fade autoplay>
        {sliders.map((slide, index) => (
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
  );
};

export default Slider;
